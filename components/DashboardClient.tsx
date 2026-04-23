'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Copy, ExternalLink, RefreshCw, Trash2, Plus, Zap, Eye } from 'lucide-react'

type LandingRow = {
  id: string
  slug: string
  createdAt: Date
  companyName: string
  sector: string
  city: string
  savedVia: string
  views: number
}

type Props = {
  landings: LandingRow[]
  sectorMap: Record<string, string>
}

export default function DashboardClient({ landings, sectorMap }: Props) {
  const router = useRouter()
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null)
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  async function handleRegenerate(slug: string) {
    setLoadingSlug(slug)
    try {
      const res = await fetch(`/api/regenerate/${slug}`, { method: 'POST' })
      if (res.ok) router.refresh()
    } finally {
      setLoadingSlug(null)
    }
  }

  async function handleDelete(slug: string, name: string) {
    if (!confirm(`Supprimer "${name}" ? Cette action est irréversible.`)) return
    setLoadingSlug(slug)
    try {
      const res = await fetch(`/api/landing/${slug}`, { method: 'DELETE' })
      if (res.ok) router.refresh()
    } finally {
      setLoadingSlug(null)
    }
  }

  function handleCopy(slug: string) {
    const url = `${window.location.origin}/preview/${slug}`
    navigator.clipboard.writeText(url)
    setCopiedSlug(slug)
    setTimeout(() => setCopiedSlug(null), 2000)
  }

  const totalViews = landings.reduce((sum, l) => sum + l.views, 0)

  return (
    <div className="min-h-screen bg-base-200">
      <div className="bg-base-100 border-b border-base-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold">LandingForge</span>
          </div>
          <a href="/new" className="btn btn-primary btn-sm gap-2">
            <Plus className="w-4 h-4" />
            Nouvelle landing
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div className="stats shadow bg-base-100">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Zap className="w-8 h-8" />
            </div>
            <div className="stat-title">Landings créées</div>
            <div className="stat-value">{landings.length}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <Eye className="w-8 h-8" />
            </div>
            <div className="stat-title">Vues totales</div>
            <div className="stat-value">{totalViews}</div>
          </div>
        </div>

        {landings.length === 0 ? (
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body items-center text-center py-20">
              <div className="p-4 rounded-full bg-primary/10 mb-3">
                <Zap className="w-10 h-10 text-primary/40" />
              </div>
              <h2 className="text-xl font-semibold text-base-content/60">Aucune landing</h2>
              <p className="text-base-content/40 text-sm mt-1">
                Créez votre première landing pour commencer
              </p>
              <a href="/new" className="btn btn-primary mt-6 gap-2">
                <Plus className="w-4 h-4" />
                Créer une landing
              </a>
            </div>
          </div>
        ) : (
          <div className="card bg-base-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table table-sm">
                <thead>
                  <tr className="bg-base-200/50">
                    <th>Entreprise</th>
                    <th>Secteur</th>
                    <th>Ville</th>
                    <th>Date</th>
                    <th>Source</th>
                    <th>
                      <Eye className="w-4 h-4" />
                    </th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {landings.map((landing) => (
                    <tr key={landing.id} className="hover">
                      <td className="font-medium">{landing.companyName}</td>
                      <td>
                        <span className="text-xs text-base-content/60">
                          {sectorMap[landing.sector] ?? landing.sector}
                        </span>
                      </td>
                      <td className="text-sm">{landing.city}</td>
                      <td className="text-xs text-base-content/50 tabular-nums">
                        {new Date(landing.createdAt).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: '2-digit',
                        })}
                      </td>
                      <td>
                        <span className="badge badge-ghost badge-sm font-mono">
                          {landing.savedVia}
                        </span>
                      </td>
                      <td className="text-sm font-mono tabular-nums">{landing.views}</td>
                      <td>
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleCopy(landing.slug)}
                            className="btn btn-ghost btn-xs"
                            title="Copier l'URL prospect"
                          >
                            {copiedSlug === landing.slug ? (
                              <span className="text-success text-xs font-bold">✓</span>
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <a
                            href={`/preview/${landing.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-xs"
                            title="Ouvrir la landing"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => handleRegenerate(landing.slug)}
                            disabled={loadingSlug === landing.slug}
                            className="btn btn-ghost btn-xs"
                            title="Régénérer (nouveau seed)"
                          >
                            {loadingSlug === landing.slug ? (
                              <span className="loading loading-spinner loading-xs" />
                            ) : (
                              <RefreshCw className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <button
                            onClick={() => handleDelete(landing.slug, landing.companyName)}
                            disabled={loadingSlug === landing.slug}
                            className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                            title="Supprimer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
