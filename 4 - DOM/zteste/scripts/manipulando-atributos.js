export function acionar(e) {
    let input = document.querySelector("input#input")
    switch (e.id) {
        case "mu_valor":
            mu_valor(input)
            break
        case "mu_tipo":
            mu_tipo(input)
            break
        case "placeholder":
            placeholder(input)
            break
        case "mostrar":
            mostrar(input)
            break
        case "desabilitar":
            desabilitar(input)
            break
    }
}

function mu_valor(input) {
    input.value = input.value === '' ? 'Hello World' : ''
}

function mu_tipo(input) {
    input.type = input.type === 'text' ? 'radio' : 'text'
}

function placeholder(input) {
    input.placeholder = input.placeholder === '' ? 'Digite Algo...' : ''
}

function mostrar(input) {
    let dados = input.dataset.valorAtribuido
    console.log(`${dados}`)
}

function desabilitar(input) {
    input.setAttribute("disabled", !input.disabled)
}