import { strictEqual } from 'assert'
import { Hook } from '../../index.js'

let hookName, hookBaseDir

Hook(['some-external-module'], (exports, name, baseDir) => {
  hookName = name
  hookBaseDir = baseDir
})

await import('some-external-module-5e7181a616786b24')

strictEqual(hookName, 'some-external-module')
strictEqual(typeof hookBaseDir, 'string')
