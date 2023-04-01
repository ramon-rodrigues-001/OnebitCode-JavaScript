import { Componentess } from "./Componentess.js";

export class Form extends Componentess {
    constructor(parent, option) {
        super('form', parent, option)
    }

    addChild(...child) {
        child.forEach(item => {
            this.getElement.appendChild(item.getElement)
        })
    }
}