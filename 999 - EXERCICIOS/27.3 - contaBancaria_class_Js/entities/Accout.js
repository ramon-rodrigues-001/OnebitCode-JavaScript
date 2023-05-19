// const User = require('./User.js')
const Transferencia = require('./Transferencia.js')
const Emprestimo = require('./Emprestimo.js')

class Accout {
    #saldo = 0

    constructor(user) {
        this.usuario = user
        this.extrato_recebimento = []
        this.extrato_transferencia = []
        this.extrato_emprestimo = []
    }

    getSaldo() {
        return this.#saldo
    }    
}

module.exports = Accout