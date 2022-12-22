const BaseDeDados = require("./BaseDeDados.js")
const dataBase = new BaseDeDados()

dataBase.criarAutor('Ramon', 'Escritor Pleno', 'Capelinha MG')
dataBase.criarAutor('Rayane', 'Escritor Júnior', 'Capelinha MG')

const autores = dataBase.mostrarAutores()


dataBase.criarLivro('Piratas Caribe', 'Pirat Jack Sparrow', 235, 100, 'fantasy', 304, autores[0])
dataBase.criarLivro('Piratas Caribe 2', 'Pirat Jack Sparrow', 259, 100, 'fantasy', 394, autores[0])
dataBase.criarLivro('Pishico', 'Entenda Emoçoes Humanas', 200, 100, 'Pisicologia', 300, autores[1])

const livros = dataBase.mostrarLivros()


dataBase.criarUsuario('Ramon', 'ramon@gmail.com', 12345)

const usuarios = dataBase.mostrarUsuarios()
