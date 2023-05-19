const Character = require('./Character.js')

class Mage extends Character {
    constructor(nome, vida, atacar, defesa, magia) {
        super(nome, vida, atacar, defesa)
        this.magia = magia
    }

    attack(person) {
        if ((this.atacar + this.magia) - person.defesa > 0) {
            person.vida -= (this.atacar + this.magia) - person.defesa
        }
    }

    curar(person) {
        person.vida += this.magia * 2
    }
}

module.exports = Mage