export function acionar(e) {
    const input = document.querySelector("input#input")
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
    if (input.value === 'Hello World') {
        input.value = ''
    }
    else {
        input.value = 'Hello World'
    }
}

function mu_tipo(input) {
    if (input.type === 'text') {
        input.type = 'radio'
    }
    else {
        input.type = 'text'
    }
}

function placeholder(input) {
    if (input.placeholder === '') {
        input.placeholder = 'placeholder'
    }
    else {
        input.placeholder = ''
    }
}

function mostrar(input) {
    alert(dataset.valorAtribuido)
}

function desabilitar(input) {
    alert("desabilitar")
}