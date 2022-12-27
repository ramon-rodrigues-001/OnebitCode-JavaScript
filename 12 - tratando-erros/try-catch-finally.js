function soma(a, b) {
    const num1 = Number(a)
    const num2 = Number(b)

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Ambos os elementos devem ser numeros.')
    }
    return num1 + num2
}


// Tente execultar esse bloco de codigo
try {
    console.log(soma('5', 5))
    console.log(soma(3, true))
    console.log(soma('zero', 8))
    console.log(soma(9, 1))
}

//  Caso algo de errado mostre estas mensagens
catch(error) {
    console.log('An error ocurred!!')
    console.log(error.message)
}

// Por fim execulte isso
finally {
    console.log('Calculations finished!')
}
