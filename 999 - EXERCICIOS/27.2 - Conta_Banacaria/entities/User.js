const Conta = require('./Conta.js')

class User {
    constructor (nome, email) {
        this.Nome = nome,
        this.Email = email,
        this.Conta = this.e()
    }

    e() {
        return new Conta('Ramon', 'ramon@gmail.com');
    }
}

// ??????
module.exports = User