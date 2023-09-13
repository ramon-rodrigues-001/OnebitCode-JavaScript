const fila = document.querySelector('#divFila')
const emAtendimento = document.querySelector('#divAtendente')
const Pacientes = []

function addPaciente() {
    const nome = prompt('Nome do Paciente: ')
    Pacientes.push(nome)
    fila.innerHTML = ''

    let index = 0
    Pacientes.forEach(value => {
        index ++
        const newParagrafh = document.createElement('p')
        newParagrafh.innerHTML = `${index}° ${value}`

        fila.appendChild(newParagrafh)
    })
}


function Atender() {
    const pacienteAtendido = Pacientes.shift()
    emAtendimento.innerHTML = ''
    fila.innerHTML = ''

    const newParagrafh = document.createElement('p')
    newParagrafh.innerHTML = pacienteAtendido

    emAtendimento.appendChild(newParagrafh)


    // Renderizando novamente a lista de paciente em espera
    let index = 0
    Pacientes.forEach(value => {
        index ++
        const newParagrafh = document.createElement('p')
        newParagrafh.innerHTML = `${index}° ${value}`

        fila.appendChild(newParagrafh)
    })
}
