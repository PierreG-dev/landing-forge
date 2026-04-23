'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Zap, Shuffle } from 'lucide-react'
import { colorCombos } from '@/config/colors.config'
import { fontCombos } from '@/config/fonts.config'
import { themes } from '@/config/themes.config'
import { sectors } from '@/content/sectors/index'

const uniqueFontCombos = fontCombos.filter(
  (f, i, arr) => arr.findIndex((x) => x.id === f.id) === i
)
const uniqueThemes = themes.filter(
  (t, i, arr) => arr.findIndex((x) => x.id === t.id) === i
)

export default function NewLandingPage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [company, setCompany] = useState('')
  const [sector, setSector] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [tagline, setTagline] = useState('')
  const [service1, setService1] = useState('')
  const [service2, setService2] = useState('')
  const [service3, setService3] = useState('')
  const [logoUrl, setLogoUrl] = useState('')

  const [colorComboId, setColorComboId] = useState('')
  const [fontComboId, setFontComboId] = useState('')
  const [themeId, setThemeId] = useState('')
  const [useCustomColors, setUseCustomColors] = useState(false)
  const [primaryHex, setPrimaryHex] = useState('#3b82f6')
  const [secondaryHex, setSecondaryHex] = useState('#f59e0b')

  useEffect(() => {
    const seen = new Set<string>()
    uniqueFontCombos.forEach((combo) => {
      if (seen.has(combo.googleFontsUrl)) return
      seen.add(combo.googleFontsUrl)
      if (!document.querySelector(`link[href="${combo.googleFontsUrl}"]`)) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = combo.googleFontsUrl
        document.head.appendChild(link)
      }
    })
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!company.trim() || !sector || !city.trim()) {
      setError('Entreprise, secteur et ville sont obligatoires.')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      const body: Record<string, string> = {
        company: company.trim(),
        sector,
        city: city.trim(),
      }
      if (phone.trim()) body.phone = phone.trim()
      if (email.trim()) body.email = email.trim()
      if (tagline.trim()) body.tagline = tagline.trim()
      if (service1.trim()) body.service1 = service1.trim()
      if (service2.trim()) body.service2 = service2.trim()
      if (service3.trim()) body.service3 = service3.trim()
      if (logoUrl.trim()) body.logoUrl = logoUrl.trim()
      if (useCustomColors) {
        body.primaryHex = primaryHex
        body.secondaryHex = secondaryHex
      } else if (colorComboId) {
        body.colorComboId = colorComboId
      }
      if (fontComboId) body.fontComboId = fontComboId
      if (themeId) body.themeId = themeId

      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error ?? 'Erreur serveur')
      }
      const { slug } = (await res.json()) as { slug: string }
      router.push(`/preview/${slug}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Sticky header */}
      <div className="bg-base-100 border-b border-base-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="btn btn-ghost btn-sm gap-1">
              ← Dashboard
            </a>
            <span className="text-base-content/20">|</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-bold">Nouvelle landing</span>
            </div>
          </div>
          <button
            form="new-landing-form"
            type="submit"
            className="btn btn-primary gap-2"
            disabled={submitting}
          >
            {submitting ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              <Zap className="w-4 h-4" />
            )}
            Générer →
          </button>
        </div>
      </div>

      <form id="new-landing-form" onSubmit={handleSubmit}>
        <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          {/* ── Section 1: Prospect ── */}
          <section className="card bg-base-100 shadow-sm">
            <div className="card-body gap-5">
              <div className="flex items-center gap-3">
                <span className="badge badge-primary badge-lg font-bold">1</span>
                <h2 className="text-xl font-bold">Infos prospect</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-medium">
                      Nom de l&apos;entreprise <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Ex : Boulangerie Dupont"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Secteur <span className="text-error">*</span>
                    </span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                  >
                    <option value="">— Choisir un secteur —</option>
                    {sectors.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Ville <span className="text-error">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Ex : Lyon"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Téléphone</span>
                  </label>
                  <input
                    type="tel"
                    className="input input-bordered w-full"
                    placeholder="06 12 34 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="contact@exemple.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text">Accroche / Tagline</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Ex : L'authenticité au cœur de chaque plat"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service 1</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Ex : Livraison à domicile"
                    value={service1}
                    onChange={(e) => setService1(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service 2</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Ex : Traiteur événementiel"
                    value={service2}
                    onChange={(e) => setService2(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service 3</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Ex : Cours de cuisine"
                    value={service3}
                    onChange={(e) => setService3(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">URL du logo</span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered w-full"
                    placeholder="https://..."
                    value={logoUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 2: Colors ── */}
          <section className="card bg-base-100 shadow-sm">
            <div className="card-body gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="badge badge-primary badge-lg font-bold">2</span>
                  <h2 className="text-xl font-bold">Palette de couleurs</h2>
                </div>
                <span className="text-sm text-base-content/40 flex items-center gap-1">
                  <Shuffle className="w-3.5 h-3.5" /> aléatoire si vide
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {/* Random option */}
                <button
                  type="button"
                  onClick={() => {
                    setColorComboId('')
                    setUseCustomColors(false)
                  }}
                  className={`rounded-xl border-2 p-3 text-left transition-all hover:shadow-sm ${
                    !colorComboId && !useCustomColors
                      ? 'border-primary bg-primary/8 shadow-sm'
                      : 'border-base-200 hover:border-base-300 bg-base-100'
                  }`}
                >
                  <div className="h-7 rounded-lg bg-gradient-to-r from-base-300 via-base-200 to-base-300 mb-2 flex items-center justify-center">
                    <Shuffle className="w-3 h-3 text-base-content/40" />
                  </div>
                  <p className="text-xs font-semibold truncate">Aléatoire</p>
                  <p className="text-xs text-base-content/40 mt-0.5">Pondéré mood</p>
                </button>

                {colorCombos.map((combo) => (
                  <button
                    key={combo.id}
                    type="button"
                    onClick={() => {
                      setColorComboId(combo.id)
                      setUseCustomColors(false)
                    }}
                    title={combo.description}
                    className={`rounded-xl border-2 p-3 text-left transition-all hover:shadow-sm ${
                      colorComboId === combo.id && !useCustomColors
                        ? 'border-primary bg-primary/8 shadow-sm'
                        : 'border-base-200 hover:border-base-300 bg-base-100'
                    }`}
                  >
                    <div className="flex h-7 rounded-lg overflow-hidden mb-2">
                      <div
                        className="flex-[3]"
                        style={{ backgroundColor: combo.colors.primary }}
                      />
                      <div
                        className="flex-[2]"
                        style={{ backgroundColor: combo.colors.secondary }}
                      />
                      <div
                        className="flex-[2]"
                        style={{ backgroundColor: combo.colors.surface }}
                      />
                    </div>
                    <p className="text-xs font-semibold truncate">{combo.name}</p>
                    <div className="flex gap-0.5 mt-1 flex-wrap">
                      {combo.mood.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-base-content/40 bg-base-200 rounded px-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}

                {/* Custom hex */}
                <button
                  type="button"
                  onClick={() => {
                    setUseCustomColors(true)
                    setColorComboId('')
                  }}
                  className={`rounded-xl border-2 p-3 text-left transition-all hover:shadow-sm ${
                    useCustomColors
                      ? 'border-primary bg-primary/8 shadow-sm'
                      : 'border-base-200 hover:border-base-300 bg-base-100'
                  }`}
                >
                  <div className="flex h-7 rounded-lg overflow-hidden mb-2">
                    <div className="flex-1" style={{ backgroundColor: primaryHex }} />
                    <div className="flex-1" style={{ backgroundColor: secondaryHex }} />
                  </div>
                  <p className="text-xs font-semibold">Personnalisé</p>
                  <p className="text-xs text-base-content/40 mt-0.5">Hex custom</p>
                </button>
              </div>

              {useCustomColors && (
                <div className="flex flex-wrap gap-6 p-4 bg-base-200 rounded-xl mt-1">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-sm font-medium">Couleur primaire</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        className="w-10 h-10 rounded cursor-pointer border-2 border-base-300"
                        value={primaryHex}
                        onChange={(e) => setPrimaryHex(e.target.value)}
                      />
                      <input
                        type="text"
                        className="input input-bordered input-sm w-28 font-mono uppercase"
                        value={primaryHex}
                        onChange={(e) => setPrimaryHex(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-sm font-medium">Couleur secondaire</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        className="w-10 h-10 rounded cursor-pointer border-2 border-base-300"
                        value={secondaryHex}
                        onChange={(e) => setSecondaryHex(e.target.value)}
                      />
                      <input
                        type="text"
                        className="input input-bordered input-sm w-28 font-mono uppercase"
                        value={secondaryHex}
                        onChange={(e) => setSecondaryHex(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* ── Section 3: Fonts ── */}
          <section className="card bg-base-100 shadow-sm">
            <div className="card-body gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="badge badge-primary badge-lg font-bold">3</span>
                  <h2 className="text-xl font-bold">Typographie</h2>
                </div>
                <span className="text-sm text-base-content/40 flex items-center gap-1">
                  <Shuffle className="w-3.5 h-3.5" /> pondéré par mood si vide
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {/* Random */}
                <button
                  type="button"
                  onClick={() => setFontComboId('')}
                  className={`rounded-xl border-2 p-4 text-left transition-all hover:shadow-sm ${
                    !fontComboId
                      ? 'border-primary bg-primary/8 shadow-sm'
                      : 'border-base-200 hover:border-base-300 bg-base-100'
                  }`}
                >
                  <div className="text-2xl font-bold leading-none text-base-content/20 mb-2 select-none">
                    Aa
                  </div>
                  <p className="text-sm font-semibold">Aléatoire</p>
                  <p className="text-xs text-base-content/40 mt-0.5">Pondéré mood thème+couleur</p>
                </button>

                {uniqueFontCombos.map((combo) => (
                  <button
                    key={combo.id}
                    type="button"
                    onClick={() => setFontComboId(combo.id)}
                    className={`rounded-xl border-2 p-4 text-left transition-all hover:shadow-sm ${
                      fontComboId === combo.id
                        ? 'border-primary bg-primary/8 shadow-sm'
                        : 'border-base-200 hover:border-base-300 bg-base-100'
                    }`}
                  >
                    <div
                      className="text-2xl font-bold leading-none mb-1 text-base-content"
                      style={{ fontFamily: `'${combo.fonts.display.family}', serif` }}
                    >
                      Bonjour
                    </div>
                    <div
                      className="text-xs text-base-content/60 mb-2 leading-relaxed"
                      style={{ fontFamily: `'${combo.fonts.body.family}', sans-serif` }}
                    >
                      {combo.fonts.display.family} / {combo.fonts.body.family}
                    </div>
                    <p className="text-xs font-semibold">{combo.name}</p>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      <span className="text-[10px] text-base-content/40 bg-base-200 rounded px-1">
                        {combo.pairing.style}
                      </span>
                      <span className="text-[10px] text-base-content/40 bg-base-200 rounded px-1">
                        {combo.pairing.contrast} contrast
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 4: Themes ── */}
          <section className="card bg-base-100 shadow-sm">
            <div className="card-body gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="badge badge-primary badge-lg font-bold">4</span>
                  <h2 className="text-xl font-bold">Thème visuel</h2>
                </div>
                <span className="text-sm text-base-content/40 flex items-center gap-1">
                  <Shuffle className="w-3.5 h-3.5" /> aléatoire si vide
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {/* Random */}
                <button
                  type="button"
                  onClick={() => setThemeId('')}
                  className={`rounded-xl border-2 p-4 text-left transition-all hover:shadow-sm ${
                    !themeId
                      ? 'border-primary bg-primary/8 shadow-sm'
                      : 'border-base-200 hover:border-base-300 bg-base-100'
                  }`}
                >
                  <div className="flex gap-1 mb-3">
                    {['diagonal', 'wave', 'zigzag', 'curve'].map((s) => (
                      <div key={s} className="flex-1 h-5 bg-base-300 rounded-sm opacity-60" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold">Aléatoire</p>
                  <p className="text-xs text-base-content/40 mt-0.5">Tirage uniforme</p>
                </button>

                {uniqueThemes.map((theme) => (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => setThemeId(theme.id)}
                    title={theme.description}
                    className={`rounded-xl border-2 p-4 text-left transition-all hover:shadow-sm ${
                      themeId === theme.id
                        ? 'border-primary bg-primary/8 shadow-sm'
                        : 'border-base-200 hover:border-base-300 bg-base-100'
                    }`}
                  >
                    {/* Mini preview */}
                    <div className="flex items-stretch gap-2 mb-3 h-10">
                      <div
                        className={`w-8 flex-shrink-0 ${theme.cards.borderRadius} ${theme.cards.border} bg-base-200 flex items-center justify-center`}
                      >
                        <span className="text-xs text-base-content/40 font-bold">A</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center gap-1">
                        <div
                          className={`h-2 bg-base-300 ${theme.cards.borderRadius} w-full opacity-70`}
                        />
                        <div
                          className={`h-1.5 bg-base-200 ${theme.cards.borderRadius} w-3/4 opacity-60`}
                        />
                      </div>
                    </div>
                    <p className="text-sm font-semibold">{theme.name}</p>
                    <p className="text-xs text-base-content/50 mt-0.5 line-clamp-2">
                      {theme.description}
                    </p>
                    <div className="flex gap-1 mt-2 flex-wrap">
                      <span className="text-[10px] text-base-content/40 bg-base-200 rounded px-1">
                        {theme.separators.style}
                      </span>
                      {theme.overlaps.enabled && (
                        <span className="text-[10px] text-base-content/40 bg-base-200 rounded px-1">
                          overlaps
                        </span>
                      )}
                      <span className="text-[10px] text-base-content/40 bg-base-200 rounded px-1">
                        {theme.shadows.style}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          <div className="flex justify-end pb-8">
            <button type="submit" className="btn btn-primary btn-lg gap-2" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="loading loading-spinner" />
                  Génération en cours…
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Générer la landing
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
