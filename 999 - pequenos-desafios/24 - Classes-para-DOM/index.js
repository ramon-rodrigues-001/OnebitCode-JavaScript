import { Component } from "./js/Component.js";
import { Form } from "./js/Form.js";
import { Input } from "./js/Input.js";
import { Label } from "./js/Label.js";

const title = new Component('h1', 'body', { textContent: 'Ola Mundo!!' })
console.log(title)
title.render()



title.tag = 'h3'
title.build().render()



const form = new Form('body')
form.addChild(
    new Component('hr'),
    new Label('Nome: ', form, { htmlFor: 'input' }),
    new Input(form, { id: 'input' }),
    new Component('br'),
    new Component('br'),
    new Label('Idade: ', form, { htmlFor: 'input2' }),
    new Input(form, { id: 'input2' })
)
form.render()