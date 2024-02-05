// Quando eu escrevo este codigo abaixo o codigo simplesmente Para de funcionar:
// const Conta = require('./entities/Conta.js')


const User = require('./entities/User.js')

const ramon = new User('Ramon', 'ramon@gmail.com')

ramon.Conta.fazerDepositos(20000)
ramon.Conta.fazerDepositos(13000)
ramon.Conta.fazerDepositos(2000)

console.log(ramon)