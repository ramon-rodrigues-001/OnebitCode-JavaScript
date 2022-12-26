const Conta = require("./entities/Conta.js")
const User = require("./entities/User.js")

class App {
    #UserList = []

    static verUsuarios() {
        return this.#UserList
    }



    static localitUser(email) { // Encontrar user por email
        const localizar = this.#UserList.forEach(e => e.email === email)
        return localizar
    }

    static registerUser(nome, email, conta) { // registrar user sem repetir email
        if (App.localitUser(email)) {
            throw "Este usuario já existe"
        }
        else {
            const newUser = new User(nome, email, App.chamarConta(nome))
            this.#UserList.push(newUser)
            return newUser
        }
    }


    static chamarConta(user) {
        const conta = new Conta()
        conta.propietario = user
        return conta
    }


    static depositar(valor) {
        App.chamarConta.depositar(valor)
    }
    static emprestimo(valor, parcelas) {
        App.conta.emprestimo(valor, parcelas)
    }
    static transferencia(userEnvio, userRecebe, valor) {
        App.conta.transferencia(userEnvio, userRecebe, valor)
    }
}

const ramon = App.registerUser('Ramon Rodrigues Cordeiro', 'ramon@gmail.com')
const pedrao = App.registerUser('Pedrão Chefe', 'ramon@gmail.com')

ramon.conta.depositar(500)
ramon.conta.depositar(1300)

ramon.conta.emprestimo(5000.50, 12)

ramon.conta.transferencia(ramon.conta, pedrao.conta, 1000)

console.log(ramon, ramon.conta.getConta(), pedrao, pedrao.conta.getConta())



module.exports = App