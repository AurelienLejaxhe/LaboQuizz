function enregisterPseudo() {
    let pseudoInput = document.getElementById("pseudo");
    let pseudo = pseudoInput.value;
    localStorage.setItem("pseudo", pseudo);
}

