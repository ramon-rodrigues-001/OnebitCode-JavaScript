const Autor = require("./entities/Autor.js")
const Livro = require("./entities/Livro.js")
const Vendas = require("./entities/Vendas.js")
const Usuario = require("./entities/Usuario.js")


class BaseDeDados {
    #storage = {
        autores: [],
        livros: [],
        vendas: [],
        usuarios: []
    }

    find(key) {
        return this.#storage[key]
    }

    
    

    criarAutor(nome, descrição, endereço) {
        let autor = new Autor(nome, descrição, endereço)
        let verificar = this.#storage.autores.forEach(e => {
        })

        if (verificar) {
            this.#storage.autores.push(autor)
        }
    }
    mostrarAutores() {
        return this.#storage.autores
    }



    ifLivroExiste(livro) {
        return this.#storage.livros.find(b => b.title === livro.title)
    }

    criarLivro(title, descrição, preco, EmEstoque = 0, genero, paginas, autor) {
        let livro = new Livro(title, descrição, preco, EmEstoque = 0, genero, paginas, autor)
        let verificar = this.ifLivroExiste(livro)

        if (!verificar) {
            this.#storage.livros.push(livro)
        }
    }
    mostrarLivros() {
        return this.#storage.livros
    }
}


module.exports = BaseDeDados