import { Phone, Mail } from './icons'
import { substitute } from '@/lib/engine/substitutor'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius } from './utils'

function WaveSep({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 1440 60" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 60 }} preserveAspectRatio="none">
      <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill={fill} />
    </svg>
  )
}

function DiagSep({ fill }: { fill: string }) {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 64, background: fill, clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
  )
}

function Separator({ style, fill }: { style: string; fill: string }) {
  if (style === 'wave' || style === 'wavy') return <WaveSep fill={fill} />
  if (style === 'diagonal' || style === 'angular') return <DiagSep fill={fill} />
  return null
}

const FALLBACK_TAGLINE = "{{company}} — Expert à {{city}}"
const FALLBACK_DESC = "Nous mettons notre savoir-faire au service de votre projet à {{city}}. Contactez {{company}} dès aujourd'hui."

// ── V1: Nocturne — Dark editorial, organic blobs, credential strip ─────────────
// Dark bg (text-as-background semantic flip), two organic blob shapes,
// gradient left accent bar, glassmorphism badge header, quote-style tagline,
// footer credential strip. Idéal: avocats, consultants, agences premium.

function V1(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)

  return (
    <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: 'var(--color-text)' }}>

      {/* Organic blob — upper right */}
      <div style={{ position: 'absolute', top: '-20%', right: '-12%', width: '60vw', height: '70vw', borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%', background: 'var(--color-primary)', opacity: 0.15, pointerEvents: 'none', transform: 'rotate(-15deg)' }} />
      {/* Organic blob — lower left */}
      <div style={{ position: 'absolute', bottom: '-25%', left: '-8%', width: '45vw', height: '45vw', borderRadius: '37% 63% 46% 54% / 48% 55% 45% 52%', background: 'var(--color-secondary)', opacity: 0.1, pointerEvents: 'none' }} />
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
      {/* Left gradient accent bar */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, var(--color-primary), var(--color-secondary))' }} />

      {/* Header strip */}
      <header style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 4vw, 3rem) clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 5vw, 4rem)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {prospect.logoUrl
          ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2.25rem', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
          : <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-surface)', letterSpacing: '-0.02em' }}>{prospect.company}</span>
        }
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.375rem 1rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '9999px', backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.05)' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{sector.label}</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' }}>{prospect.city}</span>
        </div>
      </header>

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem) clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 6vw, 4.5rem)', maxWidth: '80rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.25rem' }}>
          <div style={{ width: '1.75rem', height: '1px', background: 'var(--color-primary)' }} />
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600, margin: 0 }}>
            Spécialiste · {prospect.city}
          </p>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 11vw, 9.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--color-surface)', marginBottom: '2.75rem', maxWidth: '14ch' }}>
          {prospect.company}
        </h1>
        <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '1.5rem', marginBottom: '3.25rem', maxWidth: '42rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', margin: 0 }}>
            {tagline}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const, alignItems: 'center' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '1rem 2.25rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', boxShadow: shadow, letterSpacing: '0.02em' }}>
              <Phone size={17} /> {prospect.phone}
            </a>
          )}
          <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '1rem 2.25rem', border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.04)' }}>
            <Mail size={17} /> {prospect.email ?? 'Nous écrire'}
          </a>
        </div>
      </main>

      {/* Credential footer */}
      <footer style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 4vw, 3rem) clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 6vw, 4.5rem)', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' as const }}>
        {prospect.phone && <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.28)' }}>{prospect.phone}</span>}
        {prospect.email && <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.22)' }}>{prospect.email}</span>}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: 1, height: '1.25rem', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.18)' }}>{new Date().getFullYear()}</span>
        </div>
      </footer>

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
  )
}

// ── V2: Bauhaus — Brutalist editorial, structural rules, outlined counter ──────
// Light surface, monumental outlined watermark number, bold horizontal rules
// sandwiching the company name, right-edge primary bar, dot texture corner.
// Idéal: artisans, architectes, tech, agences créatives.

function V2(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)

  return (
    <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'stretch', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>

      {/* Right edge primary bar */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 7, background: 'var(--color-primary)', zIndex: 3 }} />
      {/* Bottom gradient rule */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', zIndex: 3 }} />

      {/* Dot grid — bottom right */}
      <div style={{ position: 'absolute', bottom: '1.5rem', right: '3rem', width: '13rem', height: '13rem', backgroundImage: 'radial-gradient(circle, var(--color-primary) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px', opacity: 0.11, pointerEvents: 'none' }} />

      {/* Giant outlined counter watermark */}
      <div style={{ position: 'absolute', top: '-2rem', right: '4rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 22vw, 20rem)', fontWeight: 900, lineHeight: 1, color: 'transparent', WebkitTextStroke: '2px var(--color-primary)', opacity: 0.08, pointerEvents: 'none', letterSpacing: '-0.05em', userSelect: 'none' as const }}>
        02
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem clamp(2rem, 6vw, 7rem)', maxWidth: '68rem', width: '100%' }}>

        {prospect.logoUrl && (
          <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2.5rem', marginBottom: '3rem', display: 'block' }} />
        )}

        {/* Sector row with rule */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '2px solid var(--color-text)', marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--color-text)', fontWeight: 700 }}>{sector.label}</span>
          <span style={{ flex: 1, height: 1, background: 'var(--color-text)', opacity: 0.12 }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-light)' }}>{prospect.city}</span>
        </div>

        {/* Company name */}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 9vw, 8rem)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', color: 'var(--color-text)', margin: '0 0 1.5rem' }}>
          {prospect.company}
        </h1>

        {/* Short primary underline */}
        <div style={{ height: 3, background: 'var(--color-primary)', width: 'clamp(4rem, 12vw, 8rem)', marginBottom: '2rem' }} />

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', lineHeight: 1.7, color: 'var(--color-text-light)', maxWidth: '38rem', marginBottom: '0.875rem' }}>
          {tagline}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-light)', maxWidth: '36rem', marginBottom: '3rem', opacity: 0.8 }}>
          {desc}
        </p>

        {/* CTAs — contrasted treatments */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' as const, alignItems: 'center' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.25rem', backgroundColor: 'var(--color-text)', color: 'var(--color-surface)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: shadow }}>
              <Phone size={17} /> {prospect.phone}
            </a>
          )}
          <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', color: 'var(--color-primary)', fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', letterSpacing: '0.02em' }}>
            {prospect.email ?? 'Nous contacter'} <span style={{ fontSize: '1.25rem', letterSpacing: '-0.04em', lineHeight: 1 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── V3: Oblique — Diagonal luxury split with floating credential card ──────────
// 55/45 grid, right panel clipped to parallelogram shape, a white floating card
// straddles the cut, vertical rotated label on the color panel.
// Idéal: beauté, immobilier, coach, professions libérales.

function V3(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const heroImage = sector.images?.hero?.[0]

  return (
    <>
      <style>{`
        .hero-v3-section { display: grid; grid-template-columns: 55fr 45fr; }
        .hero-v3-right { clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%); }
        .hero-v3-card { left: 55%; }
        @media (max-width: 768px) {
          .hero-v3-section { grid-template-columns: 1fr; }
          .hero-v3-right { display: none; }
          .hero-v3-card { display: none; }
        }
      `}</style>
    <section className="hero-v3-section" style={{ position: 'relative', minHeight: '85vh', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>

      {/* Left content panel */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem clamp(2rem, 5vw, 5rem) 4rem clamp(2rem, 6vw, 6rem)' }}>

        {prospect.logoUrl && (
          <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2.5rem', marginBottom: '3rem', display: 'block' }} />
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ width: '2.5rem', height: '2px', background: 'var(--color-primary)' }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600 }}>{sector.label}</span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--color-text)', marginBottom: '1.75rem' }}>
          {prospect.company}
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.7, color: 'var(--color-text-light)', marginBottom: '0.875rem', maxWidth: '30rem' }}>
          {tagline}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '28rem', opacity: 0.82 }}>
          {desc}
        </p>

        {/* City badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: radius, background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)', width: 'fit-content', marginBottom: '2.5rem' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--color-text-light)' }}>📍 {prospect.city}</span>
        </div>

        <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' as const }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: shadow }}>
              <Phone size={16} /> {prospect.phone}
            </a>
          )}
          {prospect.email && (
            <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              <Mail size={16} /> Écrire
            </a>
          )}
        </div>
      </div>

      {/* Right color panel — diagonal cut on left edge */}
      <div className="hero-v3-right" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}>
        {heroImage && (
          <>
            <img src={heroImage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, var(--color-primary) 0%, var(--color-secondary) 100%)', opacity: 0.75 }} />
          </>
        )}

        {/* Vertical rotated label */}
        <div style={{ position: 'absolute', right: '2.25rem', top: '50%', transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'center center', whiteSpace: 'nowrap' as const }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.32)', fontWeight: 500 }}>
            {sector.label} · {prospect.city} · {new Date().getFullYear()}
          </span>
        </div>

        {/* Decorative rings */}
        <div style={{ position: 'absolute', top: '18%', left: '28%', width: '10vw', height: '10vw', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '22%', right: '22%', width: '6vw', height: '6vw', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />

        {/* Large initials watermark */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 900, color: 'rgba(255,255,255,0.08)', letterSpacing: '-0.05em', userSelect: 'none' as const, lineHeight: 1, pointerEvents: 'none' }}>
          {prospect.company.slice(0, 2).toUpperCase()}
        </div>
      </div>

      {/* Floating credential card — straddles the diagonal */}
      <div className="hero-v3-card" style={{ position: 'absolute', zIndex: 10, top: '50%', transform: 'translate(-50%, -50%)', background: 'var(--color-surface)', borderRadius: radius, padding: '1.5rem 2rem', boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' as const, minWidth: '9rem' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.04em' }}>
          {prospect.company.slice(0, 2).toUpperCase()}
        </div>
        <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--color-text-light)', fontWeight: 600 }}>Expert</div>
      </div>

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
    </>
  )
}

// ── V4: Cinéma — Giant typographic watermark + stats preview strip ─────────────
// Company name printed at enormous scale (opacity 0.05) across the background.
// Content layer: sector badge, h1, tagline, CTAs. Bottom: stats in primary band.
// Idéal: sport, événementiel, commerce, marques à forte identité.

function V4(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const statSet = safeGet(sector.corpus.stats, corpusIndex, [])
  const displayStats = statSet.slice(0, 3)

  return (
    <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>

      {/* Giant background watermark */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 26vw, 24rem)', fontWeight: 900, letterSpacing: '-0.06em', color: 'var(--color-primary)', opacity: 0.05, whiteSpace: 'nowrap' as const, pointerEvents: 'none', userSelect: 'none' as const, lineHeight: 1 }}>
        {prospect.company}
      </div>

      {/* Top 3px accent line */}
      <div style={{ height: 3, background: 'var(--color-primary)', flexShrink: 0 }} />

      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 3rem', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0, position: 'relative', zIndex: 2, background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(10px)' }}>
        {prospect.logoUrl
          ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2rem' }} />
          : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-text)', fontSize: '1rem' }}>{prospect.company}</span>
        }
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ fontFamily: 'var(--font-accent)', fontSize: '0.78rem', color: 'var(--color-text-light)', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {prospect.phone}
            </a>
          )}
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600 }}>{prospect.city}</span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center', padding: '3rem clamp(2rem, 8vw, 8rem)' }}>
        <div style={{ maxWidth: '52rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.875rem', background: 'var(--color-primary)', borderRadius: '9999px', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'white', fontWeight: 600 }}>{sector.label}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.75rem, 7vw, 7rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--color-text)', marginBottom: '2rem' }}>
            {prospect.company}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', lineHeight: 1.65, color: 'var(--color-text-light)', marginBottom: '3rem', maxWidth: '38rem' }}>
            {tagline}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.25rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', boxShadow: shadow }}>
                <Phone size={17} /> {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.25rem', border: '2px solid var(--color-text)', color: 'var(--color-text)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', background: 'transparent' }}>
              <Mail size={17} /> {prospect.email ?? 'Contactez-nous'}
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      {displayStats.length > 0 && (
        <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(0,0,0,0.07)', background: 'var(--color-primary)', display: 'flex', flexWrap: 'wrap' as const, flexShrink: 0 }}>
          {displayStats.map((stat, i) => (
            <div key={i} style={{ flex: '1 0 10rem', padding: '1.5rem 2rem', borderRight: i < displayStats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : undefined }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.65)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
  )
}

// ── V5: Colonne — Editorial side column, mixed-alignment typographic statement ──
// A primary-color right sidebar carries rotated labels (sector, city, year).
// Main area: overline, company name split at word boundary with contrasting
// alignment and outline treatment, tagline + CTAs in flex row.
// Idéal: restaurants, design, mode, architectes, tous les créatifs.

function V5(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)

  const nameParts = prospect.company.split(' ')
  const mid = Math.ceil(nameParts.length / 2)
  const nameFirstLine = nameParts.slice(0, mid).join(' ')
  const nameSecondLine = nameParts.slice(mid).join(' ')

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .hero-v5-sidebar { display: none !important; }
        }
      `}</style>
    <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>

      {/* Main content area */}
      <div style={{ flex: 1, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem clamp(2rem, 5vw, 5rem)' }}>

        {prospect.logoUrl && (
          <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2.25rem', marginBottom: '3.5rem', display: 'block' }} />
        )}

        {/* Overline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '4rem', height: '2px', background: 'var(--color-primary)' }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600 }}>
            {sector.label}
          </span>
        </div>

        {/* Company name — split typographic statement */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 8.5rem)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.04em', color: 'var(--color-text)', margin: 0, textAlign: 'left' as const }}>
            {nameFirstLine}
          </h1>
          {nameSecondLine && (
            <>
              <div style={{ height: 2, background: 'linear-gradient(to right, var(--color-primary) 0%, transparent 70%)', margin: '0.5rem 0', width: '100%' }} />
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 9vw, 8.5rem)', fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.04em', WebkitTextStroke: '2px var(--color-text)', color: 'transparent', margin: 0, textAlign: 'right' as const }}>
                {nameSecondLine}
              </h1>
            </>
          )}
        </div>

        {/* Separator */}
        <div style={{ height: 1, background: 'rgba(0,0,0,0.07)', marginBottom: '2rem' }} />

        {/* Tagline + CTAs */}
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' as const }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.7, color: 'var(--color-text-light)', flex: '1 1 22rem', margin: 0 }}>
            {tagline}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: '0 0 auto' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.875rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: shadow, whiteSpace: 'nowrap' as const }}>
                <Phone size={16} /> {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.875rem', border: '1.5px solid rgba(0,0,0,0.15)', color: 'var(--color-text)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
              <Mail size={16} /> {prospect.email ?? 'Écrire'}
            </a>
          </div>
        </div>

        {/* Footer annotation */}
        <div style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.28)', textTransform: 'uppercase' as const, margin: 0 }}>
            {prospect.city} — {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Right sidebar column */}
      <div className="hero-v5-sidebar" style={{ width: '10rem', flexShrink: 0, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '2.5rem 0', background: 'var(--color-primary)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 900, color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.03em' }}>
          {prospect.company.slice(0, 2).toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.52)', writingMode: 'vertical-rl' as const, transform: 'rotate(180deg)' }}>
            {sector.label}
          </span>
          <div style={{ width: 1, height: '3rem', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.32)', writingMode: 'vertical-rl' as const, transform: 'rotate(180deg)' }}>
            {prospect.city}
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', writingMode: 'vertical-rl' as const }}>
          {new Date().getFullYear()}
        </span>
      </div>

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
    </>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function Hero(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    case 5: return <V5 {...props} />
    default: return <V1 {...props} />
  }
}
