// Simulates how Turbopack resolves synthetic external specifiers of the form
// "{packageName}-{hexHash}" (e.g. "ai-5e7181a616786b24") to the real package.

const MANGLED_RE = /^([^/@][^/]*)-([0-9a-f]+)$/

export async function resolve (specifier, context, nextResolve) {
  const match = MANGLED_RE.exec(specifier)
  if (match) {
    return nextResolve(match[1], context)
  }
  return nextResolve(specifier, context)
}
