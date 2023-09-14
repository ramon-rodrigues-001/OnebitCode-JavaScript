const Conta = require("./Conta.js")

class User {
    constructor(nome, email, senha, conta) {
        this.nome = nome
        this.email = email
        this.conta = new Conta(this.User)
    }
}

module.exports = User