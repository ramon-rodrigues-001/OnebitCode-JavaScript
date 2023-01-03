function areaDoTriângolo(n1=0, n2=0) {
    alert(n1 * n2 / 2)
}
function areaDoRetangolo(n1=0, n2=0) {
    alert(n1 * n2)
}
function areaDoQuadrado(n1=0) {
    alert(n1 ** 2)
}
function areaDoTrapezio(n1=0, n2=0, n3=0) {
    alert((n1 + n2) * n3 / 2)
}
function areaDoCirculo (n1=0) {
    alert(3.14 * (n1**2))
}

let choice = ''
do {
    choice = prompt("ESCOLHA UM CALCULO GEOMETRICO E INFORME OS DADOS NECESSÁRIOS \n\n1. Calcular área do triângolo \n2. Calcular área do retângolo \n3. Calcular área do quadrado \n4. Calcular área do trápezio \n5. Calcular área do círculo \n6. SAIR")

    switch (choice) {
        case '1':
            areaDoTriângolo(prompt('Base do Triângolo'), prompt('Altura do Triângolo'))
            break
        case '2':
            areaDoRetangolo(prompt('Base do Retângolo'), prompt('Altura do Retângolo'))
            break
        case '3':
            areaDoQuadrado(prompt('Lado do Quadrado'))
            break
        case '4':
            areaDoTrapezio(prompt('Base mair do trápezio'), prompt('Base menor do trápezio'), prompt('Altura do trápezio'))
            break
        case '5':
            areaDoCirculo(prompt('Raio do Círculo'))
            break
        case '6':
            alert('Saindo...')
        default:
            'Essa opção não existe! Revise.'
    }
} while(choice !== '6')