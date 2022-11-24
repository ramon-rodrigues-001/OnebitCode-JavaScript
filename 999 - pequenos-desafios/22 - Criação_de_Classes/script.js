const verificar = require('./login.js')


function User(fullName, email, password) {
    this.fullName = fullName
    this.email = email
    this.password = password

    this.verificar = verificar(this.fullName, this.email, this.password)
}

const login = new User('Ramon Rodrigues', 'ramon.rodrigues.dev@gmail.com', 111)

console.log(login.verificar)
