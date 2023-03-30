const App = require("./App.js")

const ramon = App.register('ramon', 'ramon@gmail.com')
ramon.conta.depositar(2000)

console.log(ramon, ramon.getSaldo)
