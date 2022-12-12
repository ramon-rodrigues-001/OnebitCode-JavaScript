const Character = require('./Character.js')

class Mage extends Character {
    constructor(nome, vida, atacar, defesa, magia) {
        super(nome, vida, atacar, defesa)
        this.magia = magia
    }

    attack(person) {
            if (person.escudo) {
                if ((this.atacar + this.magia) - (person.defesa + person.escudo) > 0) {
                    person.vida -= (this.atacar + this.magia) - (person.defesa + person.escudo)
                }
            }
            else {
                if ((this.atacar + this.magia) - person.defesa > 0) {
                    person.vida -= (this.atacar + this.magia) - person.defesa
                }
            }
    }

    // curar(person)
}

module.exports = Mage