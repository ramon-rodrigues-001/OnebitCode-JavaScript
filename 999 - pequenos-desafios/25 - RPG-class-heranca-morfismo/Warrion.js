const Character = require('./Character.js')

class Warrion extends Character {
    constructor(nome, vida, atacar, defesa) {
        super(nome, vida, atacar, defesa) 
        this.arma = 'Espada'
    }

    attack(person) {
        if (this.arma === 'Espada') {
            super.attack(person)
        }
    }

    posicao() {
        if (this.arma === 'Escudo') {
            this.arma = 'Espada'
            this.defesa = Math.round(this.defesa - (this.defesa * (30 / 100)))
            this.vida = Math.round(this.vida - (this.vida * (50 / 100)))
        }
        else {
            this.arma = 'Escudo'
            this.defesa = Math.round(this.defesa + (this.defesa * (100 / 100)))
            this.vida = Math.round(this.vida + (this.vida * (50 / 100)))
        }
    }
}

module.exports = Warrion