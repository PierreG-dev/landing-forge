import type { NextRequest } from 'next/server'
import { generateLanding } from '@/lib/engine/assembler'
import { saveLanding } from '@/lib/db/saveLanding'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const p = request.nextUrl.searchParams

  const company = p.get('company')
  const sector = p.get('sector')
  const city = p.get('city')

  if (!company || !sector || !city) {
    return new Response('Missing required params: company, sector, city', { status: 400 })
  }

  const landing = generateLanding({
    company,
    sector,
    city,
    phone: p.get('phone') ?? undefined,
    email: p.get('email') ?? undefined,
    tagline: p.get('tagline') ?? undefined,
    service1: p.get('service1') ?? undefined,
    service2: p.get('service2') ?? undefined,
    service3: p.get('service3') ?? undefined,
    logoUrl: p.get('logoUrl') ?? undefined,
    themeId: p.get('theme') ?? undefined,
    colorComboId: p.get('colors') ?? undefined,
    fontComboId: p.get('fonts') ?? undefined,
    primaryHex: p.get('primaryHex') ?? undefined,
    secondaryHex: p.get('secondaryHex') ?? undefined,
  })

  const shouldSave = p.get('save') === 'true'
  if (shouldSave) {
    await saveLanding(landing, 'playwright')
  }

  // Dynamic imports avoid Turbopack's static react-dom/server restriction in route handlers
  const React = (await import('react')).default
  const { renderToStaticMarkup } = await import('react-dom/server')
  const { LandingRenderer } = await import('@/components/LandingRenderer')

  const body = renderToStaticMarkup(React.createElement(LandingRenderer, { landing }))

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${landing.prospect.company}</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
${body}
</body>
</html>`

  const headers: Record<string, string> = { 'Content-Type': 'text/html; charset=utf-8' }
  if (shouldSave) headers['X-Landing-Slug'] = landing.slug

  return new Response(html, { headers })
}
