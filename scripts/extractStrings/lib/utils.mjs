import fs from 'fs'
import path from 'path'

export function makeKey(text) {
  const words = text
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim()
    .split(/\s+/)
    .slice(0, 4)
    .map(w => w.toLowerCase())
  return words.join('_') || 'key'
}

export function componentNameFromPath(filepath) {
  const base = path.basename(filepath)
  const name = base.replace(/\.tsx?$/i, '')
  const cleaned = name.toLowerCase().replace(/page/i, '')
  if (cleaned) return cleaned
  const parent = path.basename(path.dirname(filepath))
  return parent.toLowerCase() || cleaned || 'dictionary'
}

export function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

export function findProjectRoot(startDir) {
  let dir = startDir
  while (true) {
    if (fs.existsSync(path.join(dir, 'package.json'))) return dir
    const parent = path.dirname(dir)
    if (parent === dir) return process.cwd()
    dir = parent
  }
}
