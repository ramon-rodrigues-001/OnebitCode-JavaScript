class Address {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }

    fullAddress() {
        return `Rua: ${this.rua}, n°: ${this.numero}, Cidade: ${this.cidade}, Estado: ${this.estado}`
    }
}

module.exports = Address