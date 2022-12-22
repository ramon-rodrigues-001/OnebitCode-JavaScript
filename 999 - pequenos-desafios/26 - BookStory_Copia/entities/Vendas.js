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
        this.#total = item.reduce((sun, { product, quantity }) => {
            sun + (product.preco + quantity), 0
        }, 0)
    }


    letVenda() {
        return {
            item: this.#item,
            user: this.#usuario,
            total: this.#total
        }
    }
}


module.exports = Vendas