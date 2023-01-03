let array = ['Ass - Copas', 'Coringa']


let escolha = '0'
while (true) {
    let organizado = ''
    function organizacao() {
        organizado = ''
        for (let i = 0; i < array.length; i++) {
            organizado += array[i] + '\n'
        }
        apresentação()
    }

    function apresentação() {
        escolha = prompt(`==== BARALHO DE CARTAS ==== \n${organizado} \n\n[1] _ COMPRAR \n[2] _ PUXAR \n[3] _ SAIR`)

        // comprar carta
        if (escolha === '1') {
            let newCard = prompt('===Name the Card=== \n')
            array.unshift(newCard)
            organizacao()
        }

        // Jogar carta
        else if (escolha === '2') {
            let popCard = array.shift()
            alert(popCard)
            organizacao()
        }
    }
    
    if (escolha === '3') {
        alert('FIM')
        break
    }

    organizacao()
}
