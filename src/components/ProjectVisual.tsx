import type { ReactNode } from 'react'
import type { FeaturedProject } from '@/data/site'

const sans = 'Plus Jakarta Sans, ui-sans-serif, sans-serif'

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden text-fg">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          background:
            'radial-gradient(ellipse 72% 50% at 10% -8%, rgb(255 255 255 / 0.1), transparent 60%)',
        }}
      />
      {children}
    </div>
  )
}

function Label({
  x,
  y,
  children,
  dim = 0.46,
  size = 11,
  anchor = 'start',
}: {
  x: number | string
  y: number | string
  children: ReactNode
  dim?: number
  size?: number
  anchor?: 'start' | 'middle' | 'end'
}) {
  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      fillOpacity={dim}
      fontFamily={sans}
      fontSize={size}
      textAnchor={anchor}
    >
      {children}
    </text>
  )
}

function Corners({ x, y, w, h, s = 10, o = 0.9 }: { x: number; y: number; w: number; h: number; s?: number; o?: number }) {
  return (
    <path
      d={`M${x} ${y + s}V${y}H${x + s}M${x + w - s} ${y}H${x + w}V${y + s}M${x} ${y + h - s}V${y + h}H${x + s}M${x + w - s} ${y + h}H${x + w}V${y + h - s}`}
      stroke="currentColor"
      strokeOpacity={o}
    />
  )
}

export function ProjectVisual({ kind }: { kind: FeaturedProject['visual'] }) {
  if (kind === 'detection') {
    return (
      <Frame>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" fill="none" aria-hidden="true">
          <rect x="16" y="14" width="608" height="332" stroke="currentColor" strokeOpacity="0.2" />
          <path d="M16 42h608M108 14v332" stroke="currentColor" strokeOpacity="0.14" />
          <Label x="28" y="32">DET · CAPTURE</Label>
          <Label x="248" y="32" dim={0.38}>
            2560×1440 · cuda:0
          </Label>
          <Label x="612" y="32" anchor="end">
            119 FPS · 8.4ms
          </Label>

          {Array.from({ length: 11 }, (_, i) => (
            <line
              key={i}
              x1="108"
              y1={58 + i * 22}
              x2="468"
              y2={58 + i * 22}
              stroke="currentColor"
              strokeOpacity="0.05"
            />
          ))}

          <rect x="132" y="72" width="196" height="154" stroke="currentColor" strokeOpacity="0.95" />
          <Corners x={132} y={72} w={196} h={154} />
          <path d="M230 72v154M132 149h196" stroke="currentColor" strokeOpacity="0.18" />
          <rect x="132" y="56" width="102" height="16" fill="currentColor" />
          <text x="138" y="68" fill="var(--bg)" fontFamily={sans} fontSize="11">
            target 0.94
          </text>
          <rect x="248" y="214" width="80" height="3" fill="currentColor" />

          <rect x="352" y="118" width="108" height="92" stroke="currentColor" strokeOpacity="0.4" />
          <Corners x={352} y={118} w={108} h={92} s={8} o={0.45} />
          <rect x="352" y="102" width="72" height="16" stroke="currentColor" strokeOpacity="0.45" />
          <Label x="358" y="114" dim={0.7}>
            conf 0.61
          </Label>

          <rect x="480" y="56" width="128" height="214" stroke="currentColor" strokeOpacity="0.16" />
          <Label x="492" y="74">CLASSES</Label>
          {[
            ['target', 0.94],
            ['partial', 0.61],
            ['noise', 0.12],
          ].map(([name, score], i) => (
            <g key={String(name)}>
              <Label x="492" y={102 + i * 48} dim={0.4}>
                {name}
              </Label>
              <Label x="596" y={102 + i * 48} anchor="end" dim={0.85}>
                {Number(score).toFixed(2)}
              </Label>
              <rect x="492" y={110 + i * 48} width="104" height="3" fill="currentColor" fillOpacity="0.12" />
              <rect x="492" y={110 + i * 48} width={104 * Number(score)} height="3" fill="currentColor" fillOpacity="0.85" />
            </g>
          ))}

          <path
            d="M28 318h8l6-16 8 28 7-18 6 8 10-22 8 20"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeLinejoin="round"
          />
          <Label x="108" y="330">onnx · yolov8n · 640² · nms 0.45 · sm_86</Label>
          <rect x="520" y="318" width="48" height="8" fill="currentColor" fillOpacity="0.8" />
          <rect x="572" y="318" width="20" height="8" fill="currentColor" fillOpacity="0.22" />
        </svg>
      </Frame>
    )
  }

  if (kind === 'identity') {
    return (
      <Frame>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" fill="none" aria-hidden="true">
          <rect x="16" y="14" width="608" height="332" stroke="currentColor" strokeOpacity="0.2" />
          <path d="M16 42h608M320 42v304" stroke="currentColor" strokeOpacity="0.14" />
          <Label x="28" y="32">RING 3 · CLIENT</Label>
          <Label x="332" y="32">RING 0 · SURFACE</Label>
          <Label x="612" y="32" anchor="end">
            TEMP SESSION
          </Label>

          {[
            ['SMBIOS', 'BFE9-11A0-88C2'],
            ['NVME', '931 GB · ns 1'],
            ['MAC', '02:11:22:33:44:55'],
            ['UUID', '7C3A-E91F-0041'],
            ['IOCTL', '0x0022_A014'],
          ].map(([k, v], i) => (
            <g key={k}>
              <Label x="28" y={70 + i * 44} dim={0.38} size={10}>
                {k}
              </Label>
              <text x="28" y={88 + i * 44} fill="currentColor" fillOpacity="0.92" fontFamily={sans} fontSize="14">
                {v}
              </text>
              <line x1="28" y1={98 + i * 44} x2="300" y2={98 + i * 44} stroke="currentColor" strokeOpacity="0.08" />
            </g>
          ))}

          <path d="M300 180h40" stroke="currentColor" strokeOpacity="0.7" />
          <path d="M332 172l8 8-8 8" stroke="currentColor" strokeOpacity="0.7" />
          <Label x="320" y="166" anchor="middle" dim={0.4} size={10}>
            ioctl
          </Label>

          <rect x="360" y="70" width="240" height="240" stroke="currentColor" strokeOpacity="0.22" />
          <rect x="388" y="98" width="184" height="184" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="424" y="134" width="112" height="112" stroke="currentColor" strokeOpacity="0.95" />
          <rect x="472" y="182" width="16" height="16" fill="currentColor" />
          <Corners x={424} y={134} w={112} h={112} s={8} />
          <Label x="480" y="318" anchor="middle">
            narrow device object
          </Label>
        </svg>
      </Frame>
    )
  }

  if (kind === 'input') {
    const samples: [number, number][] = [
      [72, 268],
      [156, 176],
      [248, 132],
      [360, 214],
      [468, 108],
      [552, 92],
    ]
    return (
      <Frame>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" fill="none" aria-hidden="true">
          <rect x="16" y="14" width="608" height="332" stroke="currentColor" strokeOpacity="0.2" />
          <path d="M16 42h608" stroke="currentColor" strokeOpacity="0.14" />
          <Label x="28" y="32">INPUT · dx/dt</Label>
          <Label x="612" y="32" anchor="end">
            n=6 · 80ms
          </Label>

          {Array.from({ length: 8 }, (_, i) => (
            <line key={`v-${i}`} x1={56 + i * 70} y1="56" x2={56 + i * 70} y2="292" stroke="currentColor" strokeOpacity="0.06" />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <line key={`h-${i}`} x1="56" y1={72 + i * 44} x2="600" y2={72 + i * 44} stroke="currentColor" strokeOpacity="0.06" />
          ))}
          <path d="M56 292h544M56 56v236" stroke="currentColor" strokeOpacity="0.28" />
          <Label x="56" y="308" dim={0.35}>
            0ms
          </Label>
          <Label x="600" y="308" anchor="end" dim={0.35}>
            80ms
          </Label>

          <path
            d="M72 268 C140 268, 168 96, 248 132 S360 276, 552 92"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          {samples.map(([x, y], i) => (
            <g key={i}>
              <line x1={x} y1={y} x2={x} y2="292" stroke="currentColor" strokeOpacity="0.12" />
              <circle cx={x} cy={y} r="3" fill="currentColor" />
              <Label x={x + 6} y={y - 8} dim={0.5} size={10}>
                {String(i * 16).padStart(2, '0')}
              </Label>
            </g>
          ))}
          <path d="M552 92 l11 18 h-7 l-4 9 z" fill="currentColor" />

          <rect x="400" y="56" width="200" height="64" stroke="currentColor" strokeOpacity="0.14" />
          <Label x="412" y="74">PEAK  1.00</Label>
          <Label x="412" y="92">IDLE  0.04</Label>
          <Label x="412" y="110">API   short</Label>
        </svg>
      </Frame>
    )
  }

  const cells = [
    0.12, 0.18, 0.22, 0.16, 0.2, 0.28, 0.42, 0.38, 0.24, 0.31, 0.78, 0.7, 0.36, 0.4, 0.82, 0.88, 0.44, 0.48, 0.62,
    0.55, 0.3, 0.34, 0.4, 0.36, 0.22,
  ]

  return (
    <Frame>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 360" fill="none" aria-hidden="true">
        <rect x="16" y="14" width="608" height="332" stroke="currentColor" strokeOpacity="0.2" />
        <path d="M16 42h608" stroke="currentColor" strokeOpacity="0.14" />
        <Label x="28" y="32">HALCYON · LUMINANCE</Label>
        <Label x="612" y="32" anchor="end">
          HIT 1 / 1
        </Label>

        <rect x="28" y="56" width="360" height="210" stroke="currentColor" strokeOpacity="0.2" />
        <rect x="44" y="72" width="140" height="88" fill="currentColor" fillOpacity="0.08" />
        <rect x="196" y="108" width="120" height="72" fill="currentColor" fillOpacity="0.18" />
        <rect x="152" y="148" width="28" height="28" fill="currentColor" fillOpacity="0.78" />
        <circle cx="166" cy="162" r="22" stroke="currentColor" />
        <path d="M166 148v28M152 162h28" stroke="currentColor" strokeOpacity="0.9" />
        <Corners x={152} y={148} w={28} h={28} s={6} />

        <rect x="404" y="56" width="220" height="210" stroke="currentColor" strokeOpacity="0.18" />
        <Label x="416" y="76">LOUPE 5×5</Label>
        {cells.map((v, i) => (
          <rect
            key={i}
            x={416 + (i % 5) * 28}
            y={88 + Math.floor(i / 5) * 28}
            width="26"
            height="26"
            fill="currentColor"
            fillOpacity={v}
          />
        ))}
        <rect x="472" y="144" width="26" height="26" stroke="currentColor" />

        <Label x="416" y="244">L  78%</Label>
        <Label x="500" y="244">Δ  ±6</Label>
        <rect x="416" y="252" width="140" height="4" fill="currentColor" fillOpacity="0.12" />
        <rect x="416" y="252" width="110" height="4" fill="currentColor" />

        {[0.95, 0.78, 0.55, 0.32, 0.12].map((v, i) => (
          <rect key={v} x={28 + i * 74} y="284" width="66" height="44" fill="currentColor" fillOpacity={v} />
        ))}
      </svg>
    </Frame>
  )
}
