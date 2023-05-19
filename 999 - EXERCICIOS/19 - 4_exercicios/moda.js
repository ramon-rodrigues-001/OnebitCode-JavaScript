// Moda é o numero que mais se repete em um lista

function moda(...numbers) {
    
    let quantities = numbers.map(e => [
        e,
        numbers.filter(num => {
            return e === num
        }).length
    ])

    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(moda(5, 6, 8, 8, 4, 6, 6))