const { format } = require('date-fns');

class Saque {
    constructor(valor) {
        this.valor = valor
        this.data = formatData()
    }

    formatData() {
        const newData = new Date()
        console.log(format(newData, "dd/MM/yyyy HH:mm:ss"))
        return format(newData, "dd/MM/yyyy HH:mm:ss")
    }
} 

module.exports = Saque