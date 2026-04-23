import { themes } from '@/config/themes.config'
import { colorCombos } from '@/config/colors.config'
import { fontCombos } from '@/config/fonts.config'
import { sectorById } from '@/content/sectors/index'
import type { Theme, ColorCombo, FontCombo, Sector, SectorId } from '@/config/types'
import { generateSlug } from './slugger'
import { generateCSSVariables } from './cssInjector'

// ─── Types ────────────────────────────────────────────────────────────────────

export type BlockType =
  | 'hero'
  | 'trust'
  | 'services'
  | 'stats'
  | 'about'
  | 'gallery'
  | 'testimonials'
  | 'faq'
  | 'cta'
  | 'footer'

export type BlockConfig = {
  type: BlockType
  variant: number
  corpusIndex: number
}

export type ProspectInput = {
  company: string
  sector: string
  city: string
  phone?: string
  email?: string
  tagline?: string
  service1?: string
  service2?: string
  service3?: string
  logoUrl?: string
  themeId?: string
  colorComboId?: string
  fontComboId?: string
  primaryHex?: string
  secondaryHex?: string
  seed?: number
}

export type GeneratedLanding = {
  slug: string
  seed: number
  prospect: ProspectInput
  theme: Theme
  colors: ColorCombo
  fonts: FontCombo
  sector: Sector
  blocks: BlockConfig[]
  css: string
  primaryHex: string
  secondaryHex: string
  themeId: string
  colorComboId: string
  fontComboId: string
}

// ─── PRNG (mulberry32) ────────────────────────────────────────────────────────

function createRng(seed: number): () => number {
  let s = seed
  return function () {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 0x100000000
  }
}

// ─── Mood scoring ─────────────────────────────────────────────────────────────

function compatibilityScore(a: string[], b: string[]): number {
  return a.filter((tag) => b.includes(tag)).length
}

function weightedRandom<T extends { mood: string[] }>(items: T[], referenceMood: string[], rng: () => number): T {
  const scores = items.map((item) => ({
    item,
    weight: Math.max(1, compatibilityScore(item.mood, referenceMood)),
  }))
  const total = scores.reduce((sum, s) => sum + s.weight, 0)
  let rand = rng() * total
  for (const s of scores) {
    rand -= s.weight
    if (rand <= 0) return s.item
  }
  return scores[scores.length - 1].item
}

// ─── Block catalog ────────────────────────────────────────────────────────────

const OPTIONAL_BLOCK_ORDER: BlockType[] = [
  'trust',
  'services',
  'stats',
  'about',
  'gallery',
  'testimonials',
  'faq',
]

const BLOCK_VARIANTS: Record<BlockType, number> = {
  hero: 5,
  trust: 3,
  services: 5,
  stats: 4,
  about: 4,
  gallery: 4,
  testimonials: 4,
  faq: 3,
  cta: 3,
  footer: 2,
}

function corpusLength(type: BlockType, sector: Sector): number {
  switch (type) {
    case 'hero':
      return Math.max(1, sector.corpus.taglines.length)
    case 'trust':
      return Math.max(1, sector.corpus.trustItems.length)
    case 'services':
      return Math.max(1, sector.corpus.services.length)
    case 'stats':
      return Math.max(1, sector.corpus.stats.length)
    case 'about':
      return Math.max(1, sector.corpus.descriptions.length)
    case 'gallery':
      return Math.max(1, sector.images.gallery.length)
    case 'testimonials':
      return Math.max(1, sector.corpus.testimonials.length)
    case 'faq':
      return Math.max(1, sector.corpus.faqs.length)
    default:
      return 1
  }
}

// Partial Fisher-Yates: pick `count` from `pool` preserving original order
function pickOrdered(pool: BlockType[], count: number, rng: () => number): BlockType[] {
  const arr = [...pool]
  for (let i = arr.length - 1; i > arr.length - 1 - count; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  const selected = new Set(arr.slice(arr.length - count))
  return OPTIONAL_BLOCK_ORDER.filter((t) => selected.has(t))
}

// ─── Main pipeline ────────────────────────────────────────────────────────────

export function generateLanding(input: ProspectInput): GeneratedLanding {
  const seed = input.seed ?? Math.floor(Math.random() * 0x7fffffff)
  const rng = createRng(seed)

  const sector = sectorById[input.sector as SectorId]
  if (!sector) throw new Error(`Unknown sector: ${input.sector}`)

  // 1. Theme: manual or uniform random
  let theme: Theme
  if (input.themeId) {
    theme = themes.find((t) => t.id === input.themeId) ?? themes[Math.floor(rng() * themes.length)]
  } else {
    theme = themes[Math.floor(rng() * themes.length)]
  }

  // 2. Colors: combo or custom hex or weighted random
  let colors: ColorCombo
  if (input.colorComboId) {
    colors =
      colorCombos.find((c) => c.id === input.colorComboId) ??
      weightedRandom(colorCombos, theme.mood, rng)
  } else {
    colors = weightedRandom(colorCombos, theme.mood, rng)
  }

  // 3. Fonts: combo or weighted random by theme + color mood
  let fonts: FontCombo
  if (input.fontComboId) {
    fonts =
      fontCombos.find((f) => f.id === input.fontComboId) ??
      weightedRandom(fontCombos, [...theme.mood, ...colors.mood], rng)
  } else {
    fonts = weightedRandom(fontCombos, [...theme.mood, ...colors.mood], rng)
  }

  // 4. Optional blocks: 2–5 from 7, fixed order
  const optionalCount = 2 + Math.floor(rng() * 4)
  const optionalTypes = pickOrdered(OPTIONAL_BLOCK_ORDER, optionalCount, rng)

  // 5. Build full block list
  const allTypes: BlockType[] = ['hero', ...optionalTypes, 'cta', 'footer']

  // 6. For each block: random variant + random corpus index
  const blocks: BlockConfig[] = allTypes.map((type) => ({
    type,
    variant: 1 + Math.floor(rng() * BLOCK_VARIANTS[type]),
    corpusIndex: Math.floor(rng() * corpusLength(type, sector)),
  }))

  // 7. CSS variables
  const primaryHex = input.primaryHex ?? colors.colors.primary
  const secondaryHex = input.secondaryHex ?? colors.colors.secondary

  const css = generateCSSVariables({
    theme,
    colors,
    fonts,
    primaryHex: input.primaryHex,
    secondaryHex: input.secondaryHex,
  })

  const slug = generateSlug(input.company)

  return {
    slug,
    seed,
    prospect: input,
    theme,
    colors,
    fonts,
    sector,
    blocks,
    css,
    primaryHex,
    secondaryHex,
    themeId: theme.id,
    colorComboId: colors.id,
    fontComboId: fonts.id,
  }
}
