let personagem1_Vida;
let personagem1_power_atk;
let personagem1_power_dfz;
let personagem1_escudo;
const live_1 = document.querySelector('p#live-1')
const power_atk_1 = document.querySelector('p#power-atk-1')
const power_1 = document.querySelector('p#power-1')
const shield_1 = document.querySelector('p#shield-1')

let personagem2_Vida;
let personagem2_power_atk;
let personagem2_power_dfz;
let personagem2_escudo;
const live_2 = document.querySelector('p#live-2')
const power_atk_2 = document.querySelector('p#power-atk-2')
const power_2 = document.querySelector('p#power-2')
const shield_2 = document.querySelector('p#shield-2')

function personagem1() {
    let personagem1_Vida_txt = prompt('Vida do personagem_1 0/100')
    let personagem1_power_atk_txt = prompt('Ataque do personagem_1 0/100')
    let personagem1_power_dfz_txt = prompt('Defeza do personagem_1 0/100')
    personagem1_escudo = prompt('O personagem tem escudo sim/não')
    personagem1_Vida = parseFloat(personagem1_Vida_txt)
    personagem1_power_atk = parseFloat(personagem1_power_atk_txt)
    personagem1_power_dfz = parseFloat(personagem1_power_dfz_txt)

    live_1.innerHTML = `VIDA: <strong>${personagem1_Vida}</strong>`
    power_atk_1.innerHTML = `PODER DE ATAQUE: <strong>${personagem1_power_atk}</strong>`
    power_1.innerHTML = `DEFEZA: <strong>${personagem1_power_dfz}</strong>`
    shield_1.innerHTML = `PORTA UM ESCUDO: <strong>${personagem1_escudo}</strong>`
}



function personagem2() {
    let personagem2_Vida_txt = prompt('Vida do personagem_2 0/100')
    let personagem2_power_atk_txt = prompt('Ataque do personagem_2 0/100')
    let personagem2_power_dfz_txt = prompt('Defeza do personagem_2 0/100')
    personagem2_escudo = prompt('O personagem tem escudo sim/não')
    personagem2_Vida = parseFloat(personagem2_Vida_txt)
    personagem2_power_atk = parseFloat(personagem2_power_atk_txt)
    personagem2_power_dfz = parseFloat(personagem2_power_dfz_txt)

    live_2.innerHTML = `VIDA: <strong>${personagem2_Vida}</strong>`
    power_atk_2.innerHTML = `PODER DE ATAQUE: <strong>${personagem2_power_atk}</strong>`
    power_2.innerHTML = `DEFEZA: <strong>${personagem2_power_dfz}</strong>`
    shield_2.innerHTML = `PORTA UM ESCUDO: <strong>${personagem2_escudo}</strong>`
}



function pular() {
    if (personagem1_Vida > 0 && personagem2_Vida > 0) {
        if (personagem1_escudo === 'sim') {
            personagem1_Vida -= (personagem2_power_atk - (personagem2_power_atk / 100 * 30)) - (personagem1_power_dfz / 10)
        }
        else (
            personagem1_Vida -= personagem2_power_atk - (personagem1_power_dfz / 10)
        )

    
        if (personagem2_escudo === 'sim') {
            personagem2_Vida -= (personagem1_power_atk - (personagem1_power_atk / 100 * 30)) - (personagem2_power_dfz / 10)
        }
        else (
            personagem2_Vida -= personagem1_power_atk - (personagem2_power_dfz / 10)
        )
    
        live_1.innerHTML = `VIDA: <strong>${personagem1_Vida}</strong>`
        live_2.innerHTML = `VIDA: <strong>${personagem2_Vida}</strong>`    
    }
    else {
        const resultado = document.querySelector('h1#resultado')
        if (personagem1_Vida <= 0 && personagem2_Vida <= 0) {
            resultado.innerHTML = `Ambos Morreram`
        }
        else if (personagem1_Vida <= 0) {
            resultado.innerHTML = `personagem_2 vencedor`
        }
        else if (personagem2_Vida <= 0) {
            resultado.innerHTML = `personagem_1 vencedor`
        }
    }
}


