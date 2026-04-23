import { prisma } from '@/lib/prisma'
import type { GeneratedLanding } from '@/lib/engine/assembler'

export async function saveLanding(
  landing: GeneratedLanding,
  savedVia: string,
  overrideSlug?: string
): Promise<string> {
  const slug = overrideSlug ?? landing.slug

  const data = {
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
  }

  await prisma.landing.upsert({
    where: { slug },
    update: data,
    create: { slug, ...data },
  })

  return slug
}
