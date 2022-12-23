class Emprest {
    static #juros

    constructor(valor_emprestimo, parcelas) {
        this.valor = valor_emprestimo
        this.parcelas = parcelas
        this.data = new Date()
    }
}


module.exports = Emprest