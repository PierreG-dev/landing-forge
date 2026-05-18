import { prisma } from '@/lib/prisma'
import type { GeneratedLanding } from '@/lib/engine/assembler'

function buildData(landing: GeneratedLanding, savedVia: string, extra?: Record<string, string | null>) {
  return {
    companyName: landing.prospect.company,
    sector: landing.prospect.sector,
    city: landing.prospect.city,
    logoUrl: landing.prospect.logoUrl ?? null,
    phone: landing.prospect.phone ?? null,
    email: landing.prospect.email ?? null,
    tagline: landing.prospect.tagline ?? null,
    service1: landing.prospect.service1 ?? null,
    service2: landing.prospect.service2 ?? null,
    service3: landing.prospect.service3 ?? null,
    themeId: landing.themeId,
    colorComboId: landing.colorComboId,
    primaryHex: landing.primaryHex,
    secondaryHex: landing.secondaryHex,
    fontComboId: landing.fontComboId,
    seed: landing.seed,
    blocks: JSON.stringify(landing.blocks),
    savedVia,
    ...extra,
  }
}

async function upsertWithSlug(slug: string, data: ReturnType<typeof buildData>): Promise<void> {
  await prisma.landing.upsert({
    where: { slug },
    update: data,
    create: { slug, ...data },
  })
}

export async function saveLanding(
  landing: GeneratedLanding,
  savedVia: string,
  overrideSlug?: string,
  extra?: Record<string, string | null>
): Promise<string> {
  const slug = overrideSlug ?? landing.slug
  const data = buildData(landing, savedVia, extra)

  try {
    await upsertWithSlug(slug, data)
    return slug
  } catch (err: unknown) {
    // Unique constraint violation → retry with a fresh suffix
    const isUniqueViolation =
      err instanceof Error && (err.message.includes('Unique constraint') || err.message.includes('UNIQUE constraint'))
    if (isUniqueViolation) {
      const fallbackSlug = `${slug}-${Math.random().toString(36).slice(2, 6)}`
      await upsertWithSlug(fallbackSlug, data)
      return fallbackSlug
    }
    throw err
  }
}
