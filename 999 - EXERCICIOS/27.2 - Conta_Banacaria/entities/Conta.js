const Deposito = require('./Deposito.js')
const Tranfer = require('./Transfer.js')
const User = require('./User.js')

class Conta {
    constructor (nome, email) {
        this.Valor = 0
        // this.User = new User(nome, email)
        this.Nome = nome,
        this.Email = email,
        this.Tranferencias = [],
        this.Depositos = [],
        this.Parselas = [] 
    }

    // NÂO poder ficar devendo
    fazerTranferencias (valor, destinatorio) {
        this.Valor >= valor ? 
            this.Tranferencias.push(
                new Tranfer(valor, this.Email, destinatorio)
            )
        :console.log('Remetente não possue este valor em sua carteira')
    }

    fazerDepositos (valor) {
        if (valor > 0) {
            this.Depositos.push(new Deposito(valor))
            this.Valor += valor
        }
        else {
            console.log('Insira um valor acima de R$0,00 para deposito')
        }
    }

    // PODE ficar devendo / Sai parselas divididas
    fazerParselas (valor, parselas) {

    }
}

module.exports = Conta