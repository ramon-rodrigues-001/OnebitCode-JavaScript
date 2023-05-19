const Post = require('./Post.js')

class Author {
    constructor(autor) {
        this.autor = autor
        this.posts = []
    }

    createPost(title, body) {
        const post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author