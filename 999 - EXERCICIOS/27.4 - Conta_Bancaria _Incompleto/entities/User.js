const Conta = require("./Conta.js")

class User {
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.conta = Conta(nome, email, senha)
    }
}

module.exports = User