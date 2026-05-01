import { LucideIcons } from './icons'
import type { BlockProps } from './types'
import { safeGet, getBorderRadius, getSectionPadding } from './utils'
import type { StatSet } from '@/config/types'

type LucideIcon = React.ComponentType<{ size?: number; style?: React.CSSProperties }>
function Icon({ name, size = 24, style }: { name: string; size?: number; style?: React.CSSProperties }) {
  const Comp = ((LucideIcons as unknown) as Record<string, LucideIcon>)[name]
  if (!Comp) return <LucideIcons.TrendingUp size={size} style={style} />
  return <Comp size={size} style={style} />
}

const FALLBACK_STATS: StatSet = [
  { value: '10+', label: "Années d'expertise" },
  { value: '500+', label: 'Clients satisfaits' },
  { value: '98%', label: 'Taux de satisfaction' },
  { value: '24h', label: 'Délai de réponse' },
]

const STAT_ICONS = ['Award', 'Users', 'ThumbsUp', 'Clock']

// ── Variant 1: Éditorial sur fond primaire — ordinals + diviseurs + filigrane ──

function V1(props: BlockProps) {
  const { sector, corpusIndex } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 4) : FALLBACK_STATS.slice(0, 4)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-primary)', padding: '5rem 2rem', overflow: 'hidden' }}>
      {/* Filet haut / bas */}
      <div style={{ position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px', background: 'rgba(255,255,255,0.15)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '2rem', right: '2rem', height: '1px', background: 'rgba(255,255,255,0.15)' }} />

      {/* Filigrane — premier chiffre en arrière-plan */}
      <div style={{ position: 'absolute', top: '50%', right: '-1rem', transform: 'translateY(-50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(10rem, 26vw, 22rem)', fontWeight: 900, color: 'rgba(255,255,255,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.04em' }}>
        {displayStats[0]?.value}
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${displayStats.length}, 1fr)` }}>
        {displayStats.map((stat, i) => (
          <div key={i} style={{ position: 'relative', padding: '1.5rem 2rem', borderRight: i < displayStats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
            {/* Ordinal */}
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              — {String(i + 1).padStart(2, '0')}
            </div>
            {/* Valeur */}
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              {stat.value}
            </div>
            {/* Trait court */}
            <div style={{ width: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.35)', marginBottom: '0.625rem' }} />
            {/* Label */}
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, maxWidth: '12rem' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Variant 2: Split éditorial — intro à gauche, chiffres empilés à droite ─────

function V2(props: BlockProps) {
  const { sector, corpusIndex, theme } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 3) : FALLBACK_STATS.slice(0, 3)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)', gap: '5rem', alignItems: 'center' }}>

        {/* Gauche — introduction éditoriale */}
        <div>
          <div style={{ width: '3px', height: '2.5rem', background: 'var(--color-primary)', marginBottom: '1.75rem' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.375rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.3, marginBottom: '1rem' }}>
            Des résultats qui parlent d&apos;eux-mêmes
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
            Notre bilan, construit année après année.
          </p>
        </div>

        {/* Droite — chiffres alignés sur la baseline */}
        <div>
          {displayStats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', padding: '1.75rem 0', borderBottom: i < displayStats.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, letterSpacing: '-0.03em', minWidth: '5.5rem' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ── Variant 3: Deux stats monumentales — architecture de page blanche ──────────

function V3(props: BlockProps) {
  const { sector, corpusIndex, theme } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 2) : FALLBACK_STATS.slice(0, 2)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Filet central horizontal */}
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.06)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {displayStats.map((stat, i) => (
          <div key={i} style={{ position: 'relative', padding: '3.5rem 4rem', borderRight: i === 0 ? '1px solid rgba(0,0,0,0.07)' : 'none', overflow: 'hidden' }}>
            {/* Filigrane chiffre en bas à droite */}
            <div style={{ position: 'absolute', bottom: '0.5rem', right: '1.5rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem, 14vw, 11rem)', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.04, lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.04em' }}>
              {stat.value}
            </div>
            {/* Ordinal */}
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', opacity: 0.7, marginBottom: '0.875rem' }}>
              {String(i + 1).padStart(2, '0')} —
            </div>
            {/* Valeur monumentale */}
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
              {stat.value}
            </div>
            {/* Trait + label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '2rem', height: '2px', background: 'var(--color-primary)', flexShrink: 0 }} />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Variant 4: Bento asymétrique — stat vedette + 3 secondaires ───────────────

function V4(props: BlockProps) {
  const { sector, corpusIndex, theme } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 4) : FALLBACK_STATS
  const radius = getBorderRadius(theme)
  const py = getSectionPadding(theme)

  const featured = displayStats[0]
  const rest = displayStats.slice(1, 4)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

        {/* Stat vedette — colonne gauche entière */}
        <div style={{ gridRow: 'span 3', position: 'relative', backgroundColor: 'var(--color-primary)', borderRadius: radius, padding: '2.75rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          {/* Filigrane en fond */}
          <div style={{ position: 'absolute', top: '1rem', right: '-0.5rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem, 14vw, 11rem)', fontWeight: 900, color: 'rgba(255,255,255,0.08)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.04em' }}>
            {featured.value}
          </div>
          {/* Contenu */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.875rem' }}>
              — 01
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 0.9, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              {featured.value}
            </div>
            <div style={{ width: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.4)', marginBottom: '0.625rem' }} />
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.45 }}>
              {featured.label}
            </div>
          </div>
        </div>

        {/* Stats secondaires */}
        {rest.map((stat, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: radius, padding: '1.75rem 2rem', border: '1px solid rgba(0,0,0,0.07)' }}>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-primary)', opacity: 0.65, marginBottom: '0.625rem' }}>
              — {String(i + 2).padStart(2, '0')}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.825rem', color: 'var(--color-text-light)', lineHeight: 1.4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function Stats(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    default: return <V1 {...props} />
  }
}
