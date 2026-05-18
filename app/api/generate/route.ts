import type { NextRequest } from 'next/server'
import { generateLanding } from '@/lib/engine/assembler'
import { saveLanding } from '@/lib/db/saveLanding'
import type { ProspectInput } from '@/lib/engine/assembler'
import { isAuthorized } from '@/lib/auth'
import { sectorById } from '@/content/sectors/index'
import { fetchSectorImages } from '@/lib/unsplash'

export async function POST(request: NextRequest) {
  if (!await isAuthorized(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let raw: Partial<ProspectInput> = {}
  try {
    raw = await request.json()
  } catch {
    // proceed with empty body — defaults applied below
  }

  const body: ProspectInput = {
    ...raw,
    company: raw.company?.trim() || 'Mon Entreprise',
    city: raw.city?.trim() || 'France',
    sector: raw.sector && raw.sector in sectorById ? raw.sector : 'generique',
  }

  let landing
  try {
    landing = generateLanding(body)
    const images = await fetchSectorImages(body.sector)
    const imageExtra =
      images.hero.length > 0
        ? {
            heroImages: JSON.stringify(images.hero),
            galleryImages: JSON.stringify(images.gallery),
          }
        : undefined
    await saveLanding(landing, 'form', undefined, imageExtra)
  } catch (err) {
    console.error('[generate] error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }

  return Response.json({ slug: landing.slug })
}
