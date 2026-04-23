import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LandingForge",
  description: "Générateur de landing pages prospect",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="light">
      <body>{children}</body>
    </html>
  )
}
