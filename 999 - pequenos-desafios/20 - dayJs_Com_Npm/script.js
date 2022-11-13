const bibliotecaDayjs = require("dayjs")

const inputNacimento = '2004-05-10'
const obj = inputNacimento.split('-')

console.log(`idade: ${bibliotecaDayjs().subtract(obj[0], 'year').year()}
Dias para procimo aniversario: ${bibliotecaDayjs().subtract(obj[1], 'month').month()} ${bibliotecaDayjs().subtract(obj[2], 'day').day()}`)