'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Copy, ExternalLink, RefreshCw, Trash2, Plus, Zap, Eye, BarChart2, Download, Upload } from 'lucide-react'

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
  const [importStatus, setImportStatus] = useState<{ ok: boolean; message: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    e.target.value = ''

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/db/import', { method: 'POST', body: formData })
    const data = await res.json()

    if (res.ok) {
      setImportStatus({ ok: true, message: data.message })
      router.refresh()
    } else {
      setImportStatus({ ok: false, message: data.error ?? 'Erreur inconnue' })
    }

    setTimeout(() => setImportStatus(null), 6000)
  }

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
          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".db,application/octet-stream"
              className="hidden"
              onChange={handleImport}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-ghost btn-sm gap-2"
              title="Importer une base de données"
            >
              <Upload className="w-4 h-4" />
              Importer DB
            </button>
            <a
              href="/api/db/export"
              className="btn btn-ghost btn-sm gap-2"
              title="Télécharger la base de données"
            >
              <Download className="w-4 h-4" />
              Exporter DB
            </a>
            <a href="/new" className="btn btn-primary btn-sm gap-2">
              <Plus className="w-4 h-4" />
              Nouvelle landing
            </a>
          </div>
        </div>
      </div>

      {importStatus && (
        <div className="toast toast-top toast-end z-50">
          <div className={`alert ${importStatus.ok ? 'alert-success' : 'alert-error'} text-sm`}>
            <span>{importStatus.message}</span>
          </div>
        </div>
      )}

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
                          <a
                            href={`/landing/${landing.slug}`}
                            className="btn btn-ghost btn-xs"
                            title="Voir les statistiques"
                          >
                            <BarChart2 className="w-3.5 h-3.5" />
                          </a>
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
