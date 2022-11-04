
let numJugada = 0
let jogadorX;
let jogadorO;

function MudarJogador() {
    const vezDoJogador = document.getElementById('vezDoJogador')
    
    if (vezDoJogador.innerText === 'Jogador' || vezDoJogador.innerText === jogadorO.value) {
        vezDoJogador.innerText = jogadorX.value
    }
    else if (vezDoJogador.innerText === jogadorX.value) {
        vezDoJogador.innerText = jogadorO.value
    }

    return
}

document.getElementById('btnComecar').addEventListener('click', (evComecar)=>{
    
    let espacos = document.querySelectorAll('.marcado').forEach(element =>{
        element.classList.remove('marcado')
        element.classList.add('espaco')
        element.innerText = ''
        numJugada = 0
    })

    jogadorX = document.getElementById('jogadorX')
    jogadorO = document.getElementById('jogadorO')
    
    MudarJogador()


    if (jogadorX.value !== '' && jogadorO.value !== '') {
        alert('Lest Go!')

        espacos = document.querySelectorAll('.espaco').forEach(element => {
            element.addEventListener('click', (eventoClicar)=>{
                const espacoClicado = eventoClicar.currentTarget

                if (espacoClicado.classList == 'espaco') {
                    if (numJugada % 2 === 0) {
                        espacoClicado.innerText = 'X'
                        element.classList.remove('espaco')
                        element.classList.add('marcado')
                    } 
                    else {
                        
                        espacoClicado.innerText = 'O'
                        element.classList.remove('espaco')
                        element.classList.add('marcado')
                    }
                    
                    MudarJogador()
                    numJugada += 1
                }
            })


        });
    }
    else {
        alert('Favor preencher campos de nome')
    }


})
