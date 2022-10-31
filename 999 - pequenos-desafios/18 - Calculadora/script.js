// Mudar tema
document.getElementById('mudarTema').addEventListener('click', ()=>{
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-white')
})

let tela = document.getElementById('tela')
let telaDeResultado = document.getElementById('telaDeResposta')
let calculo = []
let res;

document.querySelectorAll('.teclas').forEach((el)=>{
    el.addEventListener('click', (evento)=>{

        let elementoAcionado = evento.currentTarget

        calculo.push(elementoAcionado.value)

        tela.value += `${elementoAcionado.value}`
    })
})

let sosd = []
document.getElementById('efetuarCalculo').addEventListener('click', ()=>{

    console.log(calculo)
})
