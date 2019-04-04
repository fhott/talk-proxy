// estado inicial
const myUserState = {
  id: 'inputname',
  name: ''
}

// input change alterando o objeto
const input = document.getElementById(myUserState.id)
input.addEventListener('keyup', e => myUserState.name = e.target.value)

// proxy handler
const inputHandler = {
  set(target, prop, newValue) {
    if (prop == 'name' && target.id) {
      // atualizando propriedade do objeto
      target[prop] = newValue

      // atualizando valor do input
      document.getElementById(target.id).value = newValue
    }
  }
}

// criando o proxy
const myUserProxy = new Proxy(myUserState, inputHandler)

// definindo um nome inicial
myUserProxy.name = 'Maria'

/*
// Exemplo retirado de: https://www.sitepoint.com/es6-proxies/
*/