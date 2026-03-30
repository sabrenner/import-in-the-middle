import { execSync } from 'child_process'
import { doesNotThrow } from 'assert'

const env = {
  ...process.env,
  NODE_OPTIONS: '--no-warnings --experimental-loader ./test/fixtures/turbopack-like-loader.mjs --experimental-loader ./test/generic-loader.mjs',
  IITM_TEST_FILE: 'import-mangled-specifier-entry.mjs'
}

doesNotThrow(() => {
  execSync('node ./test/fixtures/import-mangled-specifier-entry.mjs', { env })
})
