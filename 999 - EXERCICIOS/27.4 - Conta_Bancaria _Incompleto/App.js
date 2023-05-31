const User = require("./entities/User.js")
const Conta = require("./entities/Conta.js")

const NewUser = new User('Ramon', 'ramon@gmail', [])

const NewConta = new Conta(NewUser)
NewConta.RealizarEmprestimo('Pedro', 100)

console.log(NewConta)