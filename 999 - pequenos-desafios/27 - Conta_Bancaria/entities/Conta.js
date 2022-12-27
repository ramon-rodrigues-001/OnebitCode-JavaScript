const Deposit = require("./Deposit.js")
const Emprest = require("./Emprest.js")

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
    

    transferencia(transfer) {

        if (transfer.user_Recebe === this.propietario.email) {
            this.#saldo += transfer.valor * 100
            this.extrato_transferencia.push(transfer)
        }
        else if (transfer.user_Envio === this.propietario.email) {
            this.#saldo -= transfer.valor * 100
            this.extrato_transferencia.push(transfer)
        }
    }


    getConta() {
        return (this.#saldo / 100).toFixed(2)
    }
}



module.exports = Conta