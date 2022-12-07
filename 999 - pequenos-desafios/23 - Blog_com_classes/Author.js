const Post = require("./Post")

class Author {
    constructor(nome) {
        this.author = nome
        this.posts = []
    }

    creatPost(title, body) {
        let post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author