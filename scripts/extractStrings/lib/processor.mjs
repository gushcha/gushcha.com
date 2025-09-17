import { makeKey } from './utils.mjs'

export function extractTextNodes(content) {
  const stringRegex = />([^<{]+?)</gs
  const found = [...content.matchAll(stringRegex)]
  return found
}

export function replaceTextNodes(content, found) {
  const dict = {}
  const textToKey = {}
  let newContent = content

  const hasTwoLetters = (s) => {
    const letters = s.match(/\p{L}/gu)
    return letters && letters.length >= 2
  }

  for (let i = found.length - 1; i >= 0; i--) {
    const m = found[i]
    const raw = m[1]
    const text = raw.replace(/\s+/g, ' ').trim()
    if (!text) continue
    if (/^</.test(text) || /[{}]/.test(text)) continue
    // Skip if it doesn't contain at least two letters (ignore emojis, signs, single letters, numbers)
    if (!hasTwoLetters(text)) continue

    // Reuse key for identical text; only create a new key if this text hasn't been seen
    let uniqueKey = textToKey[text]
    if (!uniqueKey) {
      const baseKey = makeKey(text)
      uniqueKey = baseKey
      let counter = 1
      // Ensure uniqueness only when another different text already claimed the same base key
      while (dict[uniqueKey] && dict[uniqueKey] !== text) {
        uniqueKey = `${baseKey}_${++counter}`
      }
      dict[uniqueKey] = text
      textToKey[text] = uniqueKey
    }

    const start = m.index
    const matchText = m[0]
    const replaced = matchText.replace(raw, `{t('${uniqueKey}')}`)
    newContent = newContent.slice(0, start) + replaced + newContent.slice(start + matchText.length)
  }
  return { dict, newContent }
}
