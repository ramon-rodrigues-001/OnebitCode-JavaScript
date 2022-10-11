let listaCidades = []

const nome = prompt("Qual seu nome?: ")
let fleg = prompt("Ola" + nome +" Você já visitou alguma cidade")

while (fleg === 'Sim') {
    listaCidades.push(prompt('Qual Nome dessa cidade?'))
    fleg = prompt('Você visitou auguma outra cidade?? [Sim/Não]')
}

alert(`Olá ${nome} Você já visitou ${listaCidades.length} Paises, Sendo eles ${listaCidades}`)