function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.quantity = 0
    this.addQuantity = (Q) => {
        this.quantity += Q
    }
}


const tags = ['fantasy', 'RPG', 'Medieval']

const newLivro = new Book('Exiled', 322, tags, 'Ramon')

newLivro.addQuantity(40)

console.log(newLivro)