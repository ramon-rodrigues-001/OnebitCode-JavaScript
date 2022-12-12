const Character = require('./Character.js')

class Warrion extends Character {
    constructor(nome, vida, atacar, defesa) {
        super(nome, vida, atacar, defesa) 
        this.escudo = 0
        this.arma = 'Espada'
    }

    attack(person) {
        if (this.arma === 'Escudo') {
            person.vida -= 0
            console.log('======== GUERREIRO ESTA EM MODO DEFENSIVO ========')
        }
        else {
            if (person.escudo == 'Escudo') {
                if (this.atacar - (person.defesa + person.escudo) > 0) {
                    person.vida -= this.atacar - (person.defesa + person.escudo)
                }
            }
            else {
                if (this.atacar - person.defesa > 0) {
                    person.vida -= this.atacar - person.defesa
                }
            }
        }
    }

    posicao() {
        if (this.arma === 'Escudo') {
            this.arma = 'Espada'
            this.escudo = 0
        }
        else if (this.arma === 'Espada') {
            this.arma = 'Escudo'
            this.escudo = 50
        }
    }
}

module.exports = Warrion