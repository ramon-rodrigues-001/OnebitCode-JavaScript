const teste = 'Ramon'.toLocaleUpperCase()
let espelhado = ''

for (let i = teste.length - 1 ; i >= 0; i--) {
    espelhado += teste[i]
}

if (teste === espelhado) {
    console.log(teste + 'É um palindromo')
}
else {
    console.log(`${teste} Não é palindromo!. \n\n${teste} \n${espelhado}`)
}