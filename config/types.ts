export type MoodTag =
  | 'energetic'
  | 'calm'
  | 'bold'
  | 'subtle'
  | 'luxury'
  | 'corporate'
  | 'artisan'
  | 'creative'
  | 'friendly'
  | 'technical'
  | 'organic'
  | 'geometric'
  | 'editorial'
  | 'minimal'
  | 'wavy'
  | 'angular'
  | 'curved'
  | 'layered'
  | 'overlapping'
  | 'flat'
  | 'textured'
  | 'typographic'
  | 'ornate'
  | 'decorated'
  | 'clean'
  | 'bare'
  | 'modern'
  | 'classic'
  | 'timeless'

export type SectorId =
  | 'restauration'
  | 'artisan-batiment'
  | 'beaute'
  | 'sante'
  | 'juridique'
  | 'immobilier'
  | 'sport-coaching'
  | 'commerce-local'
  | 'informatique'
  | 'evenementiel'

export type Theme = {
  id: string
  name: string
  description: string
  targetSectors: string[]
  mood: string[]
  separators: { style: string; intensity: string }
  decoratives: { type: string; placement: 'absolute'; opacity: number; scale: string }
  overlaps: { enabled: boolean; intensity: string }
  shadows: { style: string; tailwindClass: string }
  cards: { borderRadius: string; border: string; padding: string; hasBackdropBlur: boolean }
  spacing: { sectionPaddingY: string; density: string }
  typography: { headingWeight: string; headingTracking: string; bodyLineHeight: string }
  tailwindExtras: string[]
}

export type ColorCombo = {
  id: string
  name: string
  description: string
  targetSectors: string[]
  mood: string[]
  colors: {
    primary: string
    secondary: string
    surface: string
    text: string
    textLight: string
  }
  wcagAA: true
}

export type FontCombo = {
  id: string
  name: string
  description: string
  targetSectors: string[]
  mood: string[]
  fonts: {
    display: { family: string; weights: number[]; variable: '--font-display' }
    body: { family: string; weights: number[]; variable: '--font-body' }
    accent: { family: string; weights: number[]; variable: '--font-accent' }
  }
  pairing: { contrast: string; style: string; mood: string[] }
  googleFontsUrl: string
}

export type Stat = { value: string; label: string }
export type StatSet = Stat[]

export type Testimonial = { name: string; role?: string; text: string; rating: number }

export type Faq = { question: string; answer: string }
export type FaqSet = Faq[]

export type TrustItem = { icon: string; label: string; subtitle?: string }
export type TrustSet = TrustItem[]

export type Sector = {
  id: SectorId
  label: string
  icons: string[]
  images: {
    hero: string[]
    gallery: string[]
    about: string[]
  }
  corpus: {
    taglines: string[]
    descriptions: string[]
    services: [string, string, string][]
    stats: StatSet[]
    testimonials: Testimonial[]
    faqs: FaqSet[]
    trustItems: TrustSet[]
  }
}
