const Character = require('./Character.js')

class Warrion extends Character {
    constructor(nome, vida, atacar, defesa, escudo) {
        super(nome, vida, atacar, defesa) 
        this.escudo = escudo
        this.arma = 'Espada'
    }

    attack(person) {
        if (this.arma = 'Escudo') {
            person.vida -= 0
        }
    }

    posicao() {
        if (this.arma = 'Espada') {
            this.arma = 'Escudo'
            this.defesa += this.escudo
        }
        else {
            this.arma = 'Espada'
        }
    }
}

module.exports = Warrion