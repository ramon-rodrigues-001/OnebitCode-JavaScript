const Conta = require("./Conta.js")

class User {
    constructor(nome, email, conta) {
        this.nome = nome
        this.email = email
        this.conta = conta
    }
}


module.exports = User