const Deposit = require("./Deposit.js")
const Emprest = require("./Emprest.js")

class Conta {
    #saldo = 0

    constructor(propietario) {
        this.total_deposit = []
        this.total_emprest = []
        this.total_transfe = []
        this.propietario = propietario
    }


    depositar(valor) {
        const deposito = new Deposit(valor)
        this.#saldo += deposito.valor * 100
        this.total_deposit.push(deposito)
    }

    emprestimo(valor, parcelas) {
        const emprestimo = new Emprest(valor, parcelas)
        this.#saldo += emprestimo.valor * 100
        this.total_emprest.push(emprestimo)
    }

    getConta() {
        return this.#saldo / 100
    }
}

const conta = new Conta()
conta.depositar(100.45)
conta.depositar(57.95)

conta.emprestimo(1000, 12)

console.table(conta.getConta())
console.table(conta.emprestimo)
console.log(conta)