const App = require('./App.js')
const app = new App()


app.createAuthor('Ramon Rodrigues', 'Capelinha MG', 'Grande escritor')
app.createAuthor('Rickson Paulo', 'Coritima MG', 'Estritor Júnior')

const autores = app.getAuthor()

app.createBook('Piratas d Caribi', '...', 'fantasy', 284, autores[0], '...', 200, 24)
app.createBook('Piratas d Caribi 2', '...', 'fantasy', 210, autores[0], '...', 220, 14)
app.createBook('Socied', '...', 'Pishico', 193, autores[1], '...', 200, 20)

const books = app.getBook()

app.createUser('Issac', 'Paloma', 'Raiane')

const users = app.getUsers()

