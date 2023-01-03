class Livro{
    constructor(title, descrição, preco, EmEstoque = 0, genero, paginas, autor) {
        this.title = title
        this.descrição = descrição
        this.preco = preco
        this.EmEstoque = EmEstoque
        this.genero = genero
        this.paginas = paginas
        this.autor = autor
    }

    addEstoque(quantidade) {
        this.EmEstoque += quantidade
    }

    removerEstoque(quantidade) {
        this.EmEstoque -= quantidade
    }
}


module.exports = Livro