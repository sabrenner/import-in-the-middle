'use strict'

const iitmPath = process.env.IITM_PATH
if (iitmPath) {
  const Hook = require(iitmPath)
  Hook(['camelcase'], () => {
    process.stdout.write('IITM_HOOK_TRIGGERED:camelcase\n')
  })
}
