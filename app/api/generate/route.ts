import type { NextRequest } from 'next/server'
import { generateLanding } from '@/lib/engine/assembler'
import { saveLanding } from '@/lib/db/saveLanding'
import type { ProspectInput } from '@/lib/engine/assembler'
import { isAuthorized } from '@/lib/auth'

export async function POST(request: NextRequest) {
  if (!await isAuthorized(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: ProspectInput
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.company || !body.sector || !body.city) {
    return Response.json({ error: 'company, sector, city required' }, { status: 400 })
  }

  const landing = generateLanding(body)
  await saveLanding(landing, 'form')

  return Response.json({ slug: landing.slug })
}
