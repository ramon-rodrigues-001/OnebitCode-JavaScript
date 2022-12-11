import { Component } from "./js/Component.js";
import { Form } from "./js/Form.js";
import { Input } from "./js/Input.js";
import { Label } from "./js/Label.js";

const title = new Component('h1', 'body', { textContent: 'Ola Mundo!!' })
console.log(title)
title.render()


const form = new Form('body')
form.addChild(
    new Label('Nome: ', form, { htmlFor: 'input' }),
    new Input(form, { id: 'input' })
)
