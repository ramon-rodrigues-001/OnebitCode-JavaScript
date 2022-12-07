const Comments = require('./Comment')

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.dataPublication = new Date()
        this.comments = []
    }

    addComment(comentarista, comentario) {
        this.comments.push(new Comments(comentarista, comentario))
    }
}

module.exports = Post