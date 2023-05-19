
document.querySelector('#submit').addEventListener('click', (ev)=> {
    ev.preventDefault()

    validEmail()
    validSenha()
    validTell()
})


function validEmail() {
    const email = document.querySelector('#email')
    const emailValue = email.value

    if (emailValue == emailValue.match(/..+\@..+\...+/)) {
        email.style.border = 'solid 1.5px #00ff00'
        document.querySelector('#span-1').style.color = 'transparent'
    }
    else {
        email.style.border = 'solid 1px red'
        document.querySelector('#span-1').style.color = 'red'
    }
}


function validSenha() {
    const senha = document.querySelector('#senha')
    const senhaValue = senha.value

    if (
        senhaValue.length < 8 ||
        !senhaValue.match(/[a-z]/) ||
        !senhaValue.match(/[A-Z]/) ||
        !senhaValue.match(/\d/) ||
        !senhaValue.match(/\W/)
    ) {
        senha.style.border = 'solid 1px red'
        document.querySelector('#span-2').style.color = 'red'
    }
    else {
        document.querySelector('#span-2').style.color = 'transparent'
        senha.style.border = 'solid 1.5px #00ff00'
    }
}


function validTell() {
    const tell = document.querySelector('#tell')
    const tellString = tell.value.replace(/[\sa-zA-Z]/g, "")
    
    console.log(tell.value, tellString)
    if (tellString == tellString.match(/..+\(..\)........../)) {
        document.querySelector('#span-3').style.color = 'transparent'
        tell.style.border = 'solid 1.5px #00ff00'
    }
    else {
        tell.style.border = 'solid 1px red'
        document.querySelector('#span-3').style.color = 'red'
    }
}