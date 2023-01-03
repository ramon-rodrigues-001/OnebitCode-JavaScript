const Character = require('./Character.js')

class Thief extends Character {
    attack(person) {
        if ((this.atacar - person.defesa > 0)) {
            person.vida -= (this.atacar - person.defesa) * 2
        }
    }
}

module.exports = Thief