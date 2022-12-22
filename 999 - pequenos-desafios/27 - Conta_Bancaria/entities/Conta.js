const Deposit = require("./Deposit")

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

    getConta() {
        return this.#saldo / 100
    }
}

const conta = new Conta()
conta.depositar(100.45)
conta.depositar(57.95)

console.table(conta.getConta())
console.log(conta)