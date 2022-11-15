const dayJs = require("dayjs")


function birtday(date) {
    const today = dayJs()
    const birtday = dayJs(date)

    const idade = today.diff(birtday, 'y')
    const nextBirtday = birtday.add(idade + 1, 'year')
    const diasRestantes = nextBirtday.diff(today, 'day') +1

    console.log(`Você tem ${idade} Anos`)
    console.log(`Procimo aniversario em: ${nextBirtday.format('DD/MM/YYYY')}`)
    console.log(`Dias restasntes para ${idade} Anos: ${diasRestantes}`)
}


birtday(dayJs("2004-05-10"))