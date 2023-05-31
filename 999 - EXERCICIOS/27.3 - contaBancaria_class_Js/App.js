const User = require('./entities/User.js')
const Accout = require('./entities/Accout.js')
const Transferencia = require('./entities/Transferencia.js')
const Emprestimo = require('./entities/Emprestimo.js')
const Recebimento = require('./entities/Recebimento.js')

class App {
    #contas = []

    createUser(nome, email) {
        const user = new User(nome, email)
        this.#contas.push(user)
    }

    addTransferencia(user, emailRecebido, valor) {
        if (verificando(user) && verificando(emailRecebido)) {
            this.#contas.forEach(e=> {
                if(e.email === user) {
                    const transferenciaRealizado = new Transferencia(emailRecebido, valor)
                    e.conta.extrato_transferencia.push(transferenciaRealizado)
                }
                else if(e.email === emailRecebido) {
                    const transferenciaRealizado = new Recebimento(user, valor)
                    e.conta.extrato_recebimento.push(transferenciaRealizado)
                }
                else {
                    console.log('ssssssssssssssss')
                }
            })
        }
        else {
            console.log('Contas não confere')
        }
    }

    addEmprestimo(valor) {
        this.#contas.aa.conta.getSaldo -= valor - (valor / 100 * 20)
        const emprestimoRealizado = new Emprestimo(valor)
        this.#contas.aa.conta.extrato_emprestimo.push(emprestimoRealizado)
    }

    get getcontas() {
        return this.#contas
    }

    
}

const contas = new App()

function verificando(email) {
    let i = 0
    while (contas.getcontas.length >= i) {
        
        if (contas.getcontas[i].email === email ) {
            return true
        }
        i++
    }
}


contas.createUser('Ramon', 'ramon@gmail.com')
contas.createUser('Pedro', 'pedro@gmail.com')

contas.addTransferencia('ramon@gmail.com', 'pedro@gmail.com', 100)

console.log(contas.getcontas[0].conta)
console.log('')
console.log('')
console.log('')
console.log('')
console.log(contas.getcontas[1].conta)
console.log('')
console.log('')
console.log('')
console.log('')
console.log(contas.getcontas[0].conta.extrato_transferencia)
console.log(contas.getcontas[1].conta.extrato_recebimento)

