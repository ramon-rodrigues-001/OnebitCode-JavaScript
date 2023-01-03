let corpo = document.getElementsByTagName('body')[0]
let lista
let divF

function adicionar() {
    divF = document.createElement('div')
    divF.style.border = 'solid 1px black'
    divF.style.maxWidth = '400px'
    divF.style.margin = '10px'
    divF.style.padding = '10px'
    divF.style.display = 'inline-block'

    let title = document.createElement('h2')
    title.innerText = 'Contato'

    lista = document.createElement('ul')
 
    let arr = ['Nome', 'Telefone', 'Endereço']
    for (let i = 0; i < 3; i++) {
        let item_text = document.createElement('li')
        let item_input = document.createElement('input')
        item_input.type = 'text'
        item_text.innerText = arr[i] + ': '
        item_text.style.padding = '10px'
        item_text.style.fontWeight = 'bold'

        item_text.appendChild(item_input)
        lista.appendChild(item_text)  
    }

    divF.appendChild(title)
    divF.appendChild(lista)

    corpo.appendChild(divF)
}


function remover() {
    divF = document.getElementsByTagName('div')
    corpo.removeChild(divF[divF.length - 1])
}