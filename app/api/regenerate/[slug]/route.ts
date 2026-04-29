import type { NextRequest } from 'next/server'
import { generateLanding } from '@/lib/engine/assembler'
import { prisma } from '@/lib/prisma'
import { saveLanding } from '@/lib/db/saveLanding'
import { isAuthorized } from '@/lib/auth'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!await isAuthorized(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug } = await params
  const record = await prisma.landing.findUnique({ where: { slug } })
  if (!record) return Response.json({ error: 'Not found' }, { status: 404 })

  const landing = generateLanding({
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
    // no seed → fresh random
  })

  await saveLanding(landing, 'regenerate', slug)

  return Response.json({ slug })
}
