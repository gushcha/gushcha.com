/**
 * REACT SERVER COMPONENT ONLY
 * extractStrings
 * Extracts plain text from a TSX component into a dictionary and replaces occurrences with t(key).
 *
 * Usage (yarn):
 *   yarn extract-strings -- <component.tsx> [dictionaryFilename.en.js]
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { makeKey, componentNameFromPath, ensureDir, findProjectRoot } from './lib/utils.mjs'
import { extractTextNodes, replaceTextNodes } from './lib/processor.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function run(args) {
  if (!args || args.length < 1) {
    throw new Error('Usage: extractStrings.js <component.tsx> [dictionaryFilename.en.js]')
  }

  const projectRoot = findProjectRoot(__dirname)
  const inputPath = args[0]
  const compPath = path.isAbsolute(inputPath) ? inputPath : path.resolve(projectRoot, inputPath)
  if (!fs.existsSync(compPath)) throw new Error('File not found: ' + compPath)

  const userProvidedDict = args[1]
  const compName = componentNameFromPath(compPath)
  let dictName = userProvidedDict || (compName + '.en.js')
  let dictBaseName = path.basename(dictName)
  let dictKeyBase = dictBaseName.replace(/\.en\.js$/i, '').replace(/[^a-z0-9_]/gi, '')

  if (!dictKeyBase) {
    dictKeyBase = compName || path.basename(path.dirname(compPath)) || 'dictionary'
    dictKeyBase = dictKeyBase.replace(/[^a-z0-9_]/gi, '') || 'dictionary'
    dictBaseName = dictKeyBase + '.en.js'
  }

  const content = fs.readFileSync(compPath, 'utf8')
  const found = extractTextNodes(content)
  const { dict, newContent: replaced } = replaceTextNodes(content, found)
  let newContent = replaced

  // add import
  if (!/from '\/@hooks\/useT\/getT'/.test(newContent) && !/from "\/@hooks\/useT\/getT"/.test(newContent)) {
    const importLine = `import { getT } from '@/hooks/useT/getT'\n`
    const mImports = newContent.match(/(import .*?\n)+/s)
    if (mImports) {
      const insertPos = mImports[0].length
      newContent = newContent.slice(0, insertPos) + importLine + newContent.slice(insertPos)
    } else {
      newContent = importLine + newContent
    }
  }

  // insert init inside async component/function
  const initLine = `const t = await getT('${dictKeyBase}')\n`
  if (!/const t = await getT\(/.test(newContent)) {
    let inserted = false
    const asyncArrow = /async\s*\([^)]*\)\s*=>\s*\{/s
    const asyncFunc = /async\s+function[^\{]*\{/s
    const arrowMatch = newContent.match(asyncArrow)
    if (arrowMatch) {
      const idx = arrowMatch.index + arrowMatch[0].lastIndexOf('{') + 1
      const prefix = '\n  '
      newContent = newContent.slice(0, idx) + prefix + initLine + newContent.slice(idx)
      inserted = true
    } else {
      const funcMatch = newContent.match(asyncFunc)
      if (funcMatch) {
        const idx = funcMatch.index + funcMatch[0].lastIndexOf('{') + 1
        const prefix = '\n  '
        newContent = newContent.slice(0, idx) + prefix + initLine + newContent.slice(idx)
        inserted = true
      }
    }
    if (!inserted) {
      const importsEnd = (() => {
        const m = newContent.match(/(import .*?\n)+/s)
        return m ? m[0].length : 0
      })()
      newContent = newContent.slice(0, importsEnd) + initLine + newContent.slice(importsEnd)
    }
  }

  // write dictionary
  const dictDir = path.resolve(projectRoot, 'dictionaries')
  ensureDir(dictDir)
  let uniqueBase = dictBaseName
  let i = 1
  const dictPathCandidate = path.join(dictDir, uniqueBase)
  let dictPath = dictPathCandidate
  let existingDict = {}
  if (fs.existsSync(dictPathCandidate)) {
    // Read and parse existing dictionary
    try {
      const existingContent = fs.readFileSync(dictPathCandidate, 'utf8')
      // Remove export default and parse as object
      const match = existingContent.match(/export default\s*{([\s\S]*)}/)
      if (match) {
        const objStr = '{' + match[1] + '}'
        existingDict = eval('(' + objStr.replace(/\n/g, '').replace(/\\"/g, '"') + ')')
      }
    } catch (e) {
      console.warn('Could not parse existing dictionary:', e.message)
    }
  } else {
    // If file does not exist, find unique name
    while (fs.existsSync(path.join(dictDir, uniqueBase))) {
      const baseWithoutExt = dictBaseName.replace(/\.en\.js$/i, '')
      uniqueBase = `${baseWithoutExt}_${i}.en.js`
      i++
    }
    dictPath = path.join(dictDir, uniqueBase)
  }
  dictKeyBase = uniqueBase.replace(/\.en\.js$/i, '').replace(/[^a-z0-9_]/gi, '')

  // Merge new keys, avoid duplicates
  const mergedDict = { ...existingDict }
  for (const [k, v] of Object.entries(dict)) {
    if (!(k in mergedDict)) {
      mergedDict[k] = v
    }
  }
  const dictEntries = Object.entries(mergedDict).map(([k, v]) => `  "${k}": "${v.replace(/"/g, '\\"')}"`).join(',\n')
  const dictFileContent = `export default{\n${dictEntries}\n}\n`
  fs.writeFileSync(dictPath, dictFileContent, 'utf8')

  // update dictionaryNames
  try {
    const dictNamesPath = path.join(projectRoot, 'src/constants/dictionaryNames.ts')
    if (fs.existsSync(dictNamesPath)) {
      let dnContent = fs.readFileSync(dictNamesPath, 'utf8')
      const name = dictKeyBase
      const regex = /(export\s+const\s+DICTIONARY_NAMES\s*=\s*\[)([^\]]*)(\]\s*as\s*const)/s
      const m = dnContent.match(regex)
      if (m) {
        const inside = m[2]
        const already = new RegExp("['\"]" + name + "['\"]")
        if (!already.test(inside)) {
          const sep = inside.trim() ? ', ' : ''
          const newInside = inside + sep + `'${name}'`
          dnContent = dnContent.replace(regex, `$1${newInside}$3`)
          fs.writeFileSync(dictNamesPath, dnContent, 'utf8')
          console.log('Updated dictionaryNames.ts with', name)
        }
      }
    }
  } catch (e) {
    console.warn('Could not update dictionaryNames.ts:', e.message)
  }

  fs.writeFileSync(compPath, newContent, 'utf8')

  return { dictPath, compPath }
}
