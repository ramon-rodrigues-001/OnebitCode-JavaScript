
class Product {
    constructor(name, descrition, price) {
        this.name = name
        this.descrition = descrition
        this.price = price
        this.inStock = 0
    }

    addStock(unided) {
        this.inStock += unided
    }

    back_fliday(desconto) {
        let porcentagem = this.price / 100 * desconto
        this.price = 'R$' + (this.price - porcentagem).toFixed(2)
    }
}

const livro = new Product('Exiled', 'Um livro de RPG e fantasia com diversas historias entre tais bla bla bla', 14)

livro.addStock(120)

livro.back_fliday(50)

console.log(livro)