// O espread é um metodo de separar os emelementos sejá este elemento uma string de um array, Ou até mesmo palavras de uma string


// Utilizado para fazer copia de um array assim um não sera referencia ao outro
const array = ['string1', 'string2', 'string3', 'string4']

const arrayCopia = [...array]
arrayCopia.pop()
arrayCopia.push('string5')

console.log({array, arrayCopia})


// Utilizando para separar palavras não sei pra que
const [desestruturacao] = array
console.log(...desestruturacao)