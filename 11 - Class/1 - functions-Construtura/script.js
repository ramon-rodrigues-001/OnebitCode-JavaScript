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
const livro2 = new Book('Kingdons', 193, tags, 'Ramon Rodrigues')

newLivro.addQuantity(40)
livro2.addQuantity(90)

console.log(newLivro)
console.log(livro2)