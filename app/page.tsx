import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { sectors } from '@/content/sectors/index'
import DashboardClient from '@/components/DashboardClient'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  if (cookieStore.get('landingforge_auth')?.value !== 'true') {
    redirect('/login')
  }

  const landings = await prisma.landing.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      createdAt: true,
      companyName: true,
      sector: true,
      city: true,
      savedVia: true,
      views: true,
    },
  })

  const sectorMap = Object.fromEntries(sectors.map((s) => [s.id, s.label]))

  return <DashboardClient landings={landings} sectorMap={sectorMap} />
}
