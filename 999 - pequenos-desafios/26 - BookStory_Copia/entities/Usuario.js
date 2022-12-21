class Usuario {
    #nome
    #email
    #senha

    constructor(nome, email, senha) {
        this.#nome = nome
        this.#email = email
        this.#senha = senha
    }

    lerUsuario() {
        return {
            nome: this.#nome,
            email: this.#email,
            senha: this.#senha
        }
    }
}


module.exports = Usuario