do {
    let fleg = prompt("Esconha uma Opição \n(1) Opição1 \n(2) Opição2 \n(3) Opição3 \n(4) Encerar")

    if (fleg == 1) {
        alert("Voçe escolheu a opição 1")
    }
    else if (fleg == 2) {
        alert("Voçe escolheu a opição 2")
    }
    else if (fleg == 3) {
        alert("Voçe escolheu a opição 3")
    }
    else if (fleg == 4) {
        alert("Encerando...")
        break
    }
} while (true)

alert("Projeto encerado com suceso")