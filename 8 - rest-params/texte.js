function soma(...num) {
    return soma = num.reduce((soma, num)=> soma += num, 0)
}
console.log(soma(2,5,8,3,8))


function rest(n1, n2, ...rest) {
    const soma = n1 + n2
    const rstantes = rest

    return `A soma entre ${n1} e ${n2} = ${soma}. Vc digitou numeros a mais: ${rstantes}`
}
console.log(rest(2,5,8,3,8))