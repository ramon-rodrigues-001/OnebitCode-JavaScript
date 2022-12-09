class System {
    #password
    #saldo
    #conta = []

    constructor(email, password, saldo) {
        this.email = email
        this.#password = password
        this.#saldo = saldo
    }


    addSaldo(valor) {
        this.#saldo += valor
    }
    removeSaldo(valor) {
        this.#saldo -= valor
    }


    loginUser(email, senha) {
        if (email === this.email && senha === this.#password) {
            return this.#saldo
        }
        else {
            return "Esta conta não existe"
        }
    }
}


module.exports =System