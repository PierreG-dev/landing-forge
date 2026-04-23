import { LucideIcons } from './icons'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius, getSectionPadding } from './utils'
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

// ── Variant 1: Row of 4, primary background, white display numbers ────────────

function V1(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 4) : FALLBACK_STATS.slice(0, 4)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-primary)', padding: '4rem 2rem', overflow: 'hidden' }}>
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
      {/* Decorative blob */}
      <div style={{ position: 'absolute', right: '-8rem', top: '-8rem', width: '30rem', height: '30rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${displayStats.length}, 1fr)`, gap: '2rem' }}>
        {displayStats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Variant 2: Row of 3, icon above, vertical dividers ────────────────────────

function V2(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 3) : FALLBACK_STATS.slice(0, 3)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${displayStats.length}, 1fr)`, gap: 0, position: 'relative' }}>
        {displayStats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '2rem 1.5rem', position: 'relative' }}>
            {/* Vertical divider */}
            {i < displayStats.length - 1 && (
              <div style={{ position: 'absolute', right: 0, top: '20%', bottom: '20%', width: '1px', background: 'var(--color-primary)', opacity: 0.15 }} />
            )}
            <div style={{ width: '3rem', height: '3rem', borderRadius: '0.625rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', opacity: 0.85 }}>
              <Icon name={STAT_ICONS[i] ?? 'Star'} size={18} style={{ color: 'white' }} />
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '0.5rem' }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Variant 3: 2 massive display numbers side by side ─────────────────────────

function V3(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 2) : FALLBACK_STATS.slice(0, 2)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Big background number ghost */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(12rem, 30vw, 24rem)', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.03, lineHeight: 1, pointerEvents: 'none', userSelect: 'none', whiteSpace: 'nowrap' }}>
        {displayStats[0]?.value}
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
        {displayStats.map((stat, i) => (
          <div key={i} style={{ padding: '3rem 4rem', borderRight: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 0.9, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--color-text)', lineHeight: 1.5, maxWidth: '14rem' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Variant 4: 2×2 card grid — colored icon, number, label ───────────────────

function V4(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const stats = safeGet(sector.corpus.stats, corpusIndex, FALLBACK_STATS)
  const displayStats = stats.length > 0 ? stats.slice(0, 4) : FALLBACK_STATS
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Decorative circle */}
      <div style={{ position: 'absolute', bottom: '-6rem', left: '-6rem', width: '24rem', height: '24rem', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
        {displayStats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: 'white', borderRadius: radius, padding: '2rem', boxShadow: shadow, border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
            <div style={{ flex: '0 0 auto', width: '3rem', height: '3rem', borderRadius: '0.5rem', background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={STAT_ICONS[i] ?? 'Star'} size={18} style={{ color: 'white' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '0.375rem' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.4 }}>
                {stat.label}
              </div>
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
