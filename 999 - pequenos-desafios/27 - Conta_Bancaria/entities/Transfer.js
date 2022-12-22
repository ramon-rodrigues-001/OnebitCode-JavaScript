class Transfer {
    constructor(userEnvio, userRecebe, valor, data) {
        this.user_Envio = userEnvio
        this.user_Recebe = userRecebe
        this.valor = valor
        this.data = new Date().getFullYear()
    }
}


module.exports = Transfer