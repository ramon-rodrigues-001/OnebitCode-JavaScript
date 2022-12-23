class Transfer {
    constructor(userEnvio, userRecebe, valor) {
        this.user_Envio = userEnvio
        this.user_Recebe = userRecebe
        this.valor = valor
        this.data = new Date()
    }
}


module.exports = Transfer