class Produto {
    constructor(title, descrição, preco, EmEstoque = 0) {
        this.title = title
        this.descrição = descrição
        this.preco = preco
        this.EmEstoque = EmEstoque
    }

    addEstoque(quantidade) {
        this.EmEstoque += quantidade
    }

    removerEstoque(quantidade) {
        this.EmEstoque -= quantidade
    }
}

module.exports = Produto