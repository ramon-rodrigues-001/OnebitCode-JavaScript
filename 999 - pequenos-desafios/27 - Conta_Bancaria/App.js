const Conta = require("./entities/Conta.js")
const User = require("./entities/User.js")

class App {
    static #UserList = []

    static verUsuarios() {
        return App.#UserList
    }



    static localitUser(email) { // Encontrar user por email
        const localizar = App.#UserList.forEach(e => e.email === email)
        return localizar
    }

    static registerUser(nome, email, conta) { // registrar user sem repetir email
        if (App.localitUser(email)) {
            throw "Este usuario já existe"
        }
        else {
            const newUser = new User(nome, email, App.chamarConta(nome))
            App.#UserList.push(newUser)
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

ramon.conta.transferencia(ramon.conta.propietario, pedrao.conta.propietario, 1000)

console.log(ramon, ramon.conta.getConta(), pedrao, pedrao.conta.getConta())




// const conta1 = App.chamarConta("Ramon Rodrigues")

// App.depositar(conta1, 100.45)
// App.depositar(conta1, 57.95)

// App.emprestimo(conta1, 1000, 12)

// App.transferencia(conta1, 'Pedrão', conta1.propietario, 100)
// App.transferencia(conta1, conta1.propietario, 'Zé', 500)


// console.log(conta1)
// console.table(conta1.getConta())
