class Vendas {
    #item
    #usuario
    #total = 0
    
    constructor(item, usuario) {

        item.forEach(({ produto, quantidade }) => {
            if (quantidade > produto.EmEstoque) {
                throw new Error('Quantidade insuficiete em intoque!')
            }
        });

        this.#item = item
        this.#usuario = usuario
        this.#total = item.reduce((sun, { produto, quantidade }) => sun + (produto.preco + quantidade), 0)
    }


    get dados() {
        return {
            itens: this.#item,
            user: this.#usuario,
            total: this.#total
        }
    }
}


module.exports = Vendas