const Accout = require('./Accout.js')

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.conta = new Accout(this)
    }
}

module.exports = User