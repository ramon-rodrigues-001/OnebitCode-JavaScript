const Post = require('./Post.js')

class Author {
    constructor(autor) {
        this.author = autor
        this.posts = []
    }

    createPost(title, body) {
        let post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author