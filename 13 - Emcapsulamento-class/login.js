const System = require('./System.js')


const ramon = new System('ramon@gmail.com', '111', 4033)
ramon.addSaldo(456)


const fulano = new System('fulano@gmail.com', '222', 1200)
fulano.removeSaldo(200)


console.log(ramon.loginUser('ramon@gmail.com', '111'))