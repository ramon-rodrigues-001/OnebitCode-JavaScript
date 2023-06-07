function execult() {
    return new Promise((resolve, reject)=> {
        console.log('Execultando promise...')

        setTimeout(()=> {
            if (true) {
                reject('Rejeitada.')
            }
            else {
                resolve('Resolvida.')
            }
        }, 2000)
    })
}

const execut = execult()
// console.log(execut)

execut.then((smg) => {
    console.log('Promise execultado ' + smg)
}).catch((err) => {
    console.log('Promise rejeitada ' + err)
})

// setTimeout(() => {
    
// }, 3000);