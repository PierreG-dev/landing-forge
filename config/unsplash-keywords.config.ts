import type { SectorId } from './types'

type UnsplashKeywords = {
  hero: string[]
  gallery: string[]
}

export const unsplashKeywords: Record<SectorId, UnsplashKeywords> = {
  restauration: {
    hero: ['restaurant interior', 'french bistro', 'brasserie france', 'cafe paris', 'restaurant dining'],
    gallery: ['french cuisine', 'food plating', 'bistro dish', 'gourmet meal', 'chef cooking'],
  },
  'artisan-batiment': {
    hero: ['construction worker', 'building renovation', 'masonry worker', 'carpenter workshop', 'artisan building'],
    gallery: ['renovation interior', 'masonry wall', 'carpentry wood', 'construction site', 'building materials'],
  },
  beaute: {
    hero: ['beauty salon interior', 'hairdresser salon', 'hair salon', 'beauty studio', 'spa interior'],
    gallery: ['haircut styling', 'nail art', 'spa treatment', 'hair coloring', 'beauty treatment'],
  },
  sante: {
    hero: ['doctor office', 'medical clinic', 'healthcare professional', 'physician consultation', 'medical practice'],
    gallery: ['clinic interior', 'healthcare consultation', 'medical equipment', 'pharmacy', 'health wellness'],
  },
  juridique: {
    hero: ['law office', 'lawyer desk', 'attorney office', 'legal office', 'law firm interior'],
    gallery: ['law books', 'legal documents', 'courthouse', 'lawyer working', 'justice scales'],
  },
  immobilier: {
    hero: ['luxury apartment interior', 'real estate home', 'modern house', 'property architecture', 'apartment living room'],
    gallery: ['house interior', 'living room design', 'kitchen modern', 'bedroom design', 'architecture exterior'],
  },
  'sport-coaching': {
    hero: ['personal trainer gym', 'fitness coach', 'workout training', 'gym interior', 'sports coaching'],
    gallery: ['gym workout', 'yoga pose', 'outdoor exercise', 'weight training', 'sports fitness'],
  },
  'commerce-local': {
    hero: ['boutique shop interior', 'local store', 'retail shop', 'small business storefront', 'shop display'],
    gallery: ['retail display', 'store products', 'shop interior', 'boutique items', 'local market'],
  },
  informatique: {
    hero: ['tech office workspace', 'developer desk', 'startup office', 'modern office tech', 'coding workspace'],
    gallery: ['developer working', 'code screen monitor', 'tech workspace', 'programming laptop', 'software development'],
  },
  evenementiel: {
    hero: ['event venue hall', 'wedding venue', 'corporate event', 'gala dinner setup', 'event decoration'],
    gallery: ['wedding decoration', 'event catering', 'corporate meeting', 'gala table setting', 'party decoration'],
  },
  electricien: {
    hero: ['electrician working', 'electrical installation', 'electrician professional', 'electrical work', 'technician electrical'],
    gallery: ['electrical panel', 'cable installation', 'electrical tools', 'wiring work', 'power installation'],
  },
  plombier: {
    hero: ['plumber working', 'bathroom renovation', 'plumbing installation', 'plumber professional', 'bathroom plumbing'],
    gallery: ['pipe installation', 'bathroom modern', 'plumbing tools', 'sink installation', 'shower renovation'],
  },
  garage: {
    hero: ['car garage interior', 'mechanic workshop', 'auto repair shop', 'car service garage', 'automotive workshop'],
    gallery: ['car engine repair', 'mechanic working', 'car lift workshop', 'auto parts', 'vehicle maintenance'],
  },
  generique: {
    hero: ['professional office', 'business workspace', 'modern company', 'professional team', 'business interior'],
    gallery: ['office workspace', 'business meeting', 'professional work', 'company team', 'modern office'],
  },
}
