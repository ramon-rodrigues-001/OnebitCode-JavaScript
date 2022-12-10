// Exemplo 1
class Book {
    constructor(title) {
        this.title = title
        this.puplished = false
    }

    puplic() {
        this.puplished = true
    }
}
const livro1 = new Book('Exiled')
livro1.puplic()

console.log(livro1)


// Exemplo 2

class Online {
    constructor(nome) {
        this.nome = nome
        this.ativo = false
    }

    On() {
        this.ativo = true
    }
}
const pessoa1 = new Online('Ramon')
pessoa1.On()

console.log(pessoa1)