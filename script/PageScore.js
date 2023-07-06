let pseudo = localStorage.getItem("pseudo")
let pseudoContainer = document.getElementById("pseudo")
pseudoContainer.textContent = pseudo.toString();


let scoreContainer = document.getElementById("score");
let score = localStorage.getItem("score");
scoreContainer.textContent = "Votre score : " + score; 