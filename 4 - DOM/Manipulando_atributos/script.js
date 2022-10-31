let input = document.querySelector('input#input')

document.getElementById('mudarValor').addEventListener('click', ()=>{
    input.value = input.value === '' ? ' Hello, World!!' : ''
})

document.getElementById('mudarTipo').addEventListener('click', ()=>{
    input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', ()=>{
    input.placeholder = input.placeholder === '' ? 'Digite Algo...' : ''
})

document.getElementById('off').addEventListener('click', ()=>{
    // Uma funcionalidade bem pratica é o [.setAttribute] serve para mudar algum atributo do elemento

    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('dados').addEventListener('click', ()=>{
    // Para saber os dados armazenado deve utilizaqr o metodo [dataset] e o nome desta data [opicional]
    let data = input.dataset.dados
    console.log(data)
})