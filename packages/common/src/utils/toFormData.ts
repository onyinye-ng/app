declare global {
  interface Object {
    toFormData(): FormData
  }
}

// eslint-disable-next-line no-extend-native
Object.prototype.toFormData = function () {
  const data = new FormData()
  Object.entries(this).forEach(([key, value]: [string, any]) => {
    data.append(key, value)
  })
  return data
}

export {}
