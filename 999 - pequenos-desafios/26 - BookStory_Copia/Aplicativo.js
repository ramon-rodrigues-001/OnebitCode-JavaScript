const BaseDeDados = require("./BaseDeDados.js")
const dataBase = new BaseDeDados()

dataBase.criarAutor('Ramon', 'Escritor Pleno', 'Capelinha MG')
dataBase.criarAutor('Rayane', 'Escritor Júnior', 'Capelinha MG')
dataBase.criarAutor('Ramon', 'Escritor Pleno', 'Capelinha MG')

console.log(dataBase.mostrarAutores())