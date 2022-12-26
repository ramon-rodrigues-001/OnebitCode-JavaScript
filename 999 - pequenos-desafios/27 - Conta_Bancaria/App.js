const Conta = require("./entities/Conta.js")
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
            const newUser = new User(nome, email, App.chamarConta(nome))
            App.#UserList.push(newUser)
            return newUser
        }
        else {
            throw "Já existe um usuario com este email"
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


module.exports = App

