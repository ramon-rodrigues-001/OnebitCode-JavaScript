const Character = require('./Character.js')

class Thief extends Character {
    constructor(nome, vida, atacar, defesa) {
        super(nome, vida, atacar, defesa)
    }

    attack(person) {
        if (person.escudo > 0) {
            if ((this.atacar - (person.defesa + person.escudo)) * 2 > 0) {
                person.vida -= (this.atacar - (person.defesa + person.escudo)) * 2
            }   
        }
        else {
            if ((this.atacar - person.defesa > 0)) {
                person.vida -= (this.atacar - person.defesa) * 2
            }
        }
    }
}

module.exports = Thief