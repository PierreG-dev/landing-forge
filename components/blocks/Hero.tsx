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

const FALLBACK_TAGLINE = "L'expertise au service de {{city}}"
const FALLBACK_DESC = "Nous mettons notre savoir-faire au service de votre projet à {{city}}. Contactez {{company}} dès aujourd'hui."

// ── V1: Nocturne ────────────────────────────────────────────────────────────────
// Photo plein cadre, overlay sombre éditorial, tagline en H1 façon couverture
// de magazine, nom de marque en identifiant secondaire small-caps.
// Layout bottom-anchored. Barre accent gauche en dégradé primaire→secondaire.
// Idéal: juridique, immobilier, conseil, B2B premium.

function V1(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const heroImg = sector.images?.hero?.[0] ?? `https://picsum.photos/seed/${sector.id}1/1600/900`

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Photo + overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={heroImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.65) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 50%)' }} />
      </div>

      {/* Left accent bar */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(to bottom, var(--color-primary) 0%, var(--color-secondary) 65%, transparent 100%)', zIndex: 5 }} />

      {/* Nav */}
      <header style={{ position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.75rem clamp(2rem, 5vw, 4.5rem)' }}>
        {prospect.logoUrl
          ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '1.875rem', filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
          : <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{prospect.company}</span>
        }
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.875rem 0.35rem 0.75rem', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '9999px', backdropFilter: 'blur(16px)', background: 'rgba(255,255,255,0.05)' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.63rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>{sector.label}</span>
          <span style={{ color: 'rgba(255,255,255,0.22)', margin: '0 0.1rem' }}>·</span>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.63rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' }}>{prospect.city}</span>
        </div>
      </header>

      {/* Hero content — bottom anchored */}
      <main style={{ position: 'relative', zIndex: 5, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 4.5rem) clamp(3.5rem, 6vw, 5rem)' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '2.5rem', height: '1px', background: 'var(--color-primary)' }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.63rem', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600 }}>
            {prospect.city}
          </span>
        </div>

        {/* H1 = tagline */}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 5vw, 4.75rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em', color: 'white', marginBottom: '0.875rem', maxWidth: '22ch', margin: '0 0 0.875rem' }}>
          {tagline}
        </h1>

        {/* Company name — secondary identifier */}
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem', fontWeight: 500, margin: '0 0 1.5rem' }}>
          {prospect.company}
        </p>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.3vw, 1rem)', lineHeight: 1.8, color: 'rgba(255,255,255,0.52)', marginBottom: '2.5rem', maxWidth: '44rem', margin: '0 0 2.5rem' }}>
          {desc}
        </p>

        <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' as const, alignItems: 'center' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.875rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', boxShadow: shadow, letterSpacing: '0.02em' }}>
              <Phone size={15} /> {prospect.phone}
            </a>
          )}
          <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.875rem', border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.88)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.06)' }}>
            <Mail size={15} /> {prospect.email ?? 'Nous écrire'}
          </a>
        </div>
      </main>

      {/* Footer strip */}
      <footer style={{ position: 'relative', zIndex: 5, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '0.875rem clamp(2rem, 5vw, 4.5rem)', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' as const }}>
        {prospect.phone && <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.2)' }}>{prospect.phone}</span>}
        {prospect.email && <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.16)' }}>{prospect.email}</span>}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 1, height: '0.875rem', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.13)' }}>{new Date().getFullYear()}</span>
        </div>
      </footer>

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
  )
}

// ── V2: Bauhaus ─────────────────────────────────────────────────────────────────
// Grille éditoriale 55/45. Contenu Swiss design à gauche, panneau photo avec
// cut diagonal à droite. Tagline en H1 bold à fort contraste typographique.
// Nom de marque en overline couleur. Règle gradient bas.
// Idéal: artisans, architectes, tech, BTP, agences créatives.

function V2(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const heroImg = sector.images?.hero?.[0] ?? `https://picsum.photos/seed/${sector.id}2/900/1200`

  return (
    <>
      <style>{`
        .hero-v2-grid { display: grid; grid-template-columns: 55fr 45fr; min-height: 88vh; overflow: hidden; }
        .hero-v2-img-panel { position: relative; overflow: hidden; clip-path: polygon(9% 0, 100% 0, 100% 100%, 0% 100%); }
        @media (max-width: 900px) {
          .hero-v2-grid { grid-template-columns: 1fr; min-height: auto; }
          .hero-v2-img-panel { min-height: 280px; clip-path: none; }
        }
      `}</style>
      <section className="hero-v2-grid" style={{ position: 'relative', backgroundColor: 'var(--color-surface)' }}>

        {/* Bottom gradient rule */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', zIndex: 10 }} />

        {/* Left content panel */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3rem, 5vw, 5.5rem) clamp(2rem, 4vw, 4.5rem) clamp(3rem, 5vw, 5.5rem) clamp(2rem, 6vw, 6rem)' }}>

          {prospect.logoUrl && (
            <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2rem', marginBottom: '3.5rem', display: 'block' }} />
          )}

          {/* Sector rule overline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: 2, width: '2rem', background: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--color-text-light)', fontWeight: 600, whiteSpace: 'nowrap' as const }}>{sector.label}</span>
            <div style={{ height: 1, flex: 1, background: 'var(--color-text)', opacity: 0.1 }} />
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.63rem', letterSpacing: '0.14em', color: 'var(--color-text-light)', opacity: 0.55 }}>{prospect.city}</span>
          </div>

          {/* Company name — small, colored */}
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 700, margin: '0 0 0.875rem' }}>
            {prospect.company}
          </p>

          {/* H1 = tagline */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 4.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--color-text)', margin: '0 0 1.5rem', maxWidth: '18ch' }}>
            {tagline}
          </h1>

          {/* Short accent rule */}
          <div style={{ width: 'clamp(3rem, 8vw, 5rem)', height: 3, background: 'var(--color-primary)', marginBottom: '1.75rem' }} />

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.4vw, 1.02rem)', lineHeight: 1.78, color: 'var(--color-text-light)', maxWidth: '36rem', marginBottom: '2.75rem', margin: '0 0 2.75rem' }}>
            {desc}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' as const, alignItems: 'center' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', backgroundColor: 'var(--color-text)', color: 'var(--color-surface)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: shadow }}>
                <Phone size={15} /> {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', letterSpacing: '0.02em' }}>
              {prospect.email ?? 'Nous contacter'} <span style={{ marginLeft: '0.25rem', fontSize: '1.1rem', lineHeight: 1 }}>→</span>
            </a>
          </div>

          {/* Dot texture */}
          <div style={{ position: 'absolute', bottom: '2rem', right: '2.5rem', width: '7rem', height: '7rem', backgroundImage: 'radial-gradient(circle, var(--color-primary) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px', opacity: 0.1, pointerEvents: 'none' }} />
        </div>

        {/* Right photo panel */}
        <div className="hero-v2-img-panel">
          <img src={heroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.32) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'var(--color-primary)', opacity: 0.14 }} />

          {/* Initials watermark */}
          <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, color: 'rgba(255,255,255,0.07)', letterSpacing: '-0.05em', lineHeight: 1, userSelect: 'none' as const, pointerEvents: 'none' }}>
            {prospect.company.slice(0, 2).toUpperCase()}
          </div>

          {/* Vertical label */}
          <div style={{ position: 'absolute', right: '1.75rem', top: '50%', transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'center center', whiteSpace: 'nowrap' as const, zIndex: 2 }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.58rem', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.28)', fontWeight: 500 }}>
              {sector.label} · {new Date().getFullYear()}
            </span>
          </div>
        </div>

        <Separator style={theme.separators.style} fill="var(--color-surface)" />
      </section>
    </>
  )
}

// ── V3: Oblique ─────────────────────────────────────────────────────────────────
// Luxury split diagonal 58/42. Contenu élégant à gauche avec nom de marque medium
// puis tagline en H1 raffiné. Panneau photo diagonal à droite avec overlay dégradé.
// Carte flottante straddling le cut diagonal. Très premium.
// Idéal: beauté, coaching, médical, bien-être, professions libérales.

function V3(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const heroImg = sector.images?.hero?.[0] ?? `https://picsum.photos/seed/${sector.id}3/800/1100`

  return (
    <>
      <style>{`
        .hero-v3-section { display: grid; grid-template-columns: 58fr 42fr; min-height: 88vh; }
        .hero-v3-right { clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%); }
        .hero-v3-card { left: 58%; }
        @media (max-width: 900px) {
          .hero-v3-section { grid-template-columns: 1fr; min-height: auto; }
          .hero-v3-right { display: none; }
          .hero-v3-card { display: none; }
        }
      `}</style>
      <section className="hero-v3-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>

        {/* Left content panel */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3.5rem, 6vw, 6rem) clamp(2rem, 4vw, 4rem) clamp(3.5rem, 6vw, 6rem) clamp(2rem, 7vw, 6rem)' }}>

          {prospect.logoUrl && (
            <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '1.875rem', marginBottom: '3rem', display: 'block' }} />
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '2rem', height: '2px', background: 'var(--color-primary)' }} />
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.63rem', letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600 }}>{sector.label}</span>
          </div>

          {/* Company name — medium, brand identifier */}
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em', margin: '0 0 1.25rem' }}>
            {prospect.company}
          </p>

          {/* H1 = tagline */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--color-text)', margin: '0 0 1.75rem', maxWidth: '20ch' }}>
            {tagline}
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.3vw, 1rem)', lineHeight: 1.82, color: 'var(--color-text-light)', margin: '0 0 2.25rem', maxWidth: '30rem' }}>
            {desc}
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.875rem', borderRadius: '9999px', background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)', width: 'fit-content', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.63rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--color-text-light)' }}>📍 {prospect.city}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.875rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', boxShadow: shadow }}>
                <Phone size={15} /> {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.875rem', border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
              <Mail size={15} /> Prendre RDV
            </a>
          </div>
        </div>

        {/* Right photo panel — diagonal cut */}
        <div className="hero-v3-right" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={heroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, var(--color-primary) 0%, var(--color-secondary) 100%)', opacity: 0.52 }} />

          {/* Vertical label */}
          <div style={{ position: 'absolute', right: '1.75rem', top: '50%', transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'center center', whiteSpace: 'nowrap' as const, zIndex: 2 }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.58rem', letterSpacing: '0.42em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.32)', fontWeight: 500 }}>
              {sector.label} · {prospect.city} · {new Date().getFullYear()}
            </span>
          </div>

          {/* Decorative ring */}
          <div style={{ position: 'absolute', top: '22%', left: '32%', width: '8vw', height: '8vw', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', pointerEvents: 'none', zIndex: 2 }} />
          <div style={{ position: 'absolute', bottom: '28%', right: '24%', width: '4vw', height: '4vw', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none', zIndex: 2 }} />
        </div>

        {/* Floating credential card */}
        <div className="hero-v3-card" style={{ position: 'absolute', zIndex: 10, top: '50%', transform: 'translate(-50%, -50%)', background: 'var(--color-surface)', borderRadius: radius, padding: '1.75rem 2rem', boxShadow: '0 24px 64px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' as const, minWidth: '10rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.04em' }}>
            {prospect.company.slice(0, 2).toUpperCase()}
          </div>
          <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--color-text-light)', fontWeight: 600 }}>
            {sector.label}
          </div>
          <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--color-text-light)', opacity: 0.55 }}>
              {prospect.city}
            </div>
          </div>
        </div>

        <Separator style={theme.separators.style} fill="var(--color-surface)" />
      </section>
    </>
  )
}

// ── V4: Cinéma ──────────────────────────────────────────────────────────────────
// Photo plein cadre, tagline dramatique en grand plan côté gauche.
// Nom de l'enseigne en watermark typographique traversant le fond.
// Header bar translucide. Strip de stats en bas en couleur primaire.
// Idéal: sport, événementiel, restauration, commerce, forte identité.

function V4(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const statSet = safeGet(sector.corpus.stats, corpusIndex, [])
  const displayStats = statSet.slice(0, 3)
  const heroImg = sector.images?.hero?.[0] ?? `https://picsum.photos/seed/${sector.id}4/1600/900`

  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Full bleed photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={heroImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.62) 40%, rgba(0,0,0,0.22) 75%, rgba(0,0,0,0.42) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }} />
      </div>

      {/* Watermark company name */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 18vw, 17rem)', fontWeight: 900, letterSpacing: '-0.06em', color: 'white', opacity: 0.04, whiteSpace: 'nowrap' as const, pointerEvents: 'none', userSelect: 'none' as const, lineHeight: 1, zIndex: 1 }}>
        {prospect.company}
      </div>

      {/* Top accent line */}
      <div style={{ height: 3, background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', flexShrink: 0, position: 'relative', zIndex: 5 }} />

      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.125rem clamp(1.5rem, 4vw, 3.5rem)', flexShrink: 0, position: 'relative', zIndex: 5, backdropFilter: 'blur(14px)', background: 'rgba(0,0,0,0.28)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {prospect.logoUrl
          ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '1.625rem', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
          : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'white', fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>{prospect.company}</span>
        }
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.58)', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {prospect.phone}
            </a>
          )}
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600 }}>{prospect.city}</span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 5, flex: 1, display: 'flex', alignItems: 'center', padding: '3rem clamp(2rem, 8vw, 7rem)' }}>
        <div style={{ maxWidth: '36rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.28rem 0.75rem', background: 'var(--color-primary)', borderRadius: '9999px', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'white', fontWeight: 600 }}>{sector.label}</span>
          </div>

          {/* H1 = tagline */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.03em', color: 'white', margin: '0 0 1.5rem' }}>
            {tagline}
          </h1>

          {/* Company name — small secondary */}
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.32)', margin: '0 0 2.5rem', fontWeight: 500 }}>
            {prospect.company}
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' as const }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.875rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', boxShadow: shadow }}>
                <Phone size={15} /> {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.875rem', border: '1px solid rgba(255,255,255,0.28)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.07)' }}>
              <Mail size={15} /> {prospect.email ?? 'Contactez-nous'}
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      {displayStats.length > 0 && (
        <div style={{ position: 'relative', zIndex: 5, background: 'var(--color-primary)', display: 'flex', flexWrap: 'wrap' as const, flexShrink: 0 }}>
          {displayStats.map((stat, i) => (
            <div key={i} style={{ flex: '1 0 10rem', padding: '1.25rem 2rem', borderRight: i < displayStats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : undefined }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.58)' }}>
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

// ── V5: Colonne ─────────────────────────────────────────────────────────────────
// Éditorial de marque. Sidebar couleur à droite avec labels rotatifs.
// Zone principale : tagline splitée en 2 lignes contrastées (solid + outline)
// avec cadre photo flottant dans la zone contenu. Description + CTAs en bas.
// Idéal: restaurants, design, mode, architectes, créatifs, artisans haut de gamme.

function V5(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const heroImg = sector.images?.hero?.[0] ?? `https://picsum.photos/seed/${sector.id}5/600/800`

  const words = tagline.split(' ')
  const mid = Math.ceil(words.length / 2)
  const line1 = words.slice(0, mid).join(' ')
  const line2 = words.slice(mid).join(' ')

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .hero-v5-sidebar { display: none !important; }
          .hero-v5-img { display: none !important; }
        }
      `}</style>
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>

        {/* Main content area */}
        <div style={{ flex: 1, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3rem, 5vw, 5.5rem) clamp(2rem, 4vw, 4rem) clamp(3rem, 5vw, 5.5rem) clamp(2rem, 6vw, 5.5rem)' }}>

          {prospect.logoUrl && (
            <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '1.875rem', marginBottom: '3.5rem', display: 'block' }} />
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '3rem', height: '2px', background: 'var(--color-primary)' }} />
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 600 }}>
              {sector.label}
            </span>
          </div>

          {/* H1 = tagline split typographic statement */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 5.25rem)', fontWeight: 900, lineHeight: 0.93, letterSpacing: '-0.035em', color: 'var(--color-text)', margin: 0 }}>
              {line1}
            </h1>
            {line2 && (
              <>
                <div style={{ height: 2, background: 'linear-gradient(to right, var(--color-primary) 0%, transparent 65%)', margin: '0.5rem 0' }} />
                <h1 aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 5.25rem)', fontWeight: 900, lineHeight: 0.93, letterSpacing: '-0.035em', WebkitTextStroke: '1.5px var(--color-text)', color: 'transparent', margin: 0, textAlign: 'right' as const }}>
                  {line2}
                </h1>
              </>
            )}
          </div>

          {/* Company name — small secondary */}
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-text-light)', opacity: 0.6, margin: '0 0 1rem' }}>
            {prospect.company}
          </p>

          <div style={{ height: 1, background: 'rgba(0,0,0,0.07)', marginBottom: '1.75rem' }} />

          {/* Content row: desc + CTAs + photo */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' as const }}>
            <div style={{ flex: '1 1 22rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.3vw, 1rem)', lineHeight: 1.82, color: 'var(--color-text-light)', margin: '0 0 1.75rem' }}>
                {desc}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
                {prospect.phone && (
                  <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', boxShadow: shadow, whiteSpace: 'nowrap' as const }}>
                    <Phone size={15} /> {prospect.phone}
                  </a>
                )}
                <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', border: '1.5px solid rgba(0,0,0,0.12)', color: 'var(--color-text)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
                  <Mail size={15} /> {prospect.email ?? 'Écrire'}
                </a>
              </div>
            </div>

            {/* Floating photo frame */}
            <div className="hero-v5-img" style={{ flex: '0 0 auto', width: 'clamp(10rem, 17vw, 15rem)', height: 'clamp(13rem, 22vw, 20rem)', borderRadius: radius, overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.07)', border: '4px solid var(--color-surface)', outline: '1px solid rgba(0,0,0,0.06)' }}>
              <img src={heroImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            </div>
          </div>

          <div style={{ marginTop: '3.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.2)', textTransform: 'uppercase' as const, margin: 0 }}>
              {prospect.city} — {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="hero-v5-sidebar" style={{ width: '9rem', flexShrink: 0, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '2.5rem 0', background: 'var(--color-primary)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, color: 'rgba(255,255,255,0.48)', letterSpacing: '-0.02em' }}>
            {prospect.company.slice(0, 2).toUpperCase()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)', writingMode: 'vertical-rl' as const, transform: 'rotate(180deg)' }}>
              {sector.label}
            </span>
            <div style={{ width: 1, height: '2.5rem', background: 'rgba(255,255,255,0.18)' }} />
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', writingMode: 'vertical-rl' as const, transform: 'rotate(180deg)' }}>
              {prospect.city}
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.26)', writingMode: 'vertical-rl' as const }}>
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
