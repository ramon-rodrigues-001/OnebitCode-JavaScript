// Rest Params [resto dos parametros] serve para utilizar em um parametro que voçe não sabe quantos serão inceridos.
// Desta forma o parametro se torna um Arry deixando que voçe utilize metodos de array como o Reduce, foreach etc

function restParams(...numbers) {
    return soma = numbers.reduce((soma, numbers)=> soma += numbers, 0)
}
console.log(restParams(3, 3, 9, 3))



// Como foi dito o rest params serve  para o resto dos parametros então sempre deve estar no final
function restoDoParametro(par1, par2, ...resto) {
    let resultado = par1 + par2
    let arrayDeResto = [...resto]
    console.log(`A soma entre ${par1} + ${par2} = ${resultado}`)

    if (resto.length > 0) {
        console.log(`Você digitou numeros a mais eles são ${arrayDeResto}`)
    }
}

restoDoParametro(4, 4, 6, 2, 9)