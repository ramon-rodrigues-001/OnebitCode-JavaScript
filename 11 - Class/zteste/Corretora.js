class Corretora {
    #senha
    #saldo = 0

    constructor(email, senha, valorInicial) {
        this.email = email
        this.#senha = senha
        this.#saldo = valorInicial
    }

    addSaldo(valor) {
        this.#saldo += valor
        console.log('Saldo +' + valor)
    }

    removerSaldo(valor) {
        this.#saldo -= valor
        console.log('Saldo -' + valor)
    }

    verSaldo(email, senha) {
        if (email === this.email && senha === this.#senha) {
            return "Valor total na conta:" + ' ' + this.#saldo
        }
        else {
            return "Meu parça... vou chamar a policia!!"
        }
    }
}

module.exports = Corretora