let arr = []
let obj = {}
let organizado = ''
let choice;

do {
    organicao()
    choice = prompt(
        `====== CADASTRO DE IMOVEIS ======
        \nIMOVEIS CADASTRADOS: ${arr.length}
        \n[1] CADASTRAR NEW IMOVEL \n[2] MOSTRAR IMOVEIS CADASTRADOS \n[3] SAIR`
    )

    if (choice === '1') {
        obj.nome = prompt('Informe o nome do proprietário')
        obj.quartos = prompt('Quantos quartos posuem no imovel: ')
        obj.banheiros = prompt('Quantos banheiros posuem no imovel: ')
        obj.garagem = prompt('O imovel posue garagem: [Sim/Nao]')

        arr.push(obj)
    }
    else if (choice === '2') {
        alert(`1º Imovel \n${organizado}`)
    }

} while(choice !== '3')

function organicao() {
    for (let i = 0; i<arr.length; i++) {
        organizado += `${arr[i]} \n`
    }
}