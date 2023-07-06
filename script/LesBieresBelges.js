const questions = [
    {
        id: 1,
        question: "Question 1: Combien de marques de bières trappistes existe-t-il en Belgique ?",
        proposition1: "6",
        proposition2: "12",
        proposition3 : null,
        proposition4 : null,
        reponse: "6"
    },
    {
        id: 2,
        question: "Question 2: Quelle est la plus ancienne brasserie de Belgique ?",
        proposition1: "Brasserie d'Orval",
        proposition2: "Brasserie Artois",
        proposition3 : null,
        proposition4 : null,
        reponse: "Brasserie Artois"
    },
    {
        id: 3,
        question: "Question 3: Quelle est la bière belge la plus forte en termes d'alcool ?",
        proposition1: "Struise Black",
        proposition2: "Jupiler",
        proposition3 : null,
        proposition4 : null,
        reponse: "Struise Black"
    },
    {
        id: 4,
        question: "Question 4: Quel est le pourcentage d'alcool moyen dans les bières belges  ?",
        proposition1: "7",
        proposition2: "9",
        proposition3 : null,
        proposition4 : null,
        reponse: "7"
    },
    {
        id: 5,
        question: "Question 5: Quel est le principal ingrédient utilisé dans la bière belge ?",
        proposition1: "Orge",
        proposition2: "Malte",
        proposition3 : null,
        proposition4 : null,
        reponse: "Malte"
    },
    {
        id: 6,
        question: "Question 6: Quelle est la plus grande brasserie de bière belge ?",
        proposition1: "Brasserie Duvel",
        proposition2: "InBev",
        proposition3 : null,
        proposition4 : null,
        reponse: "InBev"
    },
    {
        id: 7,
        question: "Question 7: Quel est le processus de fermentation utilisé pour produire la bière belge ?",
        proposition1: "Fermentation haute",
        proposition2: "Fermentation basse",
        proposition3 : null,
        proposition4 : null,
        reponse: "Fermentation haute"
    },
    {
        id: 8,
        question: "Question 8: Quelle est la bière belge traditionnelle servie dans un verre tulipe ?",
        proposition1: "Gueuze",
        proposition2: "Jupiler",
        proposition3 : null,
        proposition4 : null,
        reponse: "Gueuze"
    },
    {
        id: 9,
        question: "Question 9: Quelle est la bière belge brassée avec des cerises  ?",
        proposition1: "Kriek",
        proposition2: "Chimay",
        proposition3 : null,
        proposition4 : null,
        reponse: "Kriek"
    },
    {
        id: 10,
        question: "Question 10: Combien de temps la bière Orval est-elle vieillie avant d'être commercialisée ?",
        proposition1: "3mois",
        proposition2: "6mois",
        proposition3 : null,
        proposition4 : null,
        reponse: "6mois"
    },  

    {
        id: 11,
        question: "Question 11: Quel est le nom de la bière belge brassée avec du sucre candi brun ?",
        proposition1: "Orval",
        proposition2: "Tripel",
        proposition3: "Duvel",
        proposition4: "Chimay",
        reponse: "Tripel"
    },
    {
        id: 12,
        question: "Question 12: Combien de variétés de bière Chimay sont actuellement produites ?",
        proposition1: "3",
        proposition2: "4",
        proposition3: "5",
        proposition4: "6",
        reponse: "3"
    },
    {
        id: 13,
        question: "Question 13: Quelle est la puissance de la Chimay Rouge en pourcentage d'alcool  ?",
        proposition1: "4",
        proposition2: "7",
        proposition3: "9",
        proposition4: "11",
        reponse: "7"
    },
    {
        id: 14,
        question: "Question 14: Combien de levures différentes sont utilisées dans la fermentation de la bière Orval?",
        proposition1: "1",
        proposition2: "3",
        proposition3: "5",
        proposition4: "7",
        reponse: "1"
    },
    {
        id: 15,
        question: "Question 15: Quel est le pourcentage d'alcool de la Duvel  ?",
        proposition1: "4.8",
        proposition2: "5.6",
        proposition3: "6.8",
        proposition4: "8.5",
        reponse: "8.5"
    },
    {
        id: 16,
        question: "Question 16: Dans quelle région de Belgique se trouve l'abbaye d'Orval ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "Wallonie"
    },
    {
        id: 17,
        question: "Question 17: Quelle est la signification du mot Duvel en francais ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "Diable"
    },
    {
        id: 18,
        question: "Question 18: Quel est le nom de la rivière qui traverse le site de l'abbaye d'Orval  ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "Orneau"
    },
    {
        id: 19,
        question: "Question 19: Dans quelle ville belge se trouve la brasserie Cantillon ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "Bruxelles"
    },
    {
        id: 20,
        question: "Question 20: Quelle ville belge est associée à la bière Chimay ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "Chimay"
    },

]

let questionIndex = 0;
let changementQuestionTimer;
let tempsRestant;
let score = 0;
const timeElement = document.getElementById("timer");

function demarrerLeQuizz() {
    const boutonPret = document.getElementById("btnPret");
    boutonPret.remove();
    afficherQuestions();
}
function verificationChangementQuestionTimer() {
    timeElement.textContent = "temps restant : " + tempsRestant +" secondes";
    tempsRestant--;
if(tempsRestant < 0){
    clearTimeout(changementQuestionTimer)
    JSalertFaux()
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Temps dépassé !!! La Bonne réponses était : '+ questions[questionIndex].reponse,
        timer: 3000,
        timerProgressBar: true,
});
    questionSuivante();
}
}

function initialisationDuTimer() {
    tempsRestant = 23;
    changementQuestionTimer = setInterval(verificationChangementQuestionTimer,1000);
    verificationChangementQuestionTimer();
}

function afficherLeScore() {
    const scoreContainer = document.getElementById("score");
    scoreContainer.textContent = "Votre score : " + score;
}

function afficherQuestions() {
    const questionContainer = document.getElementById("question");
    const question = questions[questionIndex].question;
    questionContainer.textContent = question;

    const propositionContainer = document.getElementById("propositions");
    propositionContainer.innerHTML = "";

    const proposition1 = questions[questionIndex].proposition1;
    const proposition2 = questions[questionIndex].proposition2;
    const proposition3 = questions[questionIndex].proposition3;
    const proposition4 = questions[questionIndex].proposition4;

if (proposition1 != null && proposition3 == null) {
    const bouton1 = document.createElement("button");
    bouton1.textContent = proposition1;
    bouton1.addEventListener("click", () => {
    verifierReponse(proposition1);
});
    const bouton2 = document.createElement("button");
    bouton2.textContent = proposition2;
    bouton2.addEventListener("click", () => {
    verifierReponse(proposition2);
});
    propositionContainer.appendChild(bouton1);
    propositionContainer.appendChild(bouton2);
}
else if (proposition3 != null) {
    const bouton1 = document.createElement("button");
    bouton1.textContent = proposition1;
    bouton1.addEventListener("click", () => {
    verifierReponse(proposition1);
});
    const bouton2 = document.createElement("button");
    bouton2.textContent = proposition2;
    bouton2.addEventListener("click", () => {
    verifierReponse(proposition2);
});
    const bouton3 = document.createElement("button");
    bouton3.textContent = proposition3;
    bouton3.addEventListener("click", () => {
    verifierReponse(proposition3);
});
    const bouton4 = document.createElement("button");
    bouton4.textContent = proposition4;
    bouton4.addEventListener("click", () => {
    verifierReponse(proposition4);
});
    propositionContainer.appendChild(bouton1);
    propositionContainer.appendChild(bouton2);
    propositionContainer.appendChild(bouton3);
    propositionContainer.appendChild(bouton4);
}
else {
    const input = document.createElement("input");
    input.type = "text";
    const boutonValider = document.createElement("button");
    boutonValider.textContent = "Envoyer la réponse";
    boutonValider.addEventListener("click", () => {
    verifierReponse(input.value);
})
    propositionContainer.appendChild(input);
    propositionContainer.appendChild(boutonValider);

}
    initialisationDuTimer();
}
function questionSuivante() {
    clearTimeout(changementQuestionTimer);
    questionIndex++;
    afficherQuestions();
}
function verifierReponse(reponse){
    clearTimeout(changementQuestionTimer);
    const reponseCorrecte = questions[questionIndex].reponse;
    let points = 0;
if (questionIndex < 10) {
    points = 1;
}
else if (questionIndex < 15) {
    points = 3;
}
else {
    points = 5;
}
if (reponse.toLowerCase() === reponseCorrecte.toLowerCase()) {
    JSalertCorrecte();
    score = score + points;
    localStorage.setItem("score",score);
}
else {
    JSalertFaux();
}
    afficherLeScore();
    setTimeout(questionSuivante,1000);
}
function JSalertCorrecte() {
    Swal.fire({
        title: 'Bravo!',
        text: 'Bonne réponse!!',
        icon: 'success',
        confirmButtonText: 'Cool',
        timer: 3000,
        timerProgressBar: true,
    });
}
function JSalertFaux() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Mauvaise Réponse!! La Bonne réponses était : '+ questions[questionIndex].reponse,
        timer: 3000,
        timerProgressBar: true,
    });
}
function versPageScore() {
    window.location.href = "/index/PageScore.html";
}