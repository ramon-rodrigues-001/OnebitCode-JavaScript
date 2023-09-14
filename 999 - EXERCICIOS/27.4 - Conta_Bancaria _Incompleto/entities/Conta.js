const Deposito = require('./Deposito.js')
const Saque = require('./Saque.js')

class Conta {
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.Valor = 0
        this.Deposito = []
        this.Saque = []
        this.Transferencia = []
    }

    fazerDeposito(valor) {
        
    }
}

module.exports = Conta