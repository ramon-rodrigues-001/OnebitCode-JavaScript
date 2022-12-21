const Database = require('./Database.js')
const Author = require('./entities/Author.js')
const Book = require('./entities/Book.js')
const Order = require('./entities/Order.js')
const Poster = require('./entities/Poster.js')
const User = require('./entities/User.js')


class App {
    static #database = new Database()

    createUser (nome, email, password) {
        const user = new User(nome, email, password)
        App.#database.saveUser(user)
    }
    getUsers() {
        return App.#database.find('users')
    }


    createAuthor(name, nasonality, description) {
        const author = new Author(name, nasonality, description)
        App.#database.saveAuthor(author)
    }
    getAuthor() {
        return App.#database.find('authores')
    }


    createBook(title, sinopsy, genero, pages, author, description, price, inStock) {
        const book = new Book(title, sinopsy, genero, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }
    addBook(bookName, quantity) {
        App.#database.addBookToStock(bookName, quantity)
    }
    getBook() {
        return App.#database.find('books')
    }


    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }
    addPoster(PosterName, quantity) {
        App.#database.addPosterToStock(PosterName, quantity)
    }


    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.dados.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBookToStock(product.name, quantity)
            }
            else if (product instanceof Poster) {
                
                App.#database.removePosterToStock(product.name, quantity)
            }
        });
    }
    getOrder() {
        return App.#database.find('orders')
    }


    showDatabase() {
        App.#database.showStorage()
    }
}


module.exports = App