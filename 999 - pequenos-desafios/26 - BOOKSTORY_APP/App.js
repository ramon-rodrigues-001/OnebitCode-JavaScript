const Database = require('./Database.js')
const Author = require('./entities/Author.js')
const Book = require('./entities/Book.js')
const Poster = require('./entities/Poster.js')
const User = require('./entities/User.js')


class App {
    static #database = new Database()

    createUser (nome, email, password) {
        const user = new User(nome, email, password)
        App.#database.saveUser(user)
    }
    getUsers() {
        return App.#database.fild('users')
    }


    createAuthor(name, nasonality, description) {
        const author = new Author(name, nasonality, description)
        App.#database.saveAuthor(author)
    }
    getAuthor() {
        return App.#database.fild('author')
    }


    createBook(title, sinopsy, genero, pages, author, description, price, inStock) {
        const book = new Book(title, sinopsy, genero, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }
    addBook(bookName, quantity) {
        App.#database.addBookToStock(bookName, quantity)
    }


    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }
    addPoster(PosterName, quantity) {
        App.#database.addPosterToStock(PosterName, quantity)
    }
}