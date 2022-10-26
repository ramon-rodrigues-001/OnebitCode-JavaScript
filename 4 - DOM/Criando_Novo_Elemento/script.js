function adicionar() {
    let lista = document.querySelector('ul#lista')

    let newli = document.createElement('li')
    newli.innerText = 'NOVO INPUT: '

    let newinput = document.createElement('input')
    newinput.type = 'text'

    newli.appendChild(newinput)
    lista.appendChild(newli)
}
let sss = document.getElementById