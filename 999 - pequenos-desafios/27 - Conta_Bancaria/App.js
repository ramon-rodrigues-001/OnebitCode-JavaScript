const Conta = require("./entities/Conta.js")
const Transfer = require("./entities/Transfer.js")
const User = require("./entities/User.js")

class App {
    static #UserList = []

    static verUsuarios() {
        return App.#UserList
    }



    static localitUser(email) { // Encontrar user por email
        const localizar = App.#UserList.find(user => user.email === email)
        return localizar ?? null
    }

    static registerUser(nome, email) { // registrar user sem repetir email
        const userExiste = App.localitUser(email)
        if (!userExiste) {
            const newUser = new User(nome, email, App.chamarConta(email))
            App.#UserList.push(newUser)
            return newUser
        }
        else {
            throw "Já existe um usuario com este email"
        }
    }


    static chamarConta(email) {
        const conta = new Conta()
        conta.propietario = email
        return conta
    }


    static depositar(email, valor) {
        const userExiste = localitUser(email)
        if (!userExiste) {
            App.chamarConta.depositar(valor)
        }
    }

    static emprestimo(valor, parcelas) {
        App.conta.emprestimo(valor, parcelas)
    }

    static transferencia(userEnvio, userRecebe, valor) {
        const fromUserExiste = this.localitUser(userEnvio)
        const toUserExiste = this.localitUser(userRecebe)
        if (fromUserExiste && toUserExiste) {
            const newTranfer = new Transfer(userEnvio, userRecebe, valor)
            userEnvio.conta.transferencia(newTranfer)
            userRecebe.conta.transferencia(newTranfer)
        }
        else {
            throw "Um usuario desta tranferencia não existe"
        }
    }
}


module.exports = App

