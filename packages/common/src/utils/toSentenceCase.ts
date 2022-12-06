declare global {
  interface String {
    toSentenceCase(): string
  }
}

/**
 * Converts a string to sentence case.
 * @returns string
 */
// eslint-disable-next-line no-extend-native
String.prototype.toSentenceCase = function () {
  const s = String(this)
  return s.charAt(0).toUpperCase().concat(s.substring(1))
}

export {}
