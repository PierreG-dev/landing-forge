import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAuthorized } from '@/lib/auth'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!await isAuthorized(request)) {
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
