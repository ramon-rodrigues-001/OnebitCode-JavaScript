class Character {
    constructor(nome, vida, atacar, defesa) {
        this.nome = nome
        this.vida = vida
        this.atacar = atacar
        this.defesa = defesa
    }

    attack(person) {
        if (person.escudo) {
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


module.exports = Character