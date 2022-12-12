// const Character = require('./Character.js')

const Mage = require('./Mage.js')
const Thief = require('./Thief.js')
const Warrion = require('./Warrion.js')

// name, life, attack, defense 

const mago = new Mage('Merlin', 150, 15, 5, 15)
const ladao = new Thief('Athur', 200, 30, 15)
const guerrero = new Warrion('Ragnar', 230, 20, 15, 20)


mago.attack(ladao)
guerrero.posicao()
ladao.attack(guerrero)


console.table([mago, ladao, guerrero])