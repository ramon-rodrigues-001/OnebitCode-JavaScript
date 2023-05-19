class User {
    #confirm = 'Email ou senha não confere'
    
    constructor(name, email, senha) {
        this.name = name
        this.email = email
        this.senha = senha
    }

    conferir(email, senha) {
        if (email === this.email && senha === this.senha) {
            this.#confirm = "Welcome " + this.name
        }
        
        return this.#confirm
    }
}


const play1 = new User('Ramon', 'ramon@gmail.com', 123)
console.log(play1.conferir('ramon@gmail.com', 123))
