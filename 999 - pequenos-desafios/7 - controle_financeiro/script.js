let nome = prompt('Qual seu nome?: ').toUpperCase()
let dinheroTotal = prompt('Qual valor atual na conta: ')
let total = Number(dinheroTotal)

do {
    fleg = prompt('Qual ação deseja fazer: \n1 - Depositar \n2 - Sacar \n3 - Sair')

    if (fleg == 1) {
        let mais = prompt('Valor a Depositar: ')
        total += Number(mais)
        alert(`${nome} \n -Valor Atual: ${total} \n -Valor do deposito: ${mais}`)
    }
    else if (fleg == 2) {
        let menos = prompt('Valor a Sacar: ')
        total -= Number(menos)
        alert(`${nome} \n -Valor Atual: ${total} \n -Valor do saque: ${menos}`)
    }
    else {
        alert('Encerando... \nSucesso')
        break
    }
} while (true)