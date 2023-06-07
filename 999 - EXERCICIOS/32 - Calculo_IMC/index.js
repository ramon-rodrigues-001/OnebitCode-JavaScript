function compararIMC(IMC) {
    if (IMC < 18.5) {
        console.log("Você esta abaixo do peso ideal: 'Magreza'")
    }
    else if (IMC < 24.9) {
        console.log("Você esta no peso ideal: 'Normal'")
    }
    else if (IMC < 29.9) {
        console.log("Você esta pouco acima do peso ideal: 'Sobrepeso'")
    }
    else if (IMC < 39.9) {
        console.log("Você esta bem acima do peso ideal: 'Obesidade'")
    }
    else {
        console.log("Você esta em um estado crítico: 'Obesidade grave'")
    }
}


function calc_imc(peso, altura) {
    return new Promise((resolve, reject) => {
        console.log("Iniciando calculo...")

        setTimeout(()=> {
            if (typeof peso === 'number' && typeof altura === 'number') {
                resolve(peso / (altura * altura))
            }
            else {
                reject('An number required!!')
            }
        }, 2000)
    })
}


function app(peso, altura) {
    const calculo = calc_imc(peso, altura)
    calculo.then((smg) => {
        console.log(`Promise resolvida o valor do seu IMC: ${smg}`)
        compararIMC(smg)
    }).catch((err) => {
        console.log(`ERROR: ${err}`)
    })
    console.log('Ultimo')
}


app(70, 1.80)