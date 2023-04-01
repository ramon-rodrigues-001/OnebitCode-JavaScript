import { Componentess } from "./Componentess.js";

export class Label extends Componentess {
    constructor(text, parents, options) {
        super('label', parents, Object.assign({}, options, {textContent: text}))
    }
}