export class Componentess {
    #element = null


    constructor(teg, parent, option) {
        this.teg = teg
        this.parent = parent
        this.option = option
        this.build()
    }

    get getElement() {
        return this.#element
    }

    build() {
        this.#element = document.createElement(this.teg)
        Object.assign(this.#element, this.option)
        return this.#element
    }

    get render() {
        document.querySelector(this.parent).appendChild(this.#element)
    }
}
