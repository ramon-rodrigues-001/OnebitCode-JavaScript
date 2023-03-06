// Uma promesa que o codigo asicrono sera execultado

function execut() {
    return new Promise((resolve, reject)=> {
        console.log('Iniciando Promise')

        setTimeout(()=> {
            console.log('Promise sendo resolvida')
            resolve( "Resolvida" )
        }, 2000)
    })
}

const p = execut()

console.log(p)

console.log('proximo codigo')

setTimeout(()=> {
    console.log(p)
}, 4000)