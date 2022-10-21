let listaCandidatos = []

// MOSTRAR AS VAGAS QUE ESTÃO NA LISTA
function mostrarVagas() {
    let vagas = []
    listaCandidatos.map((mapeamento, indice) => {
        vagas.push(`\n${indice} - ${mapeamento.nome}`)
    })
    alert(vagas)
}

// ADICIONAR UMA FAGA A LISTA
function adicionar() {
    let newVaga = {}
    newVaga.nome = prompt('Informe o nome para a vaga: ')
    newVaga.descricao = prompt('Informe uma descrição para a vaga: ')
    newVaga.data = prompt('Informe uma data limite dd/mm/aaaa: ')

    let salvarVaga = confirm('DESEJA MESMO SALVAR ESTA VAGA?:' + 
    `\n- ${newVaga.nome} \n- ${newVaga.descricao} \n- ${newVaga.data}`)
    if (salvarVaga) {
        listaCandidatos.push(newVaga)
    }
}

// VISUALIZAR DADOS DE UMA VAGA
function visualizarVaga() {
    let indeceDaVaga = prompt('Informe o indece da vaga que deseja visualizar:')
    alert(`Vaga de ${listaCandidatos[indeceDaVaga].nome} \n- ${listaCandidatos[indeceDaVaga].descricao} \n- ${listaCandidatos[indeceDaVaga].data}`)
}

// EXCLUIR VAGA
function excluirVaga() {
    let indiceVagaExcluir = prompt('Informe o indece da vaga que deseja excluir:')

    let confirmarExcluir = confirm('DESEJA MESMO EXCLUIR ESTA VAGA?:' + 
        `Vaga de ${listaCandidatos[indiceVagaExcluir].nome} \n- ${listaCandidatos[indiceVagaExcluir].descricao} \n- ${listaCandidatos[indiceVagaExcluir].data}`)
    if (confirmarExcluir) {
        listaCandidatos.splice(indiceVagaExcluir, 1)
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
    }

}   while(choice != 6)