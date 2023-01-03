alert('Ola!, favor preencher os requisitos')
let nome = prompt('Primeiro Nome')
let sobrenome = prompt('Sobrenoime')
let estudo = prompt('Area de Estudo')
let data_de_nacimento = prompt('Data De Nacimento')

let idade = 2022 - data_de_nacimento

console.log(`Olá ${nome} ${sobrenome} você tem ${idade} Anos, Gostaria de achar um curso de ${estudo}`)

console.log(data_de_nacimento)