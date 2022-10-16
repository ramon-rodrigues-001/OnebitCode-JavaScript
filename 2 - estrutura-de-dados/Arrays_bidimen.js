// Primeira ilustração
let n1 = ['1º Nivel',
[['2º Nivel', 'item-1'], ['2º Nivel', 'item-2']]]
console.log(n1[1][1][1])

// Segunda ilustração
let n2 = [
    ['coluna-1 item-1', 'coluna-1 item-2', 'coluna-1 item-3'],
    ['coluna-2 item-1', 'coluna-2 item-2', 'coluna-2 item-3'],
    ['coluna-3 item-1', 'coluna-3 item-2', 'coluna-3 item-3']
]
for (let i = 0; i<n2.length; i++) {
    console.table(n2[i])
}