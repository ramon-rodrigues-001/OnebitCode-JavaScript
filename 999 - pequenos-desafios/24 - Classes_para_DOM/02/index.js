import { Componentess } from "./entities/Componentess.js";
import { Form } from "./entities/Form.js";
import { Input } from "./entities/Input.js";
import { Label } from "./entities/Label.js";


const title = new Componentess('h1', 'body', { textContent: 'Ola, Mundo!!.' })
title.render
console.log(title)

const formulario = new Form('body', { id: 'formulario' })
formulario.addChild(
    new Componentess('hr'),
    new Label('Nome: ', formulario, { htmlFor: 'input' }),
    new Input(formulario, { id: 'input' }),
    new Componentess('br'),
    new Componentess('br'),
    new Label('Idade: ', formulario, { htmlFor: 'input2' }),
    new Input(formulario, { id: 'input2' }),
)
formulario.render