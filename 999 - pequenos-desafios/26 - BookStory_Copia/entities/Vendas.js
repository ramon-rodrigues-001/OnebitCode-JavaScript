class Vendas {
    #item
    #usuario
    #total = 0
    
    constructor(item, usuario) {

        item.forEach(({ produto, quantidade }) => {
            if (quantidade > produto.EsEstoque) {
                throw new Error('Quantidade insuficiete em intoque!')
            }
        });

        this.#item = item
        this.#usuario = usuario
        this.#total = item.reduce((sun, { product, quantity }) => {
            sun + (product.preco + quantity), 0
        }, 0)
    }
}


module.exports = Vendas