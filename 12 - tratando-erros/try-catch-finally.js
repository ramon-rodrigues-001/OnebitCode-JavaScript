function soma(a, b) {
    const num1 = Number(a)
    const num2 = Number(b)
    
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Os elementos sugeridos dever ser numeros.")
    }

    return num1 + num2
}

try {
    console.log(soma(2, 6))
    console.log(soma(true, 6))
    console.log(soma('8', 9))
    console.log(soma('zero', 5))
    console.log(soma(2, 5))
}
catch (error) {
    console.log("An error ocurred!")
    console.log(error.message)
}
finally {
    console.log('Calculations finished.')
}