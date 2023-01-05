function Tell(numero) {
    const fixedString = numero.replace(/[\sa-zA-Z]/g, "")

    this.br = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/\(..\)/)[0]
    this.number = fixedString.match(/(?<=\))\d+-\d+/)[0]
}

console.log(new Tell("+55 (33) 91234-5678"))