'use client'

import { useState } from 'react'

interface ContactFormProps {
  email?: string
  radius: string
  shadow: string
}

export function ContactForm({ email, radius, shadow }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: radius,
    border: '1.5px solid rgba(0,0,0,0.12)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--color-text)',
    backgroundColor: 'white',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const firstName = (data.get('firstName') as string) ?? ''
    const lastName = (data.get('lastName') as string) ?? ''
    const userEmail = (data.get('email') as string) ?? ''
    const phone = (data.get('phone') as string) ?? ''
    const message = (data.get('message') as string) ?? ''

    const body = [
      `Nom: ${`${firstName} ${lastName}`.trim()}`,
      userEmail && `Email: ${userEmail}`,
      phone && `Téléphone: ${phone}`,
      '',
      message,
    ].filter(Boolean).join('\n')

    window.location.href = `mailto:${email ?? ''}?subject=${encodeURIComponent('Contact depuis le site')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', textAlign: 'center', gap: '1rem' }}>
        <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontSize: '1.25rem' }}>✓</span>
        </div>
        <p style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, color: 'var(--color-text)' }}>
          Votre messagerie s&apos;est ouverte
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
          Finalisez l&apos;envoi depuis votre client mail.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          style={{ fontFamily: 'var(--font-accent)', fontSize: '0.875rem', color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Nouveau message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
        <input name="firstName" type="text" placeholder="Prénom" style={inputStyle} />
        <input name="lastName" type="text" placeholder="Nom" style={inputStyle} />
      </div>
      <input name="email" type="email" placeholder="Email" style={inputStyle} />
      <input name="phone" type="tel" placeholder="Téléphone" style={inputStyle} />
      <textarea name="message" placeholder="Votre message…" rows={4} style={{ ...inputStyle, resize: 'none' }} />
      <button
        type="submit"
        style={{ padding: '1rem 1.5rem', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: shadow }}
      >
        Envoyer le message
      </button>
    </form>
  )
}
