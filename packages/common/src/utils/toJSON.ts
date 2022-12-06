declare global {
  interface Object {
    toJSON(): string
  }
}

// eslint-disable-next-line no-extend-native
Object.prototype.toJSON = function () {
  return JSON.stringify(this)
}

export {}
