/* Foi utilizado um metodo no butão chamado [this] que serve para manda ele mesmo como parametro, com instenção de [.parentNode] para passar como parametro o elemento Pai do butão*/

/* Tambem tem os metodos vistos abaixo como o [children]*/

function chamada(parametro) {
    console.log(parametro)

    const nome = parametro.children.name.value
    const senha = parametro.children.pass.value
    const confirmSenha = parametro.children.Confirm_pass.value
    console.log({nome, senha, confirmSenha})

    if (senha === confirmSenha) {
        alert('Usuario ' + nome + ' cadastrado com sucesso')
    } else {
        alert('Senhas não confere')
    }
}