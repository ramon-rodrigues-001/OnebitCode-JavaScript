const Produto = require("./Produto.js")


class Livro extends Produto{
    constructor(title, descrição, preco, EmEstoque = 0, sinopsy, genero, paginas, autor) {
        super(title, descrição, preco, EmEstoque = 0)
        this.sinopsy = sinopsy
        this.genero = genero
        this.paginas = paginas
        this.autor = autor
    }
}


module.exports = Livro