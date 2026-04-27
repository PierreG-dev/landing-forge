import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { themes } from '@/config/themes.config'
import { colorCombos } from '@/config/colors.config'
import { fontCombos } from '@/config/fonts.config'
import { sectorById } from '@/content/sectors/index'
import { generateCSSVariables } from '@/lib/engine/cssInjector'
import { LandingRenderer } from '@/components/LandingRenderer'
import type { BlockConfig } from '@/lib/engine/assembler'
import type { SectorId } from '@/config/types'

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const record = await prisma.landing.findUnique({ where: { slug } })
  if (!record) notFound()

  await prisma.$transaction([
    prisma.landing.update({
      where: { slug },
      data: { views: { increment: 1 } },
    }),
    prisma.visit.create({ data: { landingId: record.id } }),
  ])

  const theme = themes.find((t) => t.id === record.themeId)
  const colors = colorCombos.find((c) => c.id === record.colorComboId)
  const fonts = fontCombos.find((f) => f.id === record.fontComboId)
  const sector = sectorById[record.sector as SectorId]

  if (!theme || !colors || !fonts || !sector) notFound()

  const blocks: BlockConfig[] = JSON.parse(record.blocks)

  const customPrimary = record.primaryHex !== colors.colors.primary ? record.primaryHex : undefined
  const customSecondary = record.secondaryHex !== colors.colors.secondary ? record.secondaryHex : undefined

  const css = generateCSSVariables({
    theme,
    colors,
    fonts,
    primaryHex: customPrimary,
    secondaryHex: customSecondary,
  })

  const landing = {
    slug: record.slug,
    seed: record.seed,
    prospect: {
      company: record.companyName,
      sector: record.sector,
      city: record.city,
      phone: record.phone ?? undefined,
      email: record.email ?? undefined,
      tagline: record.tagline ?? undefined,
      service1: record.service1 ?? undefined,
      service2: record.service2 ?? undefined,
      service3: record.service3 ?? undefined,
      logoUrl: record.logoUrl ?? undefined,
      themeId: record.themeId,
      colorComboId: record.colorComboId,
      fontComboId: record.fontComboId,
      primaryHex: record.primaryHex,
      secondaryHex: record.secondaryHex,
    },
    theme,
    colors,
    fonts,
    sector,
    blocks,
    css,
    primaryHex: record.primaryHex,
    secondaryHex: record.secondaryHex,
    themeId: record.themeId,
    colorComboId: record.colorComboId,
    fontComboId: record.fontComboId,
  }

  return <LandingRenderer landing={landing} />
}
