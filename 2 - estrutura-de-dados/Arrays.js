// Array (Lista)
let array_1 = []

// Adicionando no final
array_1.push('Ramon')
array_1.push(18)
array_1.push('Masculino')
console.log(array_1)

// Adicionando no inicio
array_1.unshift('Primeiro')
array_1.unshift(1)
console.log(array_1)

// Revovendo do fim (Pilha)
array_1.pop()
console.log(array_1)

// Revovendo do inicio (Fila)
array_1.shift()
console.log(array_1)

// Verificando se existe o valor dentro do Array
console.log(array_1.includes('Ramon'))

// Verificando o indice onde esta o valor
console.log(array_1.indexOf(18))


// === Copiando recortando e referencia ===
// ????