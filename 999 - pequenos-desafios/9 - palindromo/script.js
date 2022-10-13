const teste = 'Ramon'.toLocaleUpperCase()
let espelhado = ''

for (let i = teste.length - 1 ; i >= 0; i--) {
    espelhado += teste[i]
}

if (teste === espelhado) {
    console.log('É um palindromo')
}
else {
    console.log(`Não é palindromo \n${teste} \n${espelhado}`)
}