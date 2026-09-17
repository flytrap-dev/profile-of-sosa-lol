import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;

uniform vec2 u_res;
uniform float u_time;
uniform float u_theme;
uniform float u_scroll;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = vec2(p.x * 0.80 + p.y * 0.60, -p.x * 0.60 + p.y * 0.80) * 2.07 + 13.17;
    a *= 0.5;
  }
  return v;
}

float gauss(vec2 p, vec2 c, vec2 k) {
  vec2 d = (p - c) * k;
  return exp(-dot(d, d));
}

float beam(vec2 from, float ang, float spread, float lenK) {
  vec2 dir = vec2(sin(ang), -cos(ang));
  float along = max(dot(from, dir), 0.0);
  vec2 lat = from - dir * along;
  float widen = spread * (0.58 + along * 1.05);
  float d = length(lat) / max(widen, 0.0001);
  return exp(-d * d * 1.2) * exp(-along * lenK) * smoothstep(0.0, 0.04, along);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = frag / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = vec2(uv.x * aspect, uv.y);

  vec2 warp = vec2(
    fbm(p * 1.4 + vec2(u_time * 0.012, 0.15)),
    fbm(p * 1.7 + vec2(3.8, -u_time * 0.009))
  );
  float n = fbm(p * 1.9 + warp * 0.45);
  float n2 = fbm(p * 4.6 + warp * 0.9 - vec2(u_time * 0.008, 0.3));

  vec2 origin = vec2(0.5 * aspect, 1.14 + u_scroll * 0.42);
  vec2 from = p - origin;
  from.x += (n - 0.5) * 0.045;
  float sway = sin(u_time * 0.07) * 0.012;

  float shafts = 0.0;
  shafts += beam(from, sway, 0.05, 0.58) * 0.36;
  shafts += beam(from, 0.09 + sway, 0.036, 0.64) * 0.78;
  shafts += beam(from, -0.08 + sway, 0.034, 0.62) * 0.72;
  shafts += beam(from, 0.2 + sway * 0.6, 0.04, 0.72) * 0.58;
  shafts += beam(from, -0.22 + sway * 0.6, 0.038, 0.7) * 0.54;
  shafts += beam(from, 0.34 + sway * 0.4, 0.032, 0.86) * 0.38;
  shafts += beam(from, -0.37 + sway * 0.4, 0.03, 0.9) * 0.34;
  shafts += beam(from, 0.5 + sway * 0.3, 0.028, 1.05) * 0.2;
  shafts += beam(from, -0.52 + sway * 0.3, 0.026, 1.08) * 0.18;

  float veil = gauss(p, vec2(0.5 * aspect, 1.08), vec2(0.52, 0.92)) * 0.14;
  float room = gauss(p, vec2(0.5 * aspect, 0.82), vec2(0.36, 0.48)) * 0.08;

  float grain = (hash(frag + vec2(u_time * 8.0, u_time * 5.0)) - 0.5) * 0.016;
  float dust = (n2 - 0.5) * 0.05;

  float light = veil + room + shafts * mix(0.84, 1.1, n);
  light *= smoothstep(0.06, 0.5, uv.y);
  light *= 1.0 - smoothstep(0.15, 1.8, u_scroll) * 0.45;
  light += dust * shafts + grain;
  light = max(light, 0.0);
  light *= mix(0.82, 0.4, u_theme);

  vec3 col = mix(vec3(0.92, 0.92, 0.91), vec3(1.0, 0.995, 0.98), u_theme) * light;
  float alpha = clamp(light * mix(0.72, 0.4, u_theme), 0.0, 0.4);
  gl_FragColor = vec4(col * alpha, alpha);
}
`

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function Skylight() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl =
      canvas.getContext('webgl', {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        depth: false,
        stencil: false,
      }) ||
      (canvas.getContext('experimental-webgl', {
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        depth: false,
        stencil: false,
      }) as WebGLRenderingContext | null)
    if (!gl) return

    const vert = compile(gl, gl.VERTEX_SHADER, VERT)
    const frag = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vert || !frag) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(program, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'u_res')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uTheme = gl.getUniformLocation(program, 'u_theme')
    const uScroll = gl.getUniformLocation(program, 'u_scroll')

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let theme = document.documentElement.dataset.theme === 'light' ? 1 : 0
    let frame = 0
    let running = true
    let scrollNow = window.scrollY
    const grid = canvas.parentElement?.querySelector('.sky-grid') as HTMLElement | null

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }

    const draw = (now: number) => {
      if (!running) return
      resize()
      if (reduce.matches) {
        scrollNow = window.scrollY
        canvas.style.transform = ''
        if (grid) grid.style.transform = ''
      } else {
        scrollNow = window.scrollY
        canvas.style.transform = `translate3d(0, ${-scrollNow * 0.12}px, 0)`
        if (grid) grid.style.transform = `translate3d(0, ${-scrollNow * 0.05}px, 0)`
      }
      const vh = Math.max(window.innerHeight, 1)
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.disable(gl.DEPTH_TEST)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, reduce.matches ? 0 : now * 0.001)
      gl.uniform1f(uTheme, theme)
      gl.uniform1f(uScroll, reduce.matches ? 0 : scrollNow / vh)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      frame = window.requestAnimationFrame(draw)
    }

    const onTheme = () => {
      theme = document.documentElement.dataset.theme === 'light' ? 1 : 0
    }

    const observer = new MutationObserver(onTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const onVis = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frame)
        return
      }
      frame = window.requestAnimationFrame(draw)
    }

    document.documentElement.classList.add('has-gl-skylight')
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVis)
    frame = window.requestAnimationFrame(draw)

    return () => {
      running = false
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVis)
      observer.disconnect()
      document.documentElement.classList.remove('has-gl-skylight')
      canvas.style.transform = ''
      if (grid) grid.style.transform = ''
      gl.deleteProgram(program)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
      gl.deleteBuffer(buffer)
    }
  }, [])

  return <canvas ref={canvasRef} className="skylight-gl" aria-hidden="true" />
}
