import { Component } from "./Component.js";

export class Label extends Component {
    constructor(text, parents, options) {
        super('label', parents, Object.assign({}, options, {textContent: text}))
    }
}