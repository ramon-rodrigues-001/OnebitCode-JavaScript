import { Component } from "./Component.js";

export class Form extends Component {
    constructor(parents, options) {
        super('form', parents, options)
    }

    addChild(...child) {
        child.forEach(item => {
            this.getElement().appendChild(item.getElement())
        })
    }
}