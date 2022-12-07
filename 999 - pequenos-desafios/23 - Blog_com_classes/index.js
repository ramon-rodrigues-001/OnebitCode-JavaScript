const Author = require('./Author')

let ramon = new Author('Ramon Rodrigues')

let post = ramon.creatPost('The king of Pangeia', 'Um garoto que tranformou os trumas em habilidade de guerra')

post.addComment('Viny', 'Muito Bom')
post.addComment('Ana', 'Intereçante')

console.log(ramon)
