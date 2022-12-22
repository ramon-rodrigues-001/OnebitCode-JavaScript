class Emprest {
    static #juros

    constructor(valor_emprestimo, parcelas) {
        this.valor_emprestimo = valor_emprestimo
        this.parcelas = parcelas
        this.data = new Date().getFullYear()
    }
}


module.exports = Emprest