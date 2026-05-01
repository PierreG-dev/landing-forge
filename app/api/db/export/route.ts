import path from "path"
import fs from "fs"
import { isAuthorized } from "@/lib/auth"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  if (!await isAuthorized(req)) {
    return new Response("Unauthorized", { status: 401 })
  }

  const dbPath = process.env.DATABASE_URL
    ? process.env.DATABASE_URL.replace(/^file:/, "")
    : path.resolve(process.cwd(), "dev.db")

  const resolvedPath = path.isAbsolute(dbPath) ? dbPath : path.resolve(process.cwd(), dbPath)

  if (!fs.existsSync(resolvedPath)) {
    return new Response("Database file not found", { status: 404 })
  }

  const buffer = fs.readFileSync(resolvedPath)
  const filename = `landing-forge-${new Date().toISOString().slice(0, 10)}.db`

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(buffer.length),
    },
  })
}
