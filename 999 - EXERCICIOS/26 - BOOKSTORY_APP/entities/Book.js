const Product = require("./Product.js");

class Book extends Product {
    constructor(title, sinopsy, genero, pages, author, description, price, inStock) {
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.sinopsy = sinopsy
        this.genero = genero
        this.pages = pages
        this.author = author
    }
}

module.exports = Book