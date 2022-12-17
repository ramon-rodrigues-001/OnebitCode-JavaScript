class Database {
    #storage = {
        authores: [],
        books: [],
        posters: [],
        ouders: [],
        usser: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authores.push(author)
    }

    saveBook(Book) {
        this.#storage.books.push(Book)
    }

    savePoster(poster) {
        this.#storage.posters.push(poster)
    }

    save
}