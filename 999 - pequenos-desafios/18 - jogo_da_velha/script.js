
let numJugada = 0

document.getElementById('btnComecar').addEventListener('click', (evComecar)=>{
    const jogadorX = document.getElementById('jogadorX')
    const jogadorO = document.getElementById('jogadorO')

    if (jogadorX.value !== '' && jogadorO.value !== '') {
        alert('Lest Go!')
        document.querySelectorAll('.espaco').forEach(element => {

            element.classList.remove('espaco')
            element.classList.add('marcado')

            if ()

            element.addEventListener('click', (eventoClicar)=>{
                const espacoClicado = eventoClicar.currentTarget

                if (numJugada % 2 === 0) {
                    espacoClicado.innerText = 'X'
                } 
                else {
                    espacoClicado.innerText = 'O'
                }
                numJugada += 1
            })
        });
    }
    else {
        alert('Favor preencher campos de nome')
    }
})
