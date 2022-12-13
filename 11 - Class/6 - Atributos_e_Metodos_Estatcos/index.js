
// Apartamento
// O elemento com Static sera passado para class filha exatamente com o valor adiquirido


class Reservation {
    constructor(hospedes, quarto, day) {
        this.hospedes = hospedes
        this.quarto = quarto
        this.day = day
        this.total = day * Reservation.diaria
    }

    static diaria = 150

    static get lerDiaria() {
        console.log(`O valor diario é ${this.diaria}`)
    }
}
Reservation.lerDiaria
const reser1 = new Reservation(4, 2, 7)
console.log(reser1)


// Instancia de Reservation
class Primium extends Reservation {
    constructor(hospedes, quarto, day) {
        super(hospedes, quarto, day)
        this.total *= 1.5
    }
}
Primium.lerDiaria
const reser2 = new Primium(4, 2, 7)
console.log(reser2) 