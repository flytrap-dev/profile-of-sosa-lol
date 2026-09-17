/**
 * Site content — edit this file to customize the portfolio.
 * Empty optional fields are omitted from the UI.
 */

export type SocialLink = {
  label: string
  href: string
}

export type FeaturedProject = {
  number: string
  name: string
  year: string
  type: string
  description: string
  technologies: string[]
  visual: 'detection' | 'identity' | 'input' | 'color'
  href?: string
  github?: string
}

export type ArchiveProject = {
  number: string
  name: string
  description: string
  technology: string
  year: string
  href?: string
  status?: string
}

export type ExperienceItem = {
  role: string
  organization: string
  period: string
  summary: string
}

export type Capability = {
  number: string
  title: string
  description: string
}

export type StackGroup = {
  label: string
  items: string[]
}

export const site = {
  name: 'Flytrap',
  initials: 'FT',
  role: 'Windows internals in C++',
  slogan: 'backend boss',
  availability: 'Taking on new work',
  available: true,
  avatar: `${import.meta.env.BASE_URL}avatar.png`,
  discord: {
    id: '694662945900199936',
    tag: 'pastemaker',
    displayName: 'flytrap',
    profile: 'https://discord.com/users/694662945900199936',
  },
  email: '',
  github: '',
  socials: [] as SocialLink[],
  formEndpoint: '',
  hero: {
    headline: 'C++ on Windows. Kernel and user mode.',
    line2: '',
    description:
      "I'm Flytrap. About a year of C++ on Windows, mostly kernel and user-mode. I do capture and GPU inference when that's the work. This page is the public version. And I'm not writing a guide to how any of it talks to the OS.",
  },
  about: {
    title: 'Most of my time is native Windows.',
    intro:
      "Most days I'm in C++ (WDK, Win32). User-mode and kernel-mode as one problem. A year isn't a long time. I still throw a lot out.",
    approach:
      'I want drivers I can read later, and clients that stay small. Capture and input keep showing up because those are the problems I keep opening. Inference too, lately. How a given tool talks to the OS stays in the code.',
    now: 'Detection and input',
    tenure: 'About a year of C++',
    stackLine: 'C++ · WDK · Win32 · CUDA',
  },
  contact: {
    headline: 'If the work is Windows internals.',
    note: "Discord is the inbox. There's no form.",
  },
  habits: [
    {
      kicker: 'Kernel / user',
      title: 'Treat it as one problem.',
      description:
        "If the user-mode client is messy, I assume I got the driver wrong too. I don't split the work into two pretty layers and hope they meet.",
    },
    {
      kicker: 'Rebuilds',
      title: 'I delete a lot.',
      description:
        "A year of C++ is mostly deletions. If it ships with my name on it, I keep cutting. The public surface should be boring.",
    },
    {
      kicker: 'Shipping',
      title: 'A thin client is enough.',
      description:
        "The hot path stays in the loop. The rest is a short API. I don't ship a framework around it.",
    },
  ],
  stack: [
    {
      label: 'Languages',
      items: ['C++'],
    },
    {
      label: 'Windows',
      items: ['WDK', 'Win32'],
    },
    {
      label: 'Inference',
      items: ['ONNX Runtime', 'CUDA'],
    },
    {
      label: 'Interface',
      items: ['Dear ImGui', 'DirectX 11'],
    },
  ] satisfies StackGroup[],
  capabilities: [
    {
      number: '01',
      title: 'Windows internals',
      description: 'C++ in user-mode and kernel-mode. I keep the surface small.',
    },
    {
      number: '02',
      title: 'Kernel / user splits',
      description: 'Drivers and the programs that talk to them. The split should stay uneventful.',
    },
    {
      number: '03',
      title: 'Native desktop',
      description: 'Win32 and DirectX tools where capture and frame time actually matter.',
    },
    {
      number: '04',
      title: 'GPU inference',
      description: 'ONNX and CUDA in the same process as capture.',
    },
    {
      number: '05',
      title: 'Input tooling',
      description: 'Small kernel/user clients for mouse movement. Short API.',
    },
    {
      number: '06',
      title: 'PE tooling',
      description: 'Walking Windows binaries against the format spec.',
    },
  ] satisfies Capability[],
  featured: [
    {
      number: '01',
      name: 'AI powered detection',
      year: '2026',
      type: 'Desktop · inference',
      description:
        'C++ Windows app that captures the desktop and runs object detection on the GPU. Capture and inference live in the same loop as a small UI.',
      technologies: ['C++', 'ONNX Runtime', 'CUDA'],
      visual: 'detection',
    },
    {
      number: '02',
      name: 'Temp spoofer',
      year: '2026',
      type: 'Windows · kernel/user',
      description:
        'Temporary identity work on Windows, split between kernel and a small typed client. What it touches stays off this page.',
      technologies: ['C++', 'WDK'],
      visual: 'identity',
    },
    {
      number: '03',
      name: 'Mouse movement driver',
      year: '2026',
      type: 'Windows · input',
      description:
        "Kernel component for mouse movement, plus a thin C++ client you call from user-mode. Short API. It's a lab tool. I don't ship it as a device.",
      technologies: ['C++', 'WDK'],
      visual: 'input',
    },
    {
      number: '04',
      name: 'Halcyon',
      year: '2026',
      type: 'Desktop · games',
      description:
        'Color bot for games. Watches the screen for a target color and acts on it. Win32 and DX11, with ImGui.',
      technologies: ['C++', 'Win32', 'DX11'],
      visual: 'color',
    },
  ] satisfies FeaturedProject[],
  archive: [] as ArchiveProject[],
  experience: [] as ExperienceItem[],
}

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
] as const

export function socialLinks(): SocialLink[] {
  const links: SocialLink[] = [
    { label: 'Discord', href: site.discord.profile },
  ]
  if (site.github) links.push({ label: 'GitHub', href: site.github })
  if (site.email) links.push({ label: 'Email', href: `mailto:${site.email}` })
  links.push(...site.socials)
  return links
}
