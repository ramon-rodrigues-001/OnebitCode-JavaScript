import { Component } from "./js/Component.js";
import { Form } from "./js/Form.js";
import { Input } from "./js/Input.js";
import { Label } from "./js/Label.js";


const title = new Component('h1', 'body', { textContent: 'Ola, Mundo!!.' })
title.render()
console.log(title)

const formulario = new Form('body', { id: 'formulario' })
formulario.addChild(
    new Component('hr'),
    new Label('Nome: ', formulario, { htmlFor: 'input' }),
    new Input(formulario, { id: 'input' }),
    new Component('br'),
    new Component('br'),
    new Label('Idade: ', formulario, { htmlFor: 'input2' }),
    new Input(formulario, { id: 'input2' }),
)
formulario.render()