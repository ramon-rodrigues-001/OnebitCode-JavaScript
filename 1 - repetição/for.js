// Commum
for (let i2 = 1; i2 <= 10; i2++) {
    console.log(i2)
}


// O for é bem flexivel e pode funcionar mesmo sem um dos seus paraetros
let i1 = 1
for (; i1 <= 10; ) {
    console.log(i1)

    i1++
}


// Ainda mais estranho
let i3 = 1
for (console.log('Inicio');  i3 <= 10;  i3++) {
    console.log(i3)
}