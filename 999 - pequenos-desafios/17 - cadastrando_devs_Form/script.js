let lista_li;

const addHabilidade = document.getElementById('adicionar')
addHabilidade.addEventListener('click', () => {
    const habilidade = document.getElementById('habilidades')
    lista_li = document.createElement('li')

    let labelFeramenta = document.createElement('label')
    labelFeramenta.for = 'feramenta'
    labelFeramenta.innerText = 'Ferramenta: '

    let feramenta = document.createElement('input')
    feramenta.type = 'text'
    feramenta.id = 'feramenta'

    labelFeramenta.appendChild(feramenta)
    lista_li.appendChild(labelFeramenta)


    
    let labelExperiencia1 = document.createElement('label')
    let labelExperiencia2 = document.createElement('label')
    let labelExperiencia3 = document.createElement('label')
    labelExperiencia1.innerText = '0-2 Anos' 
    labelExperiencia2.innerText = '3-4 Anos' 
    labelExperiencia3.innerText = '5+ Anos'
    labelExperiencia1.for = 'experiencia1'
    labelExperiencia2.for = 'experiencia2'
    labelExperiencia3.for = 'experiencia3'

    let experiencia1 = document.createElement('input')
    let experiencia2 = document.createElement('input')
    let experiencia3 = document.createElement('input')
    experiencia1.type = 'radio'
    experiencia2.type = 'radio'
    experiencia3.type = 'radio'
    experiencia1.name = 'inputRadio'
    experiencia2.name = 'inputRadio'
    experiencia3.name = 'inputRadio'
    experiencia1.id = 'experiencia1'
    experiencia2.id = 'experiencia2'
    experiencia3.id = 'experiencia3'

    labelExperiencia1.appendChild(experiencia1)
    labelExperiencia2.appendChild(experiencia2)
    labelExperiencia3.appendChild(experiencia3)

    lista_li.appendChild(labelExperiencia1)
    lista_li.appendChild(labelExperiencia2)
    lista_li.appendChild(experiencia3)
    lista_li.appendChild(labelExperiencia3)

    habilidade.appendChild(lista_li)
})