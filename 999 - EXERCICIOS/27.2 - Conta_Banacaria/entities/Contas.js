const Tranfer = require('./Transfer.js')

class Conta {
    constructor (nome, email) {
        this.Nome = nome,
        this.Email = email,
        this.Tranferencias = [],
        this.Depositos = [],
        this.Parselas = [] 
    }

    // NÂO poder ficar devendo
    fazerTranferencias (valor, destinatorio) {
        this.Tranferencias.push(
            new Tranfer(valor, this.Email, destinatorio)
        )
    }

    fazerDepositos (valor) {

    }

    // PODE ficar devendo / Sai parselas divididas
    fazerParselas (valor, parselas) {

    }
}

module.exports = Conta