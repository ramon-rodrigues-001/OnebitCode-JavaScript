const metros = prompt("Informe o valor em [METROS]")
const option = prompt("Qual a unidade de medida deseja converter  \n(a): mm  \n(b): cm  \n(c): dm \n(d): dam  \n(e): hm  \n(f): km")

switch (option) {
    case "a":
        alert(`Metros convertido para milimetro = ${metros * 1000}Mm`)
        break
    case "b":
        alert(`Metros convertido para centimetros = ${metros * 100}Cm`)
        break
    case "c":
        alert(`Metros convertido para decimetro = ${metros * 10}Dm`)
        break
    case "d":
        alert(`Metros convertido para decâmetro = ${metros / 10}Dam`)
        break
    case "e":
        alert(`Metros convertido para hectômetro = ${metros / 100}Hm`)
        break
    case "f":
        alert(`Metros convertido para kilometros = ${metros / 1000}Km`)
        break
    
}