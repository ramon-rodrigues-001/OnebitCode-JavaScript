let personagem1_Vida = prompt('Vida do personagem_1 0/100')
let personagem1_power_atk = prompt('Ataque do personagem_1 0/100')
let personagem1_power_dfz = prompt('Defeza do personagem_1 0/100')
let personagem1_escudo = prompt('O personagem tem escudo sim/não')

let personagem2_Vida = prompt('Vida do personagem_2 0/100')
let personagem2_power_atk = prompt('Ataque do personagem_2 0/100')
let personagem2_power_dfz = prompt('Defeza do personagem_2 0/100')
let personagem2_escudo = prompt('O personagem tem escudo sim/não')


const live_1 = document.querySelector('p#live-1')
const power_atk_1 = document.querySelector('p#power-atk-1')
const power_1 = document.querySelector('p#power-1')
const shield_1 = document.querySelector('p#shield-1')

const live_2 = document.querySelector('p#live-2')
const power_atk_2 = document.querySelector('p#power-atk-2')
const power_2 = document.querySelector('p#power-2')
const shield_2 = document.querySelector('p#shield-2')


live_1.innerHTML = `VIDA: <strong>${personagem1_Vida}</strong>`
power_atk_1.innerHTML = `PODER DE ATAQUE: <strong>${personagem1_power_atk}</strong>`
power_1.innerHTML = `DEFEZA: <strong>${personagem1_power_dfz}</strong>`
shield_1.innerHTML = `PORTA UM ESCUDO: <strong>${personagem1_escudo}</strong>`

live_2.innerHTML = `VIDA: <strong>${personagem2_Vida}</strong>`
power_atk_2.innerHTML = `PODER DE ATAQUE: <strong>${personagem2_power_atk}</strong>`
power_2.innerHTML = `DEFEZA: <strong>${personagem2_power_dfz}</strong>`
shield_2.innerHTML = `PORTA UM ESCUDO: <strong>${personagem2_escudo}</strong>`



let p1 = 0
let p2 = 0
if (personagem1_Vida > personagem2_Vida) {
    p1++
}
else if (personagem1_Vida < personagem2_Vida) {
    p2++
}

if (personagem1_power_atk > personagem2_power_atk) {
    p1++
}
else if (personagem1_power_atk < personagem2_power_atk) {
    p2++
}

if (personagem1_power_dfz > personagem2_power_dfz) {
    p1++
}
else if (personagem1_power_dfz < personagem2_power_dfz) {
    p2++
}


const resultado = document.querySelector('h1#resultado')
let vencedor = (p1 > p2) ? 'Personagem_1 Venceu' : 'Personagem_2 Venceu'
resultado.innerHTML = vencedor