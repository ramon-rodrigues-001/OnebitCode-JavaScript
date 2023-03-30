const Deposit = require('./Deposit.js')

class Account {
    #saldo = 0

    constructor(proprietario) {
        this.proprietario = proprietario
        this.extrato_deposito = []
        this.extrato_emprestimo = []
        this.extrato_transferencia = []
    }

    depositar(valor) {
        this.#saldo += valor
        this.extrato_deposito.push(new Deposit(valor))
    }

    get getSaldo() {
        console.log(this.#saldo)
    }
}

module.exports = Account