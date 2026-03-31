// Simulates Turbopack's behavior of resolving synthetic external specifiers
// of the form "{packageName}-{hash}" to the real underlying package.

export async function resolve (specifier, context, nextResolve) {
  const lastDash = specifier.lastIndexOf('-')
  if (lastDash > 0) {
    try {
      return await nextResolve(specifier.slice(0, lastDash), context)
    } catch (_) {}
  }
  return nextResolve(specifier, context)
}
