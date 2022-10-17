let arr = []
let choice = ''

do {
    choice = prompt(
        `====== CADASTRO DE IMOVEIS ======
        \nIMOVEIS CADASTRADOS: ${arr.length}
        \n[1] CADASTRAR NEW IMOVEL \n[2] MOSTRAR IMOVEIS CADASTRADOS \n[3] SAIR`
    )

    if (choice === '1') {
        let obj = {}
        obj.nome = prompt('Informe o nome do proprietário')
        obj.quartos = prompt('Quantos quartos possuem no imovel: ')
        obj.banheiros = prompt('Quantos banheiros possuem no imovel: ')
        obj.garagem = prompt('O imovel possue garagem: [Sim/Nao]')

        let confirmacao = confirm("Quer Mesmo salvar esse imovel?:")
        if (confirmacao === true) {
            arr.push(obj)
        }
    }
    else if (choice === '2') {
        for (let i = 0; i<arr.length; i++) {
            alert(`${i + 1}º IMOVEL \n\nProprietario: ${arr[i].nome}\nQuartos: ${arr[i].quartos} \nBanheiros: ${arr[i].banheiros} \nPossui Garagem?: ${arr[i].garagem}`)
        }
    }
} while(choice !== '3')
