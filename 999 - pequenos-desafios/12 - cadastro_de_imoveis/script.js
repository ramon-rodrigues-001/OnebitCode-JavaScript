let arr = []
let obj = {}
let choice;

do {
    choice = prompt(
        `====== CADASTRO DE IMOVEIS ======
        \nIMOVEIS CADASTRADOS: ${arr.length}
        \n[1] CADASTRAR NEW IMOVEL \n[2] MOSTRAR IMOVEIS CADASTRADOS \n[3] SAIR`
    )

    if (choice === '1') {
        obj.nome = prompt('Informe o nome do proprietário')
    }

} while(choice !== '3')