class Component {
    #element = null

    constructor(teg, parent, options) {
        this.teg = teg
        this.parent = parent
        this.options = options 
    }

    getElement() {
        return this.#element
    }
    
    build() {
        this.#element = document.createElement(this.teg)
        Object.assign(this.#element, this.options)
        return this
    }

    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        }
        else {
            document.querySelector(this.parent).append(this.teg)
        }
    }
}


const title = new Component('h1', 'body')
title.build()
title.render()

document.querySelector('h1').innerText = 'dddfdf'