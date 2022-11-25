const verificando = require('./verificar.js')


let listaDeUsuarios = []
module.exports = listaDeUsuarios

function User(fullName, email, password) {

    
    this.fullName = fullName
    this.email = email
    this.password = password


    this.verificando = verificando(this.fullName, this.email, this.password, listaDeUsuarios)
}


listaDeUsuarios.push(new User('Ramon', 'ramon.developer@gmail', 111))
listaDeUsuarios.push(new User('Davi', 'davi.veterinario@gmail', 134))

console.log(listaDeUsuarios)