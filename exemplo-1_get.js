const originalObject = { a: 1, b: 2 }

const handler = {
  get(target, property) {
    if (!target[property]) {
      target[property] = -1
    }

    return target[property]
  }
}

const proxiedObject = new Proxy (originalObject, handler)

console.log (proxiedObject.a) // 1
console.log (proxiedObject.z) // -1