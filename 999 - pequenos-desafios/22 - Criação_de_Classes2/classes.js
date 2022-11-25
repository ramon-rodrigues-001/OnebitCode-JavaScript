const verificando = require('./verificar.js')

let listaDeUsuarios = []

function User(fullName, email, password) {
    
    this.fullName = fullName
    this.email = email
    this.password = password

    this.verificando = verificando(this.fullName, this.email, this.password, listaDeUsuarios)
}


new User('Ramon', 'ramon.developer@gmail', 111)
new User('Davi', 'davi.veterinario@gmail', 134)