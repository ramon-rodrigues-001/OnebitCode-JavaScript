// Mudar tema
document.getElementById('mudarTema').addEventListener('click', ()=>{
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-white')
})

let tela = document.getElementById('tela')

document.querySelectorAll('.teclas').forEach((el)=>{
    el.addEventListener('click', (evento)=>{

        let elementoAcionado = evento.currentTarget

        tela.value += `${elementoAcionado.value}`
    })
})
