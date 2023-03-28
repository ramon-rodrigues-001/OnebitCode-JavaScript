const Corretora = require('./Corretora.js')

const ramon = new Corretora('ramon@gmail.com', 111, 3000)
ramon.addSaldo(3000)
ramon.removerSaldo(1000)

console.log(ramon.verSaldo('ramon@gmail.com', 111))