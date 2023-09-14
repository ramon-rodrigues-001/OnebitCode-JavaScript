const User = require('./entities/User.js')

const userRamon = new User('Ramon', 'Ramon@gmail.com', 123)
userRamon.conta.fazerDeposito(500)

console.log(userRamon)