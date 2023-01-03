// Media ponderada é a soma de todos os pontos junto com os pesos depois dividido pelos pesos 

function medPonderada(...objs) {
    console.log(objs)

    let pesos = 0
    let total = 0

    objs.map((elemento)=>{
        total = total + (elemento.p * elemento.m)
        pesos += elemento.p
    })

    let media = total / pesos

    console.log(`A media ponderada foi de ${media}`)
}

medPonderada({m:7, p:2}, {m:9, p:5}, {m:3, p:1})