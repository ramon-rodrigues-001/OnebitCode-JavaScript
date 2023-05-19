const row = document.querySelector('div#fila')
const pacienteAtual = document.querySelector('div#atendido')

let lista_de_espera = ['Ramon', 'João', 'Ana Maria']
html()

function html() {
    row.innerHTML = ''
    for (let i1 = 0; i1 < lista_de_espera.length; i1++) {
        row.innerHTML += `${i1 + 1}° ${lista_de_espera[i1]} <br>`
    }
}

function newPatient() {
    let novoPaciente = prompt("Informe o nome do paciente: ")
    lista_de_espera.push(novoPaciente)
    html()
}
function consultPatient() {
    let chamada = lista_de_espera.shift()
    pacienteAtual.innerHTML = chamada
    html()
}