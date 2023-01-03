const Comment = require('./Comment.js')

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.datePublication = new Date()
        this.comment = []
    }

    addComment(nome, comentario) {
        this.comment.push(new Comment(nome, comentario))
    }
}

module.exports = Post