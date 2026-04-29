import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

export async function isAuthorized(request: NextRequest): Promise<boolean> {
  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7)
    return token === process.env.ADMIN_TOKEN && token.length > 0
  }

  const cookieStore = await cookies()
  return cookieStore.get('landingforge_auth')?.value === 'true'
}
