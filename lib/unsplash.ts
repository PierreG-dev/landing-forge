import { unsplashKeywords } from '@/config/unsplash-keywords.config'
import type { SectorId } from '@/config/types'

type UnsplashPhoto = {
  urls: {
    regular: string
    small: string
  }
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

async function getRandomPhotos(keywords: string[], count: number, size: 'regular' | 'small'): Promise<string[]> {
  const key = process.env.UNSPLASH_ACCESS_KEY
  if (!key) return []

  const query = pickRandom(keywords)
  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&count=${count}`
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${key}` },
    next: { revalidate: 0 },
  })

  if (!res.ok) return []

  const data = await res.json() as UnsplashPhoto[]
  return data.map((p) => p.urls[size])
}

export async function fetchSectorImages(sectorId: string): Promise<{ hero: string[]; gallery: string[] }> {
  const keywords = unsplashKeywords[sectorId as SectorId]
  if (!keywords) return { hero: [], gallery: [] }

  try {
    const [hero, gallery] = await Promise.all([
      getRandomPhotos(keywords.hero, 3, 'regular'),
      getRandomPhotos(keywords.gallery, 6, 'small'),
    ])
    return { hero, gallery }
  } catch {
    return { hero: [], gallery: [] }
  }
}
