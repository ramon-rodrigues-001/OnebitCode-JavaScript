let divTime = document.querySelector('div#time')
let lista_ul;
let lista_li;
let arr = []

function adicionar() {
    let posicao = document.querySelector('input#posicao').value
    let nome = document.querySelector('input#nome').value
    let numero = document.querySelector('input#numero').value

    let obj = {posicao, nome, numero}
    arr.push(`${obj.posicao} - ${obj.nome} - Camisa:${obj.numero}`)

    let lista_ul = document.createElement('ul')
    let lista_li = document.createElement('li')
    lista_li.innerText = arr[arr.length -1]

    lista_ul.appendChild(lista_li)
    divTime.appendChild(lista_ul)
}

function remover() {
    let removerJogador = document.querySelector('input#remover').value

    for (let i = 0; i<arr.length; i++) {
        if (arr[i].numero === removerJogador) {
            arr.splice(arr[i], 1)
            
            lista_li.innerText = arr[arr.length -1]
            lista_ul.appendChild(lista_li)
            divTime.appendChild(lista_ul)
        }
    }
}