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


// FAZ A MESMA COISA MAIS SEM USAR O [THIS] ACHEI MAIS INTEREÇANTE

function register(ev) {
    console.log(ev)

    const parentPai = ev.currentTarget.parentNode

    const nome = parentPai.children.name.value
    const senha = parentPai.children.pass.value
    const confirmSenha = parentPai.children.Confirm_pass.value
    console.log({nome, senha, confirmSenha})
}
const segundoButão = document.getElementById('segundoButao')
segundoButão.addEventListener('click', register)


// Para remover um evento de um elemento basta fazer o exemplo abaixo

function remover() {
    segundoButão.removeEventListener('click', register)
}