const Post = require('./Post.js')

class Author {
    constructor(autor) {
        this.autor = autor
        this.post = []
    }

    createPost(title, body) {
        const post = new Post(title, body, this)
        this.post.push(post)
        return post
    }
}

module.exports = Author