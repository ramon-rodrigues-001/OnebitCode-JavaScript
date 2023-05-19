const numero = prompt('Digite um numero para ser multiplicado: ')
let calculos = ''

for (let i = 0; i <= 20; i++) {
    calculos += `-> ${numero} x ${i} = ${Number(numero * i)} \n`
}

alert(`O valor das multipliocações por ${numero}: \n ${calculos}`)