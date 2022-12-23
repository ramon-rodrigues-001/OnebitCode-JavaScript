const Deposit = require("./Deposit.js")
const Emprest = require("./Emprest.js")
const Transfer = require("./Transfer.js")

class Conta {
    #saldo = 0

    constructor(propietario) {
        this.propietario = propietario
        this.total_deposit = []
        this.total_emprest = []
        this.total_transfe = []
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

    transferencia(userEnvio, userRecebe, valor) {
        const transferencia = new Transfer(userEnvio, userRecebe, valor)

        if (userEnvio && userRecebe === this.propietario) {
            this.#saldo += transferencia.valor * 100
        }
        else {
            this.#saldo -= transferencia.valor * 100
        }

        this.total_transfe.push(transferencia)
    }


    getConta() {
        return (this.#saldo / 100).toFixed(2)
    }
}



const conta = new Conta("Ramon")

conta.depositar(100.45)
conta.depositar(57.95)

conta.emprestimo(1000, 12)
conta.emprestimo(500, 10)

conta.transferencia('Pedrão', conta.propietario, 100)
conta.transferencia(conta.propietario, 'Zé', 500)


console.log(conta)
console.table(conta.getConta())