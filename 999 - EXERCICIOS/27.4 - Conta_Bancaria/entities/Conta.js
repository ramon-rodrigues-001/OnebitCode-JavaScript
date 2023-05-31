const Emprestimo = require("./Emprestimo")

class Conta {
    #saldo = 0

    constructor(user) {
        this.Usuario = user
        this.Extrato_Recebimento = []
        this.Extrato_Transferencia = []
        this.Extrato_Emprestimo = []
    }

    
    RealizarTransferencia(userDestinatorio, valor) {

    }

    RealizarEmprestimo(userDestinatorio, valor) {
        try {
            if (valor <= 0) {
                throw new Error("Saldo definido não é permitido favor insira valores acima de R$0,01")
            }
            else {
                this.Extrato_Emprestimo.push(new Emprestimo(userDestinatorio, valor))
                this.#saldo += valor
            }
        }
        catch (error) {
            console.log("Ocorreu um erro: " + error.message)
        }
    }
}

module.exports = Conta