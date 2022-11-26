class User {
    constructor(fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.password = password
        this.confere = 'Senha e email não confere'
    }

    verificando(email, senha) {
        if (email === this.email && senha === this.password) {
            this.confere = `Seja bem-vindo novamente ${this.fullName}`
        }
    }
}

const usuario = new User('Ramon Rodrigues', 'ramon@gmail.com', 111)
usuario.verificando('ramon@gmail.com', 111)

console.log(usuario)