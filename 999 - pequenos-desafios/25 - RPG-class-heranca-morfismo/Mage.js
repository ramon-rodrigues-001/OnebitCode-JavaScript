const Character = require('./Character.js')

class Mage extends Character {
    constructor(nome, vida, atacar, defesa, magia) {
        super(nome, vida, atacar, defesa)
        this.magia = magia
    }

    attack(person) {
        person.vida -= (this.atacar + this.magia) - person.defesa
    }

    // curar(person)
}

module.exports = Mage