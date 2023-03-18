export function pedir(element) {
    const name = element.name2.value
    const address = element.children.address.value
    const paoType = element.children.typePao.value
    const principal = document.querySelector('input[type="radio"]:checked').value

    console.log(name, address, paoType, principal)
    alert(`PEDIDO FEITO \n Cliente: ${name} \n Address: ${address} \n Type Pão: ${paoType} \n Principal: ${principal}`)
}