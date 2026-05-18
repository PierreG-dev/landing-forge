import { Phone, Mail, MapPin, LucideIcons } from './icons'
import { substitute } from '@/lib/engine/substitutor'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius } from './utils'

type LucideIcon = React.ComponentType<{ size?: number; style?: React.CSSProperties }>
function Icon({ name, size = 24, style }: { name: string; size?: number; style?: React.CSSProperties }) {
  const Comp = (LucideIcons as unknown as Record<string, LucideIcon>)[name]
  if (!Comp) return null
  return <Comp size={size} style={style} />
}

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

// ── Shared CSS ──────────────────────────────────────────────────────────────
const SHARED_STYLES = `
  @keyframes kenburns {
    0%   { transform: scale(1.0) translate(0%, 0%); }
    50%  { transform: scale(1.08) translate(-1%, -0.5%); }
    100% { transform: scale(1.0) translate(0%, 0%); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes drawLine {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes scrollBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%      { transform: translateX(-50%) translateY(7px); }
  }
  @keyframes pulseBadge {
    0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.45); }
    60%      { box-shadow: 0 0 0 9px rgba(22,163,74,0); }
  }
  @keyframes dotBlink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.35; }
  }
  @keyframes statsSlide {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-u  { animation: fadeUp 0.55s ease both; }
  .fd-1    { animation-delay: 0.05s; }
  .fd-2    { animation-delay: 0.18s; }
  .fd-3    { animation-delay: 0.30s; }
  .fd-4    { animation-delay: 0.44s; }
  .fd-5    { animation-delay: 0.56s; }
  .fd-6    { animation-delay: 0.68s; }
  .kb-img  { animation: kenburns 16s ease-in-out infinite; will-change: transform; }
  .line-anim { transform-origin: left; animation: drawLine 0.5s ease-out 0.42s both; }
  .stat-anim { animation: statsSlide 0.5s ease both; }
  .sa-1 { animation-delay: 0.55s; }
  .sa-2 { animation-delay: 0.68s; }
  .sa-3 { animation-delay: 0.80s; }
  .hero-cta-p {
    transition: transform 0.14s ease, box-shadow 0.14s ease, filter 0.14s ease;
  }
  .hero-cta-p:hover { transform: translateY(-2px); filter: brightness(1.07); }
  .hero-cta-p:active { transform: translateY(0); filter: brightness(0.95); }
  .hero-cta-s { transition: background 0.14s ease, color 0.14s ease, border-color 0.14s ease; }
  .hero-cta-s:hover { background: rgba(255,255,255,0.14) !important; }
  .hero-cta-s-light:hover { background: rgba(0,0,0,0.06) !important; }
  @media (prefers-reduced-motion: reduce) {
    .fade-u, .kb-img, .line-anim, .stat-anim,
    .hero-cta-p, .hero-cta-s, .hero-cta-s-light {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`

function ScrollIndicator({ color = 'white' }: { color?: string }) {
  return (
    <div style={{ position: 'absolute', bottom: '1.75rem', left: '50%', animation: 'scrollBounce 2.2s ease-in-out infinite', zIndex: 10 }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ color, opacity: 0.4, display: 'block' }}>
        <path d="M5 8.5L11 14.5L17 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

const FALLBACK_TAGLINE = "L'expertise au service de {{city}}"
const FALLBACK_DESC = "Nous mettons notre savoir-faire au service de votre projet à {{city}}. Contactez {{company}} dès aujourd'hui."

// ── V1: Urgent Direct ───────────────────────────────────────────────────────
// Full bleed. Overlay sombre directionnel (lourd à gauche, léger à droite).
// Contenu texte blanc, numéro de téléphone très grand.
// Idéal: plombier, électricien, artisan-bâtiment.

function V1(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const fallbackImg = `https://picsum.photos/seed/${sector.id}-urgent/1600/900`
  const heroImg = safeGet(sector.images?.hero ?? [], corpusIndex, fallbackImg)
  const trustSet = safeGet(sector.corpus.trustItems, corpusIndex, [])
  const displayTrust = trustSet.slice(0, 2)

  return (
    <>
      <style>{`
        ${SHARED_STYLES}
        .v1-bg { position: absolute; inset: 0; overflow: hidden; }
        @media (max-width: 640px) { .v1-trust { flex-direction: column !important; } }
      `}</style>
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        <div className="v1-bg">
          <img src={heroImg} alt="" className="kb-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.25) 100%)' }} />
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, backgroundColor: 'var(--color-primary)', zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: '56rem', padding: 'clamp(5rem, 8vw, 8rem) clamp(2rem, 8vw, 7rem)' }}>

          <div className="fade-u fd-1">
            {prospect.logoUrl
              ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2.25rem', marginBottom: '2rem', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
              : <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', margin: '0 0 1.5rem', opacity: 0.9 }}>
                  {prospect.company}
                </p>
            }
          </div>

          <div className="fade-u fd-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 700 }}>{sector.label}</span>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.5rem' }}>●</span>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{prospect.city}</span>
          </div>

          <h1 className="fade-u fd-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em', color: 'white', margin: '0 0 0.875rem', maxWidth: '22ch' }}>
            {tagline}
          </h1>

          <div className="line-anim" style={{ width: '2.5rem', height: 3, backgroundColor: 'var(--color-primary)', marginBottom: '1.25rem' }} />

          <p className="fade-u fd-4" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.3vw, 1rem)', lineHeight: 1.78, color: 'rgba(255,255,255,0.72)', maxWidth: '36rem', margin: '0 0 2.25rem' }}>
            {desc}
          </p>

          <div className="fade-u fd-5" style={{ marginBottom: '1.5rem' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} className="hero-cta-p" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: 'white', textDecoration: 'none', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.75rem' }}>
                {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} className="hero-cta-s" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-accent)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
              <Mail size={14} /> {prospect.email ?? 'Nous écrire'}
            </a>
          </div>

          {displayTrust.length > 0 && (
            <div className="fade-u fd-6 v1-trust" style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.625rem' }}>
              {displayTrust.map((item, i) => (
                <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.875rem', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' as const }}>
                  <Icon name={item.icon} size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <ScrollIndicator />
        <Separator style={theme.separators.style} fill="var(--color-surface)" />
      </section>
    </>
  )
}

// ── V2: Vitrine Locale ──────────────────────────────────────────────────────
// Image plein cadre visible. Panneau blanc opaque collé à droite.
// Effet de profondeur entre la photo brute et la fiche entreprise.
// Idéal: garage, coiffeur, commerce local, artisan.

function V2(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const fallbackImg = `https://picsum.photos/seed/${sector.id}-vitrine/1600/900`
  const heroImg = safeGet(sector.images?.hero ?? [], corpusIndex, fallbackImg)
  const trustSet = safeGet(sector.corpus.trustItems, corpusIndex, [])
  const displayTrust = trustSet.slice(0, 2)

  return (
    <>
      <style>{`
        ${SHARED_STYLES}
        .v2-bg { position: absolute; inset: 0; overflow: hidden; }
        .v2-panel {
          position: relative; zIndex: 5;
          margin-left: auto;
          width: 50%;
          min-height: 88vh;
          background: var(--color-surface);
          display: flex; flex-direction: column; justify-content: center;
          padding: clamp(3rem, 5vw, 5.5rem) clamp(2.5rem, 5vw, 4.5rem);
          box-shadow: -12px 0 48px rgba(0,0,0,0.18);
        }
        @media (max-width: 860px) {
          .v2-panel { width: 100%; min-height: auto; margin-top: 50vw; box-shadow: none; }
          .v2-mobile-img { display: block !important; }
        }
      `}</style>
      <section style={{ position: 'relative', minHeight: '88vh', overflow: 'hidden' }}>

        <div className="v2-bg">
          <img src={heroImg} alt="" className="kb-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 45%, transparent 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 5, display: 'flex', minHeight: '88vh' }}>
          <div className="v2-panel">

            <div className="fade-u fd-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', backgroundColor: '#dcfce7', border: '1px solid #86efac', borderRadius: '9999px', marginBottom: '1.25rem', animation: 'fadeUp 0.55s ease both 0.05s, pulseBadge 2.8s ease-in-out infinite 1s', width: 'fit-content' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#16a34a', animation: 'dotBlink 1.5s ease-in-out infinite', flexShrink: 0, display: 'block' }} />
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', fontWeight: 700, color: '#15803d', letterSpacing: '0.06em' }}>Intervention rapide</span>
            </div>

            <div className="fade-u fd-2">
              {prospect.logoUrl
                ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2rem', marginBottom: '1.5rem', display: 'block' }} />
                : <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '-0.02em', margin: '0 0 1.25rem' }}>
                    {prospect.company}
                  </p>
              }
            </div>

            <div className="fade-u fd-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 700 }}>{sector.label}</span>
              <span style={{ color: 'rgba(0,0,0,0.18)', fontSize: '0.5rem' }}>●</span>
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--color-text-light)', fontWeight: 500 }}>{prospect.city}</span>
            </div>

            <h1 className="fade-u fd-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--color-text)', margin: '0 0 1rem', maxWidth: '20ch' }}>
              {tagline}
            </h1>

            <div className="line-anim" style={{ width: '2.5rem', height: 3, backgroundColor: 'var(--color-primary)', marginBottom: '1.25rem' }} />

            <p className="fade-u fd-4" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.4vw, 1rem)', lineHeight: 1.75, color: 'var(--color-text-light)', margin: '0 0 2rem' }}>
              {desc}
            </p>

            <div className="fade-u fd-5" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {prospect.phone && (
                <a href={`tel:${prospect.phone}`} className="hero-cta-p" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.25rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1rem, 2vw, 1.2rem)', textDecoration: 'none', boxShadow: shadow, letterSpacing: '-0.01em', width: 'fit-content' }}>
                  <Phone size={18} /> {prospect.phone}
                </a>
              )}
              <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} className="hero-cta-s-light hero-cta-s" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-text-light)', fontFamily: 'var(--font-accent)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', padding: '0.25rem 0' }}>
                <Mail size={14} /> {prospect.email ?? 'Nous écrire'}
              </a>
            </div>

            {displayTrust.length > 0 && (
              <div className="fade-u fd-6" style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.625rem' }}>
                {displayTrust.map((item, i) => (
                  <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.75rem', backgroundColor: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-text-light)', whiteSpace: 'nowrap' as const }}>
                    <Icon name={item.icon} size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Separator style={theme.separators.style} fill="var(--color-surface)" />
      </section>
    </>
  )
}

// ── V3: Centré Sobre ────────────────────────────────────────────────────────
// Image désaturée, fort overlay surface. Contenu centré, texte sombre.
// L'image transparaît sans écraser la lisibilité.
// Idéal: beauté, santé, coaching, juridique.

function V3(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const fallbackImg = `https://picsum.photos/seed/${sector.id}-sobre/1600/900`
  const heroImg = safeGet(sector.images?.hero ?? [], corpusIndex, fallbackImg)
  const trustSet = safeGet(sector.corpus.trustItems, corpusIndex, [])
  const displayTrust = trustSet.slice(0, 3)

  return (
    <>
      <style>{`
        ${SHARED_STYLES}
        .v3-bg { position: absolute; inset: 0; overflow: hidden; }
        .v3-trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,0,0,0.07); border-top: 1px solid rgba(0,0,0,0.07); position: relative; zIndex: 5; }
        @media (max-width: 640px) { .v3-trust-grid { grid-template-columns: 1fr; } }
      `}</style>
      <section style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="v3-bg">
          <img src={heroImg} alt="" className="kb-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'saturate(0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-surface)', opacity: 0.88 }} />
        </div>

        <div style={{ position: 'relative', zIndex: 5, maxWidth: '44rem', margin: '0 auto', textAlign: 'center', padding: 'clamp(5rem, 8vw, 8rem) clamp(1.5rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <div className="fade-u fd-1">
            {prospect.logoUrl
              ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2rem', marginBottom: '2.5rem', display: 'block' }} />
              : <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase' as const, letterSpacing: '0.06em', margin: '0 0 2rem' }}>
                  {prospect.company}
                </p>
            }
          </div>

          <div className="fade-u fd-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 700 }}>{sector.label}</span>
            <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '0.5rem' }}>●</span>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--color-text-light)', fontWeight: 500 }}>{prospect.city}</span>
          </div>

          <h1 className="fade-u fd-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--color-text)', margin: '0 0 1.5rem', maxWidth: '22ch', textAlign: 'center' }}>
            {tagline}
          </h1>

          <div className="line-anim" style={{ width: '3rem', height: 3, backgroundColor: 'var(--color-primary)', borderRadius: '9999px', marginBottom: '1.75rem' }} />

          <p className="fade-u fd-4" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.82, color: 'var(--color-text-light)', maxWidth: '36rem', textAlign: 'center', margin: '0 0 2.5rem' }}>
            {desc}
          </p>

          <div className="fade-u fd-5" style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.875rem', justifyContent: 'center' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} className="hero-cta-p" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: shadow }}>
                <Phone size={15} /> {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} className="hero-cta-s-light hero-cta-s" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', background: 'transparent' }}>
              <Mail size={15} /> {prospect.email ?? 'Prendre RDV'}
            </a>
          </div>
        </div>

        {displayTrust.length > 0 && (
          <div className="v3-trust-grid">
            {displayTrust.map((item, i) => (
              <div key={i} className={`stat-anim sa-${i + 1}`} style={{ backgroundColor: 'var(--color-surface)', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon} size={14} style={{ color: 'white' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3, marginBottom: item.subtitle ? '0.2rem' : 0 }}>{item.label}</div>
                  {item.subtitle && <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{item.subtitle}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        <Separator style={theme.separators.style} fill="var(--color-surface)" />
      </section>
    </>
  )
}

// ── V4: Local Pro ───────────────────────────────────────────────────────────
// Full bleed sombre. Contenu gauche en blanc.
// Carte flottante blanche à droite avec stats + trust items.
// Idéal: restauration, sport-coaching, événementiel, immobilier.

function V4(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const fallbackImg = `https://picsum.photos/seed/${sector.id}-localpro/1600/900`
  const heroImg = safeGet(sector.images?.hero ?? [], corpusIndex, fallbackImg)
  const statSet = safeGet(sector.corpus.stats, corpusIndex, [])
  const displayStats = statSet.slice(0, 3)
  const trustSet = safeGet(sector.corpus.trustItems, corpusIndex, [])
  const displayTrust = trustSet.slice(0, 2)

  return (
    <>
      <style>{`
        ${SHARED_STYLES}
        .v4-bg { position: absolute; inset: 0; overflow: hidden; }
        .v4-grid { display: grid; grid-template-columns: 1fr minmax(0, 360px); gap: clamp(2rem, 4vw, 4rem); align-items: center; min-height: 88vh; }
        .v4-card { background: var(--color-surface); border-radius: ${radius}; padding: 2rem; box-shadow: 0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12); }
        @media (max-width: 960px) {
          .v4-grid { grid-template-columns: 1fr; }
          .v4-card { display: none !important; }
        }
      `}</style>
      <section style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="v4-bg">
          <img src={heroImg} alt="" className="kb-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.30) 100%)' }} />
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, backgroundColor: 'var(--color-primary)', zIndex: 2 }} />

        <div className="v4-grid" style={{ position: 'relative', zIndex: 5, padding: 'clamp(4rem, 6vw, 6rem) clamp(2rem, 7vw, 6rem)' }}>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="fade-u fd-1">
              {prospect.logoUrl
                ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2.25rem', marginBottom: '2rem', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                : <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 1.25rem', opacity: 0.92 }}>
                    {prospect.company}
                  </p>
              }
            </div>

            <div className="fade-u fd-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
              <MapPin size={11} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'var(--color-primary)', fontWeight: 700 }}>{prospect.city}</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.5rem' }}>●</span>
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{sector.label}</span>
            </div>

            <h1 className="fade-u fd-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.025em', color: 'white', margin: '0 0 1rem', maxWidth: '22ch' }}>
              {tagline}
            </h1>

            <div className="line-anim" style={{ width: '2.5rem', height: 3, backgroundColor: 'var(--color-primary)', marginBottom: '1.25rem' }} />

            <p className="fade-u fd-4" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.3vw, 1rem)', lineHeight: 1.78, color: 'rgba(255,255,255,0.72)', maxWidth: '38rem', margin: '0 0 2rem' }}>
              {desc}
            </p>

            <div className="fade-u fd-5" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {prospect.phone && (
                <a href={`tel:${prospect.phone}`} className="hero-cta-p" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.875rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: shadow, width: 'fit-content' }}>
                  <Phone size={15} /> {prospect.phone}
                </a>
              )}
              <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} className="hero-cta-s" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-accent)', fontSize: '0.825rem', fontWeight: 600, textDecoration: 'none', padding: '0.25rem 0' }}>
                <Mail size={14} /> {prospect.email ?? 'Nous écrire'}
              </a>
            </div>
          </div>

          <div className="v4-card fade-u fd-4">
            {displayStats.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem', marginBottom: displayTrust.length > 0 ? '1.5rem' : 0, paddingBottom: displayTrust.length > 0 ? '1.5rem' : 0, borderBottom: displayTrust.length > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
                {displayStats.map((stat, i) => (
                  <div key={i} className={`stat-anim sa-${i + 1}`} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: i < displayStats.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: 500 }}>{stat.label}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.375rem', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            )}
            {displayTrust.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {displayTrust.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '2rem', height: '2rem', borderRadius: '0.375rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={item.icon} size={12} style={{ color: 'white' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3 }}>{item.label}</div>
                      {item.subtitle && <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--color-text-light)', marginTop: '0.1rem' }}>{item.subtitle}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ScrollIndicator />
        <Separator style={theme.separators.style} fill="var(--color-surface)" />
      </section>
    </>
  )
}

// ── V5: Photo Panorama ──────────────────────────────────────────────────────
// Full bleed. Overlay gauche. Stats strip en couleur primaire.
// Idéal: restauration premium, sport, événementiel, immobilier.

function V5(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const fallbackImg = `https://picsum.photos/seed/${sector.id}-panorama/1600/900`
  const heroImg = safeGet(sector.images?.hero ?? [], corpusIndex, fallbackImg)
  const statSet = safeGet(sector.corpus.stats, corpusIndex, [])
  const displayStats = statSet.slice(0, 3)

  return (
    <>
      <style>{`
        ${SHARED_STYLES}
        .v5-stats-strip { display: flex; flex-wrap: wrap; }
        @media (max-width: 640px) { .v5-stats-strip > div { flex: 1 0 100%; border-right: none !important; border-top: 1px solid rgba(255,255,255,0.12); } }
        .v5-bg { position: absolute; inset: 0; overflow: hidden; }
      `}</style>
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        <div className="v5-bg">
          <img src={heroImg} alt="" className="kb-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.10) 100%)' }} />
        </div>

        <header style={{ position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem clamp(1.5rem, 4vw, 3.5rem)', backdropFilter: 'blur(12px)', background: 'rgba(0,0,0,0.22)', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          {prospect.logoUrl
            ? <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '1.75rem', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'white', fontSize: '0.9rem', letterSpacing: '0.04em' }}>{prospect.company}</span>
          }
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.75rem', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '9999px' }}>
            <MapPin size={10} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.63rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{prospect.city}</span>
          </div>
        </header>

        <main style={{ position: 'relative', zIndex: 5, flex: 1, display: 'flex', alignItems: 'center', padding: '3rem clamp(2rem, 8vw, 7rem)' }}>
          <div style={{ maxWidth: '38rem' }}>
            <div className="fade-u fd-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.28rem 0.75rem', backgroundColor: 'var(--color-primary)', borderRadius: '9999px', marginBottom: '2rem' }}>
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'white', fontWeight: 600 }}>{sector.label}</span>
            </div>

            <h1 className="fade-u fd-2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.03em', color: 'white', margin: '0 0 1.25rem' }}>
              {tagline}
            </h1>

            <p className="fade-u fd-3" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.875rem, 1.3vw, 1rem)', lineHeight: 1.78, color: 'rgba(255,255,255,0.75)', margin: '0 0 2.5rem', maxWidth: '36rem' }}>
              {desc}
            </p>

            <div className="fade-u fd-4" style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' as const }}>
              {prospect.phone && (
                <a href={`tel:${prospect.phone}`} className="hero-cta-p" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.875rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: shadow }}>
                  <Phone size={15} /> {prospect.phone}
                </a>
              )}
              <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} className="hero-cta-s" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 1.875rem', border: '1px solid rgba(255,255,255,0.28)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.07)' }}>
                <Mail size={15} /> {prospect.email ?? 'Contactez-nous'}
              </a>
            </div>
          </div>
        </main>

        {displayStats.length > 0 && (
          <div className="v5-stats-strip" style={{ position: 'relative', zIndex: 5, backgroundColor: 'var(--color-primary)', flexShrink: 0 }}>
            {displayStats.map((stat, i) => (
              <div key={i} className={`stat-anim sa-${i + 1}`} style={{ flex: '1 0 10rem', padding: '1.25rem 2rem', borderRight: i < displayStats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : undefined }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.58)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <ScrollIndicator />
        <Separator style={theme.separators.style} fill="var(--color-surface)" />
      </section>
    </>
  )
}

// ── Export ──────────────────────────────────────────────────────────────────

export function Hero(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    case 5: return <V5 {...props} />
    default: return <V1 {...props} />
  }
}
