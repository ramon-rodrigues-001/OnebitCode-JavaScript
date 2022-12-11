import { Component } from "./Component.js";

export class Form extends Component {
    constructor(parent, options) {
        super('form', parent, options)
    }

    addChild(...child) {
        child.forEach(elemento => {
            this.getElement().appendChild(elemento.getElement())
        })
    }
}