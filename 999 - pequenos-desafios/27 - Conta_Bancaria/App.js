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
        }
    }



    static chamarConta(Nome_do_usuario) {
        const conta = new Conta(Nome_do_usuario)
        return conta
    }


    static depositar(conta, valor) {
        conta.depositar(valor)
    }
    static emprestimo(conta, valor, parcelas) {
        conta.emprestimo(valor, parcelas)
    }
    static transferencia(conta, userEnvio, userRecebe, valor) {
        conta.transferencia(userEnvio, userRecebe, valor)
    }
}


App.registerUser('Ramon Rodrigues Cordeiro', 'ramon@gmail.com')

App.verUsuarios()




// const conta1 = App.chamarConta("Ramon Rodrigues")

// App.depositar(conta1, 100.45)
// App.depositar(conta1, 57.95)

// App.emprestimo(conta1, 1000, 12)

// App.transferencia(conta1, 'Pedrão', conta1.propietario, 100)
// App.transferencia(conta1, conta1.propietario, 'Zé', 500)


// console.log(conta1)
// console.table(conta1.getConta())
