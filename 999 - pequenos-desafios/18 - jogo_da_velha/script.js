
let numJugada = 0
let table = [['', '', ''], ['', '', ''], ['', '', '']]
const jogadorX = document.getElementById('jogadorX')
const jogadorO = document.getElementById('jogadorO')
const vezDoJogador = document.getElementById('vezDoJogador')

function MudarJogador() {
    if (vezDoJogador.innerText === '' || vezDoJogador.innerText === jogadorO.value) {
        vezDoJogador.innerText = jogadorX.value
    } else if (vezDoJogador.innerText === jogadorX.value) {
        vezDoJogador.innerText = jogadorO.value
    }
}


function ChecarVencedor() {
    
}


document.getElementById('btnComecar').addEventListener('click', (evComecar)=>{

    table = [['', '', ''], ['', '', ''], ['', '', '']]
    vezDoJogador.innerText = ''
    MudarJogador() 

    let espacos = document.querySelectorAll('.marcado').forEach(element =>{
        element.classList.remove('marcado')
        element.innerText = ''
        numJugada = 0
    })

    
    if (jogadorX.value !== '' && jogadorO.value !== '') {
        alert('Lest Go!')

        espacos = document.querySelectorAll('.espaco').forEach(element => {
            element.addEventListener('click', (eventoClicar)=>{
                const espacoClicado = eventoClicar.currentTarget

                let region = espacoClicado.dataset.region
                let arryRegion = region.split('.')
                let row = arryRegion[0]
                let collum = arryRegion[1]

                if (espacoClicado.classList == 'espaco') {
                    if (numJugada % 2 === 0) {
                        espacoClicado.innerText = 'X'
                        table[row][collum] = 'X'
                        element.classList.add('marcado')
                    } else {
                        espacoClicado.innerText = 'O'
                        table[row][collum] = 'O'
                        element.classList.add('marcado')
                    }
                    
                    MudarJogador()
                    ChecarVencedor()
                    numJugada += 1
                    console.table(table)
                }
            })
        });

    }
    else {
        alert('Favor preencher campos de nome')
    }
})
