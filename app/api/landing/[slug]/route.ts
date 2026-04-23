import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const cookieStore = await cookies()
  if (cookieStore.get('landingforge_auth')?.value !== 'true') {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug } = await params
  try {
    await prisma.landing.delete({ where: { slug } })
    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Not found' }, { status: 404 })
  }
}
