const fila = document.querySelector('#divFila')

function addPaciente(nome) {
    const newPaciente = document.createElement('p')
    newPaciente.innerHTML = nome

    fila.addChilden(newPaciente)
}