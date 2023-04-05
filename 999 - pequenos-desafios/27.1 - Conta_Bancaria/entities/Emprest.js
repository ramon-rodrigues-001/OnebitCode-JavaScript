const Parcelas = require("./Parcelar.js")

class Emprest {
    static #juros = 1.5

    static set alterarJuros(newFee) {
        Emprest.#juros = 1 + (newFee / 100)
    }
    static get novaTaxa() {
        Emprest.#juros
    }

    constructor(valor_emprestimo, parcelas) {
        this.valor = valor_emprestimo
        this.parcelas = []
        for (let i = 0; i <= parcelas; i++) {
            this.parcelas.push(new Parcelas((valor_emprestimo * Emprest.novaTaxa) / i))
        }
        this.data = new Date()
    }
}


module.exports = Emprest