import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PROTECTED = ["/", "/new"]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtected = PROTECTED.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  )

  if (!isProtected) return NextResponse.next()

  const auth = request.cookies.get("landingforge_auth")
  if (auth?.value === "true") return NextResponse.next()

  const loginUrl = new URL("/login", request.url)
  loginUrl.searchParams.set("from", pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login|api/render|preview).*)"],
}
