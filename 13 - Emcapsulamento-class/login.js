const User = require('./User.js')


const user = {
    email: 'ramon@gmail.com',
    password: '12345',
    saldo: 'R$4033,00'
}

const usuario = new User(user)
console.log(usuario.getSaldo('ramon@gmail.com', '12345'))