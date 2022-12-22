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
        this.#storage.autores.push(autor)
    }
    mostrarAutores() {
        return this.#storage.autores
    }



    ifLivroExiste(livro) {
        return this.#storage.livros.find(b => b.title === livro.title)
    }

    criarLivro(title, descrição, preco, EmEstoque = 0, genero, paginas, autor) {
        let livro = new Livro(title, descrição, preco, EmEstoque, genero, paginas, autor)
        let verificar = this.ifLivroExiste(livro)

        if (!verificar) {
            this.#storage.livros.push(livro)
        }
    }
    mostrarLivros() {
        return this.#storage.livros
    }



    criarUsuario(nome, email, senha) {
        let user = new Usuario(nome, email, senha).lerUsuario()
        const userExist = this.#storage.usuarios.find(u => u.email === user.email)

        if (!userExist) {
            this.#storage.usuarios.push(user)
        }
    }
    mostrarUsuarios() {
        return this.#storage.usuarios
    }


    salvarVendas(itens, user) {
        const order = new Vendas(itens, user)
        this.#storage.push(order)
        order.dados.itens.forEach(({ product, quantity }) => {
            if (product instanceof Livro) {
                this.vendas.removeBookToStock(product.name, quantity)
            }
        });
    }


    showStorage() {
        console.table(this.#storage.autores)
        console.table(this.#storage.livros)
        console.table(this.#storage.usuarios)
        console.table(this.#storage.vendas.map(objeto => objeto.dados))
    }
}


module.exports = BaseDeDados