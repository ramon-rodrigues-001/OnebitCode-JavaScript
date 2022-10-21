let listaDeVagas = []

// MOSTRAR AS VAGAS QUE ESTÃO NA LISTA
function mostrarVagas() {
    let vagas = []
    listaDeVagas.map((mapeamento, indice) => {
        vagas.push(`\n${indice} - ${mapeamento.nome} [${mapeamento.candidato.length} Candidatos]`)
    })
    alert(vagas)
}

// ADICIONAR UMA VAGA A LISTA
function adicionar() {
    let newVaga = {}
    newVaga.nome = prompt('Informe o nome para a vaga: ')
    newVaga.descricao = prompt('Informe uma descrição para a vaga: ')
    newVaga.data = prompt('Informe uma data limite dd/mm/aaaa: ')
    newVaga.candidato = []

    let salvarVaga = confirm('DESEJA MESMO SALVAR ESTA VAGA?:' + 
    `\n- ${newVaga.nome} \n- ${newVaga.descricao} \n- ${newVaga.data} \n- [${newVaga.candidato.length} Candidatos]`)
    if (salvarVaga) {
        listaDeVagas.push(newVaga)
    }
}

// VISUALIZAR DADOS DE UMA VAGA
function visualizarVaga() {
    if (listaDeVagas.length > 0) {
        let indeceDaVaga = prompt('Informe o indece da vaga que deseja visualizar:')

        alert(`Vaga de ${listaDeVagas[indeceDaVaga].nome} \n${listaDeVagas[indeceDaVaga].descricao} \n${listaDeVagas[indeceDaVaga].data}
        \n--> Candidatos:\n${listaDeVagas[indeceDaVaga].candidato.map((parametro) => {
            return ` -  ${parametro} \n`
        })}`)
    }
    else {
        alert('Não tem vagas disponiveis')
    }
}

// EXCLUIR VAGA
function excluirVaga() {
    let indiceVagaExcluir = prompt('Informe o indece da vaga que deseja excluir:')

    let confirmarExcluir = confirm('DESEJA MESMO EXCLUIR ESTA VAGA?:' + 
        `Vaga de ${listaDeVagas[indiceVagaExcluir].nome} \n- ${listaDeVagas[indiceVagaExcluir].descricao} \n- ${listaDeVagas[indiceVagaExcluir].data}`)
    if (confirmarExcluir) {
        listaDeVagas.splice(indiceVagaExcluir, 1)
    }
}

// ADICIONANDO CANDIDATOS A UMA VAGA
function adicionarCandidato() {
    let nomeDoCandidato = prompt('Nome do candidato: ')

    let indeceDaVagaParaAdicionarCandidato = prompt('Informe o indece da vaga que deseja adicionar o candidato:')

    let confirmandoCandidato = confirm(`DESEJA MESMO ADICIONAR O CANDIDATO ${nomeDoCandidato} A ESTA VAGA?:` +`\n\nVaga: ${listaDeVagas[indeceDaVagaParaAdicionarCandidato].nome}, \n${listaDeVagas[indeceDaVagaParaAdicionarCandidato].descricao}`)

    if (confirmandoCandidato) {
        listaDeVagas[indeceDaVagaParaAdicionarCandidato].candidato.push(nomeDoCandidato)
    }
}

let choice = ''
do {
    choice = prompt('CADASTRO DE VAGAS DE EMPREGO' +
    '\n\n1 - Listar Vagas Disponiveis' +
    '\n2 - Criar Nova Vaga' + 
    '\n3 - Visualizar Uma Vaga' + 
    '\n4 - Excluir Uma Vaga' + 
    '\n5 - Increver Um(a) Candidato' + 
    '\n6 - Sair')

    switch (choice) {
        case '1':
            mostrarVagas()
            break
        case '2':
            adicionar()
            break
        case '3':
            visualizarVaga()
            break
        case '4':
            excluirVaga()
            break
        case '5':
            adicionarCandidato()
            break
        case '6':
            alert('Saindo....')
            break
        default:
            alert('Acho que você não entendeu os regras amigo,\nTente novamente.')
            break
    }

}   while(choice != 6)