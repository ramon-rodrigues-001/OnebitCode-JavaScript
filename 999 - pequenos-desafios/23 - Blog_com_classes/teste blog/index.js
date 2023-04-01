const Author = require('./Author.js')
const Post = require('./Post.js')

const ramon = new Author('Ramon Rodrgues')

const post = ramon.createPost('Exiled', 'Um garoto que se tornou rei de uma nação com estrategia e suraterismo etc etc etc mais esse texto ficou pequeno e estou incrementando um pouco de balela')

post.addComment('Ana', 'Muito Bom')
post.addComment('Viny', 'Intereçante parabens!!')

console.log(ramon)
console.log(post)