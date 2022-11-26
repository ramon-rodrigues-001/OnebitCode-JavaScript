// Person
const Person = require('./Person.js')

// Address
const Address = require('./Address.js')

const addr = new Address('Grota do evangelio', 59, 'Capelinha', 'MG')
const ssss = new Person('Ramon', addr.fullAddress())

console.log(ssss)