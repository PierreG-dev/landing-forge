import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ArrowLeft, Eye, Calendar, TrendingUp } from 'lucide-react'

export default async function LandingStatsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const cookieStore = await cookies()
  if (cookieStore.get('landingforge_auth')?.value !== 'true') {
    redirect('/login')
  }

  const { slug } = await params

  const landing = await prisma.landing.findUnique({
    where: { slug },
    select: {
      id: true,
      companyName: true,
      city: true,
      createdAt: true,
      views: true,
      visits: {
        orderBy: { visitedAt: 'asc' },
        select: { visitedAt: true },
      },
    },
  })

  if (!landing) notFound()

  // Group visits by day (YYYY-MM-DD)
  const byDay = new Map<string, number>()
  for (const v of landing.visits) {
    const key = v.visitedAt.toISOString().slice(0, 10)
    byDay.set(key, (byDay.get(key) ?? 0) + 1)
  }

  // Build last-30-days grid
  const today = new Date()
  const days: { date: string; label: string; count: number }[] = []
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const key = d.toISOString().slice(0, 10)
    days.push({
      date: key,
      label: d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
      count: byDay.get(key) ?? 0,
    })
  }

  const maxCount = Math.max(...days.map((d) => d.count), 1)

  const firstVisit = landing.visits[0]?.visitedAt
  const lastVisit = landing.visits[landing.visits.length - 1]?.visitedAt

  const last7 = days.slice(-7).reduce((s, d) => s + d.count, 0)
  const prev7 = days.slice(-14, -7).reduce((s, d) => s + d.count, 0)

  return (
    <div className="min-h-screen bg-base-200">
      <div className="bg-base-100 border-b border-base-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-4">
          <a href="/" className="btn btn-ghost btn-sm gap-2">
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </a>
          <div className="h-4 w-px bg-base-300" />
          <span className="font-semibold truncate">{landing.companyName}</span>
          <span className="text-base-content/40 text-sm">{landing.city}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        {/* KPIs */}
        <div className="stats shadow bg-base-100 w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Eye className="w-8 h-8" />
            </div>
            <div className="stat-title">Vues totales</div>
            <div className="stat-value">{landing.views}</div>
            <div className="stat-desc">depuis la création</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="stat-title">7 derniers jours</div>
            <div className="stat-value">{last7}</div>
            <div className="stat-desc">
              {prev7 === 0
                ? 'aucune donnée avant'
                : last7 >= prev7
                ? `+${last7 - prev7} vs semaine préc.`
                : `−${prev7 - last7} vs semaine préc.`}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-accent">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="stat-title">Créée le</div>
            <div className="stat-value text-2xl">
              {new Date(landing.createdAt).toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </div>
            <div className="stat-desc">
              {firstVisit
                ? `1ère visite ${new Date(firstVisit).toLocaleDateString('fr-FR')}`
                : 'aucune visite encore'}
            </div>
          </div>
        </div>

        {/* Bar chart – last 30 days */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-base">Visites — 30 derniers jours</h2>
            <div className="flex items-end gap-1 h-32 mt-4">
              {days.map((d) => (
                <div key={d.date} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="relative w-full flex items-end justify-center" style={{ height: '100px' }}>
                    <div
                      className="w-full bg-primary/70 rounded-t group-hover:bg-primary transition-colors"
                      style={{ height: `${(d.count / maxCount) * 100}%`, minHeight: d.count > 0 ? '4px' : '0' }}
                      title={`${d.date} : ${d.count} visite${d.count !== 1 ? 's' : ''}`}
                    />
                  </div>
                  {/* Show label every 5 days */}
                  <span className="text-[9px] text-base-content/40 tabular-nums" style={{ visibility: days.indexOf(d) % 5 === 0 ? 'visible' : 'hidden' }}>
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visit history table */}
        <div className="card bg-base-100 shadow-sm overflow-hidden">
          <div className="card-body pb-0">
            <h2 className="card-title text-base">Historique par jour</h2>
          </div>
          {landing.visits.length === 0 ? (
            <div className="card-body items-center text-center py-10 text-base-content/40">
              Aucune visite enregistrée pour cette landing.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <thead>
                  <tr className="bg-base-200/50">
                    <th>Date</th>
                    <th className="text-right">Visites</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(byDay.entries())
                    .sort(([a], [b]) => b.localeCompare(a))
                    .map(([date, count]) => (
                      <tr key={date} className="hover">
                        <td className="tabular-nums">
                          {new Date(date).toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </td>
                        <td className="text-right font-mono font-semibold">{count}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {lastVisit && (
          <p className="text-xs text-base-content/40 text-center">
            Dernière visite le {new Date(lastVisit).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  )
}
