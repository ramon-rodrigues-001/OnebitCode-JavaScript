
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
    let monitor = []
    if (table[0][0] && table[0][0] === table[0][1] && table[0][1] === table[0][2]) {
        monitor.push('0.0', '0.1', '0.2')
    }
    if (table[1][0] && table[1][0] === table[1][1] && table[1][1] === table[1][2]) {
        monitor.push('1.0', '1.1', '1.2')
    }
    if (table[2][0] && table[2][0] === table[2][1] && table[2][1] === table[2][2]) {
        monitor.push('2.0', '2.1', '2.2')
    }

    if (table[0][0] && table[0][0] === table[1][0] && table[1][0] === table[2][0]) {
        monitor.push('0.0', '1.0', '2.0')
    }
    if (table[0][1] && table[0][1] === table[1][1] && table[1][1] === table[2][1]) {
        monitor.push('0.1', '1.1', '2.1')
    }
    if (table[0][2] && table[0][2] === table[1][2] && table[1][2] === table[2][2]) {
        monitor.push('0.2', '1.2', '2.2')
    }

    if (table[0][0] && table[0][0] === table[1][1] && table[1][1] === table[2][2]) {
        monitor.push('0.0', '1.1', '2.2')
    }
    if (table[0][2] && table[0][2] === table[1][1] && table[1][1] === table[2][0]) {
        monitor.push('0.2', '1.1', '2.0')
    }

    return monitor
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
                    let vencedor = ChecarVencedor()
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
