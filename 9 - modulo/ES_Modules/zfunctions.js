// UTILIZE O EXPORT ANTES DO CODIGO QUE DESEJA EXPORTAR

export function label(Attibutes) {
    const element = document.createElement('label')
    Object.assign(element, Attibutes)
    return element
}

export function input(Attributes) {
    const element = document.createElement('input')
    Object.assign(element, Attributes)
    return element
}

export function br() {
    const element = document.createElement('br')
    return element
}

// Ou você pode fazer dessa forma abaixo
// export {label, input, br}
