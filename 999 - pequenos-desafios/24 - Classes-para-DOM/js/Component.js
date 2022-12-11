export class Component {
    #element = null

    constructor(teg, parents, options) {
        this.teg = teg
        this.parents = parents
        this.options = options
        this.build()
    }

    getElement() {
        return this.#element
    }

    build() {
        this.#element = document.createElement(this.teg)
        Object.assign(this.#element, this.options)
        return this.#element
    }

    render() {
        document.querySelector(this.parents).appendChild(this.#element)
    }
}