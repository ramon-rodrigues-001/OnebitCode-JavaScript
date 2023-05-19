function rodar() {
    let n1_txt = document.querySelector('input#numero1')
    let n2_txt = document.querySelector('input#numero2')
    let n1_num = Number(n1_txt.value)
    let n2_num = Number(n2_txt.value)

    let calculo = document.querySelector('select#select').value

    let resposta = document.querySelector('div#res')
    if (calculo == 'somar') {
        resposta.innerHTML = `${n1_num + n2_num}`
    }
    else if (calculo == 'subitrair') {
        resposta.innerHTML = `${n1_num - n2_num}`
    }
    else if (calculo == 'multiplicar') {
        resposta.innerHTML = `${n1_num * n2_num}`
    }
    else if (calculo == 'divisão') {
        resposta.innerHTML = `${n1_num / n2_num}`
    }
}