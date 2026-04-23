import type { Theme } from '@/config/types'

export function safeGet<T>(arr: T[], index: number, fallback: T): T {
  if (!arr || arr.length === 0) return fallback
  return arr[index % arr.length] ?? fallback
}

export function safeSlice<T>(arr: T[], start: number, count: number, fallback: T): T[] {
  if (!arr || arr.length === 0) return Array(count).fill(fallback)
  const out: T[] = []
  for (let i = 0; i < count; i++) out.push(arr[(start + i) % arr.length])
  return out
}

export function getShadowCSS(theme: Theme): string {
  const s = theme.shadows.style
  if (s === 'none') return 'none'
  if (s === 'soft') return '0 4px 24px rgba(0,0,0,0.07)'
  if (s === 'medium') return '0 8px 32px rgba(0,0,0,0.12)'
  if (s === 'strong') return '0 16px 48px rgba(0,0,0,0.18)'
  if (s === 'sharp') return '4px 4px 0 0 rgba(0,0,0,0.85)'
  if (s === 'glow') return '0 0 32px rgba(0,0,0,0.16)'
  if (s === 'layered') return '0 1px 3px rgba(0,0,0,0.06), 0 10px 30px rgba(0,0,0,0.1)'
  return '0 4px 20px rgba(0,0,0,0.1)'
}

export function getBorderRadius(theme: Theme): string {
  const c = theme.cards.borderRadius
  if (c.includes('none')) return '0'
  if (c.includes('3xl')) return '1.5rem'
  if (c.includes('2xl')) return '1rem'
  if (c.includes('xl')) return '0.75rem'
  if (c.includes('lg')) return '0.5rem'
  if (c.includes('full')) return '9999px'
  if (c.includes('md')) return '0.375rem'
  return '0.25rem'
}

export function getSectionPadding(theme: Theme): string {
  const map: Record<string, string> = {
    'py-16': '4rem',
    'py-20': '5rem',
    'py-24': '6rem',
    'py-28': '7rem',
    'py-32': '8rem',
    'py-36': '9rem',
    'py-40': '10rem',
  }
  return map[theme.spacing.sectionPaddingY] ?? '5rem'
}

export function getCardPadding(theme: Theme): string {
  const map: Record<string, string> = {
    'p-4': '1rem',
    'p-5': '1.25rem',
    'p-6': '1.5rem',
    'p-7': '1.75rem',
    'p-8': '2rem',
    'p-10': '2.5rem',
  }
  return map[theme.cards.padding] ?? '1.5rem'
}
