let corpo = document.getElementsByTagName('body')[0]

function adicionar() {
    let div = document.createElement('div')
    div.style.border = 'solid 1px black'
    div.style.maxWidth = '400px'
    div.style.margin = '10px'
    div.style.padding = '10px'
    div.style.display = 'inline-block'

    let title = document.createElement('h2')
    title.innerText = 'Contato'

    let lista = document.createElement('ul')

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

    div.appendChild(title)
    div.appendChild(lista)

    corpo.appendChild(div)
}