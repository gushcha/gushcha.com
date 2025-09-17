#!/usr/bin/env node

/**
 * CLI wrapper for extractStrings/index.mjs
 */

import { run } from './index.mjs'

const args = process.argv.slice(2)

run(args)
  .then(({ dictPath, compPath }) => {
    console.log('Wrote dictionary to', dictPath)
    console.log('Updated component', compPath)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
