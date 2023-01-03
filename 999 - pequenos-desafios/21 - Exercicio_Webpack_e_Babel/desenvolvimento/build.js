import "./build.css"

alert(`Tudo certo por aqui. Como 1 + 1 = ${1 + 1}`)

document.querySelector('h1').addEventListener('mouseenter', (ev)=>{
    const h1 = ev.currentTarget
    h1.style.color = 'blue'
})

document.querySelector('h1').addEventListener('mouseout', (ev)=>{
    const h1 = ev.currentTarget
    h1.style.color = '#ffff'
})