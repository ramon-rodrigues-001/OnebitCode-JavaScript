let posicao;
let nome;
let numero;

function adicionar() {
    posicao = document.querySelector('input#posicao').value
    nome = document.querySelector('input#nome').value
    numero = document.querySelector('input#numero').value    

    let confirmar = confirm(`Escalar ${nome} na posição de ${posicao}?`)
    if (confirmar) {
        let lista_ul = document.querySelector('ul#lista_ul')
        let lista_li = document.createElement('li')
        lista_li.innerHTML = `${posicao}: ${nome} - Camisa: ${numero}`
        lista_li.id = `camisa${numero}`

        lista_ul.appendChild(lista_li)

        document.querySelector('input#posicao').value = ''
        document.querySelector('input#nome').value = ''
        document.querySelector('input#numero').value = ''
    }

}

function remover() {
    let removerJogador = document.querySelector('input#remover').value
    let removeItemli = document.getElementById(`camisa${removerJogador}`)

    let confirmar = confirm(`Deseja remover jogador camisa: ${removerJogador} ?`)
    if (confirmar) {
        document.querySelector('ul#lista_ul').removeChild(removeItemli)
        document.querySelector('input#remover').value = ''
    }
}