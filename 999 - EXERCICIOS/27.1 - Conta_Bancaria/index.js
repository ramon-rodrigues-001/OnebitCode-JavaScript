const App = require('./App.js')


const ramon = App.registerUser('Ramon Rodrigues', 'ramon@gmail.com')
const pedrao = App.registerUser('Pedrão Chefe', 'pedão@gmail.com')

ramon.conta.depositar(500)
ramon.conta.depositar(1300)

ramon.conta.emprestimo(5000.50, 12)

ramon.conta.transferencia(ramon.conta, pedrao.conta, 1000)

console.log(ramon, ramon.conta.getConta())
console.log(pedrao, pedrao.conta.getConta())