class Emprestimo {
    constructor(userDestinatorio, valor) {
        this.Destinatorio = userDestinatorio
        this.Valor = valor
        this.Data = new Date()
    }
}

module.exports = Emprestimo