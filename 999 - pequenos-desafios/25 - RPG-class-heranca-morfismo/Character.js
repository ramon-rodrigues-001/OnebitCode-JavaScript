class Character {
    constructor(nome, vida, atacar, defesa) {
        this.nome = nome
        this.vida = vida
        this.atacar = atacar
        this.defesa = defesa
    }

    attack(person) {
        person.vida -= this.atacar - person.defesa
    }
}


module.exports = Character