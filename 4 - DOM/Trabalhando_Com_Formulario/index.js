const butaoSubmit = document.getElementById('butaoSubmit')

butaoSubmit.addEventListener('click', (parametro) => {
    parametro.preventDefault() //para o form não execultar normalmente

    const evento = parametro.currentTarget.parentNode

    const nome = evento.children.iname.value
    const endereco = evento.children.iaddress.value
    const paoType = evento.children.ibread.value
    const principal = document.querySelector('input[type="radio"]:checked').value
    let salada = ''
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((elemento) => {
        salada += `- ${elemento.value} \n`
    })
    let obs = evento.children.ionservation.value

    console.log({nome, endereco, paoType, principal, salada, obs})

    alert(`Nome: ${nome} \nEndereço: ${endereco} \nTipo de Pão: ${paoType}\nPrincipal: ${principal} \nSaladas: \n${salada} \nObservação: ${obs}`)
})