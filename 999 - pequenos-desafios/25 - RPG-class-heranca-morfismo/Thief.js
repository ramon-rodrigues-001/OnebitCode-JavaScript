const Character = require('./Character.js')

class Thief extends Character {
    constructor(nome, vida, atacar, defesa) {
        super(nome, vida, atacar, defesa)
    }

    attack(person) {
        person.vida -= (this.atacar - person.defesa) * 2
    }
}

module.exports = Thief