import { LucideIcons } from './icons'
import { substitute } from '@/lib/engine/substitutor'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius, getSectionPadding, getCardPadding } from './utils'

type LucideIcon = React.ComponentType<{ size?: number; style?: React.CSSProperties }>
function Icon({ name, size = 24, style }: { name: string; size?: number; style?: React.CSSProperties }) {
  const Comp = ((LucideIcons as unknown) as Record<string, LucideIcon>)[name]
  if (!Comp) return <LucideIcons.CheckCircle size={size} style={style} />
  return <Comp size={size} style={style} />
}

const FALLBACK_SERVICES: [string, string, string] = ['Notre expertise', 'Solutions sur mesure', 'Accompagnement complet']
const SECTION_TITLE = 'Nos prestations'
const SECTION_SUBTITLE = 'Des services pensés pour répondre à vos besoins à {{city}}'

// ── Variant 1: 3 cards horizontal — icon + title + desc ──────────────────────

function V1(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const raw = safeGet(sector.corpus.services, corpusIndex, FALLBACK_SERVICES)
  const services = [
    prospect.service1 ?? raw[0],
    prospect.service2 ?? raw[1],
    prospect.service3 ?? raw[2],
  ]
  const icons = sector.icons.length >= 3 ? sector.icons : ['Sparkles', 'Star', 'CheckCircle']
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const cardPad = getCardPadding(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '-8rem', right: '-8rem', width: '28rem', height: '28rem', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            {substitute(SECTION_SUBTITLE, prospect)}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
          {services.map((name, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: radius, padding: cardPad, boxShadow: shadow, border: '1px solid rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden', transition: 'transform 0.2s ease' }}>
              {/* Accent top bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(to right, var(--color-primary), var(--color-secondary))` }} />
              <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.625rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', opacity: 0.9 }}>
                <Icon name={icons[i] ?? 'Star'} size={20} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                {name}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.65 }}>
                Service professionnel à {prospect.city}. Contactez {prospect.company} pour en savoir plus.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: Vertical list — large icon left, title + desc right ────────────

function V2(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const raw = safeGet(sector.corpus.services, corpusIndex, FALLBACK_SERVICES)
  const services = [
    prospect.service1 ?? raw[0],
    prospect.service2 ?? raw[1],
    prospect.service3 ?? raw[2],
  ]
  const icons = sector.icons.length >= 3 ? sector.icons : ['Sparkles', 'Star', 'CheckCircle']
  const radius = getBorderRadius(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Vertical accent line */}
      <div style={{ position: 'absolute', left: 'calc(50% - 36rem + 3.5rem)', top: 0, bottom: 0, width: '1px', background: 'var(--color-primary)', opacity: 0.1, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, maxWidth: '36rem' }}>
            {substitute(SECTION_SUBTITLE, prospect)}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {services.map((name, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem', borderRadius: radius, backgroundColor: i % 2 === 0 ? 'white' : 'transparent', border: i % 2 === 0 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
              <div style={{ flex: '0 0 auto', width: '4.5rem', height: '4.5rem', borderRadius: '50%', background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={icons[i] ?? 'Star'} size={26} style={{ color: 'white' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  {name}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                  Une expertise reconnue à {prospect.city}. {prospect.company} vous propose un accompagnement personnalisé pour répondre à vos besoins spécifiques.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 3: 3-col grid, alternating primary/neutral backgrounds ─────────────

function V3(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const raw = safeGet(sector.corpus.services, corpusIndex, FALLBACK_SERVICES)
  const services = [
    prospect.service1 ?? raw[0],
    prospect.service2 ?? raw[1],
    prospect.service3 ?? raw[2],
  ]
  const icons = sector.icons.length >= 3 ? sector.icons : ['Sparkles', 'Star', 'CheckCircle']
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Title band */}
      <div style={{ backgroundColor: 'var(--color-surface)', padding: `${py} 2rem 3rem`, textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
          {SECTION_TITLE}
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
          {substitute(SECTION_SUBTITLE, prospect)}
        </h2>
      </div>

      {/* Alternating panels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {services.map((name, i) => {
          const isPrimary = i === 1
          return (
            <div key={i} style={{ position: 'relative', padding: '4rem 2.5rem', backgroundColor: isPrimary ? 'var(--color-primary)' : 'var(--color-surface)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', overflow: 'hidden' }}>
              {/* Decorative circle */}
              <div style={{ position: 'absolute', bottom: '-3rem', right: '-3rem', width: '10rem', height: '10rem', borderRadius: '50%', background: isPrimary ? 'rgba(255,255,255,0.06)' : 'var(--color-primary)', opacity: isPrimary ? 1 : 0.05, pointerEvents: 'none' }} />
              <div style={{ width: '4rem', height: '4rem', borderRadius: '0.875rem', backgroundColor: isPrimary ? 'rgba(255,255,255,0.18)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Icon name={icons[i] ?? 'Star'} size={24} style={{ color: isPrimary ? 'white' : 'white' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: isPrimary ? 'white' : 'var(--color-text)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                {name}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: isPrimary ? 'rgba(255,255,255,0.8)' : 'var(--color-text-light)', lineHeight: 1.65 }}>
                Expert en {name.toLowerCase()} à {prospect.city}.
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ── Variant 4: Accordion-style cards ──────────────────────────────────────────

function V4(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const raw = safeGet(sector.corpus.services, corpusIndex, FALLBACK_SERVICES)
  const services = [
    prospect.service1 ?? raw[0],
    prospect.service2 ?? raw[1],
    prospect.service3 ?? raw[2],
  ]
  const icons = sector.icons.length >= 3 ? sector.icons : ['Sparkles', 'Star', 'CheckCircle']
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', right: '-6rem', transform: 'translateY(-50%)', width: '20rem', height: '20rem', borderRadius: '50%', background: 'var(--color-secondary)', opacity: 0.05, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            {substitute(SECTION_SUBTITLE, prospect)}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {services.map((name, i) => (
            <details key={i} style={{ backgroundColor: 'white', borderRadius: radius, boxShadow: shadow, border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <summary style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem 2rem', cursor: 'pointer', listStyle: 'none', outline: 'none' }}>
                <div style={{ flex: '0 0 auto', width: '2.75rem', height: '2.75rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={icons[i] ?? 'Star'} size={18} style={{ color: 'white' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text)', flex: 1 }}>
                  {name}
                </span>
                <span style={{ fontFamily: 'var(--font-accent)', fontSize: '1.25rem', color: 'var(--color-primary)', flex: '0 0 auto' }}>+</span>
              </summary>
              <div style={{ padding: '0 2rem 1.5rem 5.25rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.7, paddingTop: '1.25rem' }}>
                  {prospect.company} vous propose un service {name.toLowerCase()} de haute qualité à {prospect.city}. Notre équipe d&apos;experts est à votre disposition pour un accompagnement personnalisé.
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 5: 3 full-height blocks, gradient overlay, centered text ──────────

function V5(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const raw = safeGet(sector.corpus.services, corpusIndex, FALLBACK_SERVICES)
  const services = [
    prospect.service1 ?? raw[0],
    prospect.service2 ?? raw[1],
    prospect.service3 ?? raw[2],
  ]
  const icons = sector.icons.length >= 3 ? sector.icons : ['Sparkles', 'Star', 'CheckCircle']
  const py = getSectionPadding(theme)

  const gradients = [
    'linear-gradient(160deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
    'linear-gradient(160deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
    'linear-gradient(160deg, var(--color-primary) 30%, var(--color-secondary) 100%)',
  ]

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Section header */}
      <div style={{ backgroundColor: 'var(--color-surface)', padding: `${py} 2rem 3rem`, textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
          {SECTION_TITLE}
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
          {substitute(SECTION_SUBTITLE, prospect)}
        </h2>
      </div>

      {/* Full-height panels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {services.map((name, i) => (
          <div key={i} style={{ position: 'relative', padding: '5rem 2.5rem', minHeight: '360px', background: gradients[i], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-4rem', left: '-4rem', width: '14rem', height: '14rem', borderRadius: '50%', background: 'rgba(0,0,0,0.08)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-5rem', right: '-4rem', width: '18rem', height: '18rem', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Icon name={icons[i] ?? 'Star'} size={28} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
                {name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function Services(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    case 5: return <V5 {...props} />
    default: return <V1 {...props} />
  }
}
