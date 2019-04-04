const originalObject = { firstName: 'Arfat', lastName: 'Salman' }

const handler = {
  get(target, property) {
    console.log(`GET ${property}`);
    if (property in target) {
      return target[property];
    }
    return 'Oops! This property does not exist.';
  }
}

const proxiedObject = new Proxy (originalObject, handler)

console.log (proxiedObject.firstName)
// GET firstName
// Arfat

console.log (proxiedObject.nickName)
// GET nickName
// Oops! This property does not exist.