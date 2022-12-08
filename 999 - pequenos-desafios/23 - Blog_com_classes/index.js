const Author = require('./Author.js')


let ramon = new Author('Ramon Rodrigues')

let post = ramon.createPost('The king of Percia', 'loren ipyso... Um garoto que se tornou rei de uma nação com estrategia e suraterismo etc etc etc mais esse texto ficou pequeno e estou incrementando um pouco de balela')

post.addComment('Ana', 'Muito Bom')
post.addComment('Viny', 'Intereçante parabens!!')

console.log(ramon)
console.log(post)