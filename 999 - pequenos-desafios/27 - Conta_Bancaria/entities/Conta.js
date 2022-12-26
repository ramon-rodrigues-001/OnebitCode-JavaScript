const Deposit = require("./Deposit.js")
const Emprest = require("./Emprest.js")
const Transfer = require("./Transfer.js")

class Conta {
    #saldo = 0

    constructor(propietario) {
        this.propietario = propietario
        this.extrato_deposito = []
        this.extrato_emprestimo = []
        this.extrato_transferencia = []
    }


    depositar(valor) {
        const deposito = new Deposit(valor)
        this.#saldo += deposito.valor * 100
        this.extrato_deposito.push(deposito)
    }

    emprestimo(valor, parcelas) {
        const emprestimo = new Emprest(valor, parcelas)
        this.#saldo += emprestimo.valor * 100
        this.extrato_emprestimo.push(emprestimo)
    }
    

    transferencia(userEnvio, userRecebe, valor) {
        const transferencia = new Transfer(userEnvio, userRecebe, valor)

        if (userEnvio && userRecebe.email === this.propietario) {
            this.#saldo += transferencia.valor * 100
        }
        else {
            this.#saldo -= transferencia.valor * 100
        }

        this.extrato_transferencia.push(transferencia)
    }


    getConta() {
        return (this.#saldo / 100).toFixed(2)
    }
}



module.exports = Conta