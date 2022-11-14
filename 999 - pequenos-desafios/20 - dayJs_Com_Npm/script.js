const bibliotecaDayjs = require("dayjs")

const inputNacimento = '2004-05-10'
const obj = inputNacimento.split('-')

const idade = bibliotecaDayjs().subtract(obj[0], 'year').get('year')
const mesRestante = bibliotecaDayjs().subtract(obj[1], 'month').get('month')
const diasRestante = bibliotecaDayjs().subtract(obj[2], 'day').get('day')

console.log(`Você Tem ${idade} anos
E falta ${mesRestante} Meses e ${diasRestante} Dias`)