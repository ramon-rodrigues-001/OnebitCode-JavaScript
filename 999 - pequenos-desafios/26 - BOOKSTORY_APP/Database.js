class Database {
    #storage = {
        authores: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authores.push(author)
    }

    // Books

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const booksExist = this.findBookByName(book.name)

        if (!booksExist) {
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book.addToStock(quantity)
    }

    removeBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book.remuveFromStock(quantity)
    }


    // Posters

    findPosterByName(posterName) {
        return this.#storage.books.find(p => p.name === posterName)
    }

    savePoster(poster) {
        const posterExist = this.findPosterByName(poster.name)

        if (!posterExist) {
            this.#storage.posters.push(poster)
        }
    }

    addPosterToStock(posterName, quantity) {
        const poster = this.findBookByName(posterName)
        poster?.addToStock(quantity)
    }

    removePosterToStock(posterName, quantity) {
        const poster = this.findBookByName(posterName)
        poster?.remuveFromStock()
    }


    // Users

    saveUser(user) {
        const userExist = this.#storage.users.fild(u => u.email === user.email)

        if (!userExist) {
            this.#storage.users.push(user)
        }
    }


    // Order

    saveOrder(order) {
        this.#storage.orders.push(order)
    }


    // Exibir

    showStorage() {
        console.table(this.#storage.authores)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(objeto => objeto.data()))
    }
}

module.exports = Database