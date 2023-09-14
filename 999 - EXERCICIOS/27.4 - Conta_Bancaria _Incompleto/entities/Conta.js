const Deposito = require('./Deposito.js')
const Saque = require('./Saque.js')
const User = require('./User.js')

class Conta {
    constructor(nome, email, senha) {
        this.Usuario = new User(nome, email, senha, this.Conta)
        this.Valor = 0
        this.Deposito = []
        this.Saque = []
        this.Transferencia = []
    }

    fazerDeposito(valor) {
        valor === 0 || valor === String ? console.log('erro valor 1') : () => {
            this.Deposito.push(new Deposito(valor))
        }
    }
    
    fazerSaque(valor) {
        valor === 0 || valor === String ? console.log('erro valor 2') : () => {
            this.Saque.push(new Saque(valor))
        }
    }
}

module.exports = Conta