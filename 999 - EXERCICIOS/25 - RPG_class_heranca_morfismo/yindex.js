// const Character = require('./Character.js')

const Mage = require('./Mage.js')
const Thief = require('./Thief.js')
const Warrion = require('./Warrion.js')


// name, life, attack, defense 
const mago = new Mage('Merlin', 150, 15, 5, 20)
const ladrao = new Thief('Athur', 200, 30, 15)
const guerrero = new Warrion('Ragnar', 230, 25, 15) 


guerrero.attack(mago)
guerrero.posicao()



console.table({mago, ladrao, guerrero})