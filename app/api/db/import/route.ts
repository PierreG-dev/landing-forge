import path from "path"
import fs from "fs"
import { isAuthorized } from "@/lib/auth"
import { NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"

const SQLITE_MAGIC = Buffer.from("SQLite format 3\0")
const MAX_SIZE_BYTES = 100 * 1024 * 1024 // 100 MB

function getDbPath(): string {
  const url = process.env.DATABASE_URL ?? `file:${path.resolve(process.cwd(), "dev.db")}`
  const dbPath = url.replace(/^file:/, "")
  return path.isAbsolute(dbPath) ? dbPath : path.resolve(process.cwd(), dbPath)
}

export async function POST(req: NextRequest) {
  if (!await isAuthorized(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const formData = await req.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return Response.json({ error: "Aucun fichier fourni" }, { status: 400 })
  }

  if (file.size > MAX_SIZE_BYTES) {
    return Response.json({ error: "Fichier trop volumineux (max 100 MB)" }, { status: 413 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())

  if (buffer.length < 16 || !buffer.subarray(0, 16).equals(SQLITE_MAGIC)) {
    return Response.json({ error: "Le fichier n'est pas une base SQLite valide" }, { status: 400 })
  }

  const dbPath = getDbPath()

  try {
    await prisma.$disconnect()
    fs.writeFileSync(dbPath, buffer)
    return Response.json({ ok: true, message: "Base importée avec succès. Redémarrez le serveur pour appliquer les changements." })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return Response.json({ error: `Échec de l'écriture : ${message}` }, { status: 500 })
  }
}
