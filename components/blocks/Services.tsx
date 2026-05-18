import { LucideIcons } from './icons'
import { substitute } from '@/lib/engine/substitutor'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius, getSectionPadding, getCardPadding } from './utils'

type LucideIcon = React.ComponentType<{ size?: number; style?: React.CSSProperties }>
function Icon({ name, size = 24, style }: { name: string; size?: number; style?: React.CSSProperties }) {
  const Comp = ((LucideIcons as unknown) as Record<string, LucideIcon>)[name]
  if (!Comp) return <LucideIcons.Star size={size} style={style} />
  return <Comp size={size} style={style} />
}

const FALLBACK_SERVICES: [string, string, string] = ['Notre expertise', 'Solutions sur mesure', 'Accompagnement complet']
const SECTION_TITLE = 'Nos prestations'
const SECTION_SUBTITLE = 'Des services pensés pour répondre à vos besoins à {{city}}'

// ── Variant 1: Cartes numérotées — ordinal en filigrane + bordure accent gauche ─

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
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            {substitute(SECTION_SUBTITLE, prospect)}
          </h2>
        </div>

        {/* Grille de cartes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {services.map((name, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: radius, padding: '2rem', boxShadow: shadow, border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden', borderLeft: '3px solid var(--color-primary)' }}>
              <div>
                {/* Icône */}
                <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Icon name={icons[i] ?? 'Star'} size={18} style={{ color: 'white' }} />
                </div>
                {/* Titre */}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.875rem', lineHeight: 1.3 }}>
                  {name}
                </h3>
                {/* Séparateur */}
                <div style={{ width: '1.5rem', height: '1px', background: 'var(--color-primary)', opacity: 0.3, marginBottom: '0.875rem' }} />
                {/* Description */}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.65 }}>
                  Service professionnel à {prospect.city}. Contactez {prospect.company} pour en savoir plus.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: Timeline numérotée — axe vertical + vitrine horizontale ─────────

function V2(props: BlockProps) {
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
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* En-tête aligné gauche */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, maxWidth: '38rem' }}>
            {substitute(SECTION_SUBTITLE, prospect)}
          </h2>
        </div>

        {/* Items timeline */}
        <div style={{ position: 'relative' }}>
          {/* Axe vertical */}
          <div style={{ position: 'absolute', left: '1.625rem', top: '1.625rem', bottom: '1.625rem', width: '1px', background: 'var(--color-primary)', opacity: 0.15, pointerEvents: 'none' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {services.map((name, i) => (
              <div key={i} style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', padding: '2rem 0', borderBottom: i < services.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                {/* Numéro-nœud */}
                <div style={{ flexShrink: 0, width: '3.25rem', height: '3.25rem', borderRadius: '50%', background: i === 0 ? 'var(--color-primary)' : 'white', border: '1px solid', borderColor: i === 0 ? 'var(--color-primary)' : 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, position: 'relative' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: i === 0 ? 'white' : 'var(--color-primary)', lineHeight: 1 }}>
                    {i + 1}
                  </span>
                </div>

                {/* Contenu */}
                <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: '2rem', height: '2rem', borderRadius: '0.375rem', backgroundColor: 'var(--color-primary)', opacity: 0.85, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={icons[i] ?? 'Star'} size={14} style={{ color: 'white' }} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>
                      {name}
                    </h3>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.7, maxWidth: '42rem' }}>
                    Une expertise reconnue à {prospect.city}. {prospect.company} vous propose un accompagnement personnalisé pour répondre à vos besoins spécifiques.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Variant 3: Magazine — service vedette pleine largeur + 2 secondaires ────────

function V3(props: BlockProps) {
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
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* En-tête */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
              {SECTION_TITLE}
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, maxWidth: '38rem' }}>
              {substitute(SECTION_SUBTITLE, prospect)}
            </h2>
          </div>
        </div>

        {/* Carte vedette — pleine largeur */}
        <div style={{ backgroundColor: 'var(--color-primary)', borderRadius: radius, padding: '3.5rem', overflow: 'hidden', marginBottom: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ width: '4rem', height: '4rem', borderRadius: '0.875rem', border: '1.5px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={icons[0] ?? 'Star'} size={26} style={{ color: 'white' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.5rem' }}>
                Service principal
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                {services[0]}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: '38rem' }}>
                Notre cœur de métier à {prospect.city}. {prospect.company} déploie toute son expertise sur ce service pour vous garantir des résultats à la hauteur de vos attentes.
              </p>
            </div>
          </div>
        </div>

        {/* 2 cartes secondaires */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {services.slice(1).map((name, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: radius, padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden' }}>
              <div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={icons[i + 1] ?? 'Star'} size={16} style={{ color: 'white' }} />
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                  {name}
                </h3>
                <div style={{ width: '1.5rem', height: '1px', background: 'var(--color-primary)', opacity: 0.3, marginBottom: '0.75rem' }} />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.65 }}>
                  Expert en {name.toLowerCase()} à {prospect.city}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 4: Accordion élégant — numéros-pill + typo soignée ─────────────────

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
      <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
        {/* En-tête */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            {substitute(SECTION_SUBTITLE, prospect)}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {services.map((name, i) => (
            <details key={i} style={{ backgroundColor: 'white', borderRadius: radius, boxShadow: shadow, border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden' }}>
              <summary style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.625rem 2rem', cursor: 'pointer', listStyle: 'none', outline: 'none' }}>
                {/* Pill numérotée */}
                <div style={{ flexShrink: 0, width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>
                    {i + 1}
                  </span>
                </div>
                {/* Icône */}
                <div style={{ flexShrink: 0, width: '2.25rem', height: '2.25rem', borderRadius: '0.375rem', backgroundColor: 'var(--color-primary)', opacity: 0.1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={icons[i] ?? 'Star'} size={14} style={{ color: 'var(--color-primary)' }} />
                  </div>
                </div>
                {/* Titre */}
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-text)', flex: 1, lineHeight: 1.3 }}>
                  {name}
                </span>
                {/* Indicateur expand */}
                <span style={{ fontFamily: 'var(--font-accent)', fontSize: '1.375rem', fontWeight: 300, color: 'var(--color-primary)', flexShrink: 0, lineHeight: 1 }}>
                  +
                </span>
              </summary>
              {/* Contenu déplié */}
              <div style={{ padding: '0 2rem 1.75rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ borderLeft: '2px solid var(--color-primary)', paddingLeft: '1.25rem', marginTop: '1.25rem' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.75 }}>
                    {prospect.company} vous propose un service {name.toLowerCase()} de haute qualité à {prospect.city}. Notre équipe d&apos;experts est à votre disposition pour un accompagnement personnalisé.
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 5: Panels pleine-hauteur — contenu enrichi + numéro architectural ──

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

  const panelBgs = [
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-primary)',
  ]

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* En-tête */}
      <div style={{ backgroundColor: 'var(--color-surface)', padding: `${py} 2rem 3rem`, textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
          {SECTION_TITLE}
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
          {substitute(SECTION_SUBTITLE, prospect)}
        </h2>
      </div>

      {/* Panels */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {services.map((name, i) => (
          <div key={i} style={{ padding: '3.5rem 2.75rem 4rem', minHeight: '420px', backgroundColor: panelBgs[i], display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Haut du panel */}
            <div>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', border: '1.5px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Icon name={icons[i] ?? 'Star'} size={22} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
                {name}
              </h3>
            </div>

            {/* Bas du panel — description + trait */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '2rem', height: '1px', background: 'rgba(255,255,255,0.45)', marginBottom: '1rem' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>
                Expert en {name.toLowerCase()} à {prospect.city}. Contactez {prospect.company} pour un devis personnalisé.
              </p>
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
