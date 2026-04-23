"use client"

import { useState, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Zap } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const params = useSearchParams()
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    if (password === process.env.NEXT_PUBLIC_APP_PASSWORD) {
      document.cookie = "landingforge_auth=true; path=/; max-age=86400"
      const from = params.get("from") ?? "/"
      router.replace(from)
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">LandingForge</h1>
            <p className="text-sm text-base-content/60">Accès réservé</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <input
                type="password"
                className={`input input-bordered w-full ${error ? "input-error" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                placeholder="••••••••"
              />
              {error && (
                <label className="label">
                  <span className="label-text-alt text-error">Mot de passe incorrect</span>
                </label>
              )}
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full ${loading ? "loading loading-spinner" : ""}`}
              disabled={loading || !password}
            >
              {loading ? "" : "Connexion"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
