// Mediana é o numero que esta no meio de uma lista


function mediana(...numbers) {
    if (numbers.length % 2 > 0) {
        return numbers[(numbers.length -1) / 2]
    }
    else {
        return (numbers[(numbers.length -2) / 2] + numbers[(numbers.length -2) / 2 + 1]) / 2
    }
}

console.log(mediana(6, 2, 5, 7, 9, 9))