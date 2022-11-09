function CalcMedia(...numbers) {
    let digitos = 0
    let valorTotal = numbers.reduce((valorAtual, num)=> {
        digitos++
        valorAtual += num
    },0)
    return valorTotal / digitos
}

CalcMedia(2, 6, 8)