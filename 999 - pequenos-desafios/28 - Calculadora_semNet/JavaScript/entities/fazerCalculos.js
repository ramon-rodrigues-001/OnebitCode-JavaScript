export function fazerCalculos(elemento) {
    const tela = document.querySelector('#tela')
    const telaResult = document.querySelector('#resultado')

    if (elemento.dataset.value === "C") {
        tela.value = ''
        telaResult.value = ''
    }
    else if (elemento.dataset.value === "=") {
        try { 
            const soma = eval(tela.value)
            telaResult.value = soma
        }
        catch {
            telaResult.value = "Error"
        }
    }
    else {
        tela.value += elemento.dataset.value
    }
}


export function addTeclado(ev) {
    const arrayDeCaracter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'C', '(', ')', '*', '+', '-', '/', '%', '.']

    if (arrayDeCaracter.includes(ev.key)) {
        tela.value += ev.key
    }
}