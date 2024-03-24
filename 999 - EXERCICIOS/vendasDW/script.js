const addProduto = document.querySelector('.add_produto')
const body = document.querySelector('.body')

function CriarCard(url, produtoName, preco) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = url


    const divTexto = document.createElement('div')
    divTexto.classList.add('texto')

    const nome_do_produto = document.createElement('h3')
    nome_do_produto.innerHTML = produtoName

    const miniTexto = document.createElement('p')
    miniTexto.classList.add('mini')
    miniTexto.innerText = 'Comissão de até:'

    const thepreco = document.createElement('p')
    thepreco.classList.add('preco')
    thepreco.innerHTML = `R$ ${preco}`

    const spaPreco = document.createElement('span')
    spaPreco.classList.add('span')
    spaPreco.appendChild(thepreco)

    const buttonDetalhes = document.createElement('button')
    buttonDetalhes.innerHTML = 'Ver Produto'
    
    divTexto.appendChild(nome_do_produto)
    divTexto.appendChild(miniTexto)
    divTexto.appendChild(spaPreco)
    divTexto.appendChild(buttonDetalhes)

    card.appendChild(img)
    card.appendChild(divTexto)
    body.appendChild(card)
}

addProduto.addEventListener('click', ()=> {
    const url = prompt('Url da imagem: ')
    const produtoName = prompt('Nome do produto: ')
    const preco = prompt('Preco do produto: ')

    CriarCard(url, produtoName, preco)
})