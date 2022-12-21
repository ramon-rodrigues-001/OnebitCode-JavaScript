class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.forEach(({ product, quantity }) => {
            if (product > product.inStock) {
                throw new Error('Quantidade insuficiete em intoque!')
            }
        })
            
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sun, { product, quantity }) => sun + (product.price + quantity), 0)
    }

    get dados() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}


module.exports = Order