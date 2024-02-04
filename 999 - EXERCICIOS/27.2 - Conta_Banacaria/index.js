const Conta = require('./entities/Contas.js')
const contas = []

const ramon = new Conta('Ramon', 'ramon@gmail.com')
const rayane = new Conta('Rayane', 'Rayane@gmail.com')


ramon.fazerTranferencias(1000, 'Rayane')

console.log(ramon)