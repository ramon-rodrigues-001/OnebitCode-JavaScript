// A soma de todos os numeros dividido pela quantidade de numeros

function CalcMedia(...numbers) {
    let digitos = numbers.length
    let soma = numbers.reduce((valorAtual, num)=>{
        return valorAtual += num
    }, 0)

    return {digitos, soma, numbers}
}

let arry = [CalcMedia(4, 5, 2, 6)]

console.log(`Seu total de pontos foi ${arry[0].soma} porem a sua media esta em ${(arry[0].soma / arry[0].digitos).toFixed(1)}`)
