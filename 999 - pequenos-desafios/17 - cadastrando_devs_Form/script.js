const form = document.getElementById('formulario')
const habilidade = document.getElementById('habilidades')

const addHabilidade = document.getElementById('adicionar')
addHabilidade.addEventListener('click', () => {
    let labelFeramenta = document.createElement('label')
    labelFeramenta.for = 'feramenta'
    labelFeramenta.innerText = 'Ferramenta: '

    let feramenta = document.createElement('input')
    feramenta.type = 'text'
    feramenta.id = 'feramenta'


    let labelExperiencia1 = document.createElement('label')
    let labelExperiencia2 = document.createElement('label')
    let labelExperiencia3 = document.createElement('label')
    labelExperiencia1.for = 'experiencia1'
    labelExperiencia2.for = 'experiencia2'
    labelExperiencia3.for = 'experiencia3'    
    labelExperiencia1.innerText = '0-2 Anos' 
    labelExperiencia2.innerText = '3-4 Anos' 
    labelExperiencia3.innerText = '5+ Anos'

    let experiencia1 = document.createElement('input')
    let experiencia2 = document.createElement('input')
    let experiencia3 = document.createElement('input')
    experiencia1.type = 'radio'
    experiencia2.type = 'radio'
    experiencia3.type = 'radio'
    experiencia1.id = 'experiencia1'
    experiencia2.id = 'experiencia2'
    experiencia3.id = 'experiencia3'


    labelFeramenta.appendChild(feramenta)
    habilidade.appendChild(labelFeramenta)

    labelExperiencia1.appendChild(experiencia1)
    labelExperiencia2.appendChild(experiencia2)
    labelExperiencia3.appendChild(experiencia3)
    habilidade.appendChild(labelExperiencia1)
    habilidade.appendChild(labelExperiencia2)
    habilidade.appendChild(labelExperiencia3)
})