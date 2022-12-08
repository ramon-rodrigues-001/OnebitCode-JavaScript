class User {
    #contas = []

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#saldo = user.saldo
    }

    getSaldo(email, senha) {
        if (this.#contas.indexOf(email) && this.#password.indexOf(senha)) {
            return this.#saldo
        }
        else {
            return 'Erro esta conta não existe'
        }
    }

    addUser(email, senha, saldo) {
        this.#contas.push({
            email: this.email,
            senha: this.#password,
            saldo: this.#saldo
        })
    }
}


module.exports = User