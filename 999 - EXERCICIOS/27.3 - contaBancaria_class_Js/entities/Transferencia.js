class Transferencia {
    constructor(recebitaculo, valor) {
        this.enviado_para = recebitaculo
        this.valor = '-'+valor
        this.data = new Date
    }
}

module.exports = Transferencia