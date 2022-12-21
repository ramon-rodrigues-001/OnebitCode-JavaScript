const App = require('./App.js')
const app = new App()


app.createAuthor('Ramon', 'Capelinha MG', 'Grande escritor')
app.createAuthor('Paulo', 'Coritima MG', 'Estritor Júnior')

const autores = app.getAuthor()

app.createBook('Piratas Carib', '...', 'fantasy', 284, autores[0], '...', 200, 100)
app.createBook('Piratas Carib 2', '...', 'fantasy', 210, autores[0], '...', 220, 100)
app.createBook('Socied', '...', 'Pishico', 193, autores[1], '...', 200, 100)

const books = app.getBook()

app.createUser('Issac', 'issak@gmail.com', 123456)

const users = app.getUsers()


const itens = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[0],
        quantity: 5
    },
    {
        product: books[1],
        quantity: 4
    }
]

app.createOrder(itens, users[0])


console.log(app.showDatabase())