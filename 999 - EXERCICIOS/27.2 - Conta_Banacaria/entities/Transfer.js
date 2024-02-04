class Transfer {
    constructor (valor, remetente, destinatorio) {
        this.Valor = valor
        this.Remetente = remetente
        this.Destinatário = destinatorio
        this.Data = new Date()
    }
}

module.exports = Transfer