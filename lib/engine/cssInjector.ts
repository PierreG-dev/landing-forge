import type { Theme, ColorCombo, FontCombo } from '@/config/types'

export type CSSInjectorInput = {
  theme: Theme
  colors: ColorCombo
  fonts: FontCombo
  primaryHex?: string
  secondaryHex?: string
}

function hexToLuminance(hex: string): number {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.slice(0, 2), 16) / 255
  const g = parseInt(clean.slice(2, 4), 16) / 255
  const b = parseInt(clean.slice(4, 6), 16) / 255
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

function deriveNeutralColors(primaryHex: string) {
  const lum = hexToLuminance(primaryHex)
  if (lum < 0.15) {
    return { surface: '#F7F5F2', text: '#1A1A18', textLight: '#6B6B68' }
  }
  if (lum > 0.6) {
    return { surface: '#FAFAF8', text: '#1C1C1A', textLight: '#5E5E5B' }
  }
  return { surface: '#F8F6F3', text: '#1C1C1A', textLight: '#6A6A67' }
}

function fontStack(family: string, category: 'serif' | 'sans' | 'mono' = 'sans'): string {
  const fallbacks: Record<string, string> = {
    serif: 'Georgia, "Times New Roman", serif',
    sans: 'system-ui, -apple-system, sans-serif',
    mono: '"Courier New", monospace',
  }
  const serifFamilies = [
    'Playfair Display',
    'Cormorant Garamond',
    'Libre Baskerville',
    'Lora',
    'Zilla Slab',
    'Satisfy',
    'Dancing Script',
    'Literata',
  ]
  const monoFamilies = ['DM Mono', 'JetBrains Mono']
  const cat = monoFamilies.includes(family)
    ? 'mono'
    : serifFamilies.includes(family)
      ? 'serif'
      : 'sans'
  return `'${family}', ${fallbacks[cat]}`
}

export function generateCSSVariables(input: CSSInjectorInput): string {
  const { colors, fonts, primaryHex, secondaryHex } = input

  const primary = primaryHex ?? colors.colors.primary
  const secondary = secondaryHex ?? colors.colors.secondary

  let surface: string
  let text: string
  let textLight: string

  if (primaryHex || secondaryHex) {
    const derived = deriveNeutralColors(primary)
    surface = derived.surface
    text = derived.text
    textLight = derived.textLight
  } else {
    surface = colors.colors.surface
    text = colors.colors.text
    textLight = colors.colors.textLight
  }

  return `:root {
  --color-primary: ${primary};
  --color-secondary: ${secondary};
  --color-surface: ${surface};
  --color-text: ${text};
  --color-text-light: ${textLight};
  --font-display: ${fontStack(fonts.fonts.display.family)};
  --font-body: ${fontStack(fonts.fonts.body.family)};
  --font-accent: ${fontStack(fonts.fonts.accent.family)};
}`
}
