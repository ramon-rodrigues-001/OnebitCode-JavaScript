let segundos = 0

const intervalId = setInterval(()=> {
    segundos += 1

    console.log("Sé passarão "+ segundos+ " segundos")

    if (segundos >= 15) {
        clearInterval(intervalId)
        console.log('Incerrando Cronometro')
    }
}, 1000)