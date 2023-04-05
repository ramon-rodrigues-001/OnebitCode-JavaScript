class Recebimento {
    constructor(envio, valor) {
        this.enviado_por = envio
        this.valor = valor
        this.data = new Date()
    }
}

module.exports = Recebimento