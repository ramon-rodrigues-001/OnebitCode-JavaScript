const Comment = require('./Comment.js')

class Post {
    constructor(title, body, autor) {
        this.title = title
        this.body = body
        this.autor = autor
        this.datePublication = new Date()
        this.comments = []
    }

    addComment(name, comment) {
        this.comments.push(new Comment(name, comment))
    }
}

module.exports = Post