function CalcMedia(...numbers) {
    let digitos = 0
    let soma = numbers.reduce((valorAtual, num)=>{
        digitos++
        return valorAtual += num
    }, 0)

    return {digitos, soma, numbers}
}

let arry = [CalcMedia(4, 5, 2, 6)]

console.log(`Seu total de pontos foi ${arry[0].soma} porem a sua media esta em ${(arry[0].soma / arry[0].digitos).toFixed(1)} 
Suas notas forão ${arry[0].numbers}`)