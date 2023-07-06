const questions = [
    {
        id: 1,
        question: "Question 1: Quel club belge a remporté la coupe d'Europe des vainqueurs de coupe en 1976 ?",
        proposition1: "Standard",
        proposition2: "Anderlecht",
        proposition3 : null,
        proposition4 : null,
        reponse: "Anderlecht"
    },
    {
        id: 2,
        question: "Question 2: Qui est le meilleur buteur de l'histoire du football belge ?",
        proposition1: "Benteke",
        proposition2: "Lukaku",
        proposition3 : null,
        proposition4 : null,
        reponse: "Lukaku"
    },
    {
        id: 3,
        question: "Question 3: Quel est le club le plus titré du championnat belge ?",
        proposition1: "Anderlecht",
        proposition2: "Charleroi",
        proposition3 : null,
        proposition4 : null,
        reponse: "Anderlecht"
    },
    {
        id: 4,
        question: "Question 4: Combien de fois la Belgique a-t-elle participé à la coupe du monde de la FIFA ?",
        proposition1: "14x",
        proposition2: "7x",
        proposition3 : null,
        proposition4 : null,
        reponse: "14x"
    },
    {
        id: 5,
        question: "Question 5: Quel joueur a remporté le soulier d'or en 2020 ?",
        proposition1: "Hazard",
        proposition2: "DeBruyne",
        proposition3 : null,
        proposition4 : null,
        reponse: "DeBruyne"
    },
    {
        id: 6,
        question: "Question 6: Qui est l'entraineur actuel de l'équipe nationale belge ?",
        proposition1: "Martinez",
        proposition2: "Tedesco",
        proposition3 : null,
        proposition4 : null,
        reponse: "Tedesco"
    },
    {
        id: 7,
        question: "Question 7: Quel joueur belge est le joueur le plus chère de l histoire des transferts ?",
        proposition1: "Hazard",
        proposition2: "Lukaku",
        proposition3 : null,
        proposition4 : null,
        reponse: "Hazard"
    },
    {
        id: 8,
        question: "Question 8: De combien est le record de victoires consécutives du championnat belge ?",
        proposition1: "9",
        proposition2: "12",
        proposition3 : null,
        proposition4 : null,
        reponse: "9"
    },
    {
        id: 9,
        question: "Question 9: Quelle équipe belge a remporté la Coupe UEFA en 1983  ?",
        proposition1: "Genk",
        proposition2: "Standard",
        proposition3 : null,
        proposition4 : null,
        reponse: "Standard"
    },
    {
        id: 10,
        question: "Question 10: Thibault Courtois a-t-il été élu meilleur gardien de la coupe du monde 2018  ?",
        proposition1: "Vrai",
        proposition2: "Faux",
        proposition3 : null,
        proposition4 : null,
        reponse: "Vrai"
    },  

    {
        id: 11,
        question: "Question 11: Quel est le club le plus titré en Coupe de la Ligue belge ?",
        proposition1: "Standard",
        proposition2: "Anderlecht",
        proposition3: "Bruges",
        proposition4: "Genk",
        reponse: "Bruges"
    },
    {
        id: 12,
        question: "Question 12: Quel club a été champion de belgique en 2017 ?",
        proposition1: "Standard",
        proposition2: "Anderlecht",
        proposition3: "Bruges",
        proposition4: "Genk",
        reponse: "Anderlecht"
    },
    {
        id: 13,
        question: "Question 13: Quel est le surnom de l'équipe national belge féminine ?",
        proposition1: "RedDevil",
        proposition2: "RedFlames",
        proposition3: "Selecao",
        proposition4: "Les Bleus",
        reponse: "RedFlames"
    },
    {
        id: 14,
        question: "Question 14: Quel joueur a remporté le soulier d'or en 2019 ?",
        proposition1: "Onuachu",
        proposition2: "Vormer",
        proposition3: "Gilet",
        proposition4: "Vanaken",
        reponse: "Vanaken"
    },
    {
        id: 15,
        question: "Question 15: Qui est le joueur belge avec le plus grand nombre de sélections en équipe nationale ?",
        proposition1: "Vertonghen",
        proposition2: "Courtois",
        proposition3: "Kompany",
        proposition4: "Lukaku",
        reponse: "Vertonghen"
    },
    {
        id: 16,
        question: "Question 16: En quel année l'équipe nationale belge a été fondée ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "1904"
    },
    {
        id: 17,
        question: "Question 17: Combien de fois la Belgique a-t-elle remporté la Coupe d'Europe des moins de 21 ans ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "0"
    },
    {
        id: 18,
        question: "Question 18: Quel joueur belge a remporté le titre de meilleur buteur de la Premier League anglaise en 2021 ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "Lukaku"
    },
    {
        id: 19,
        question: "Question 19: Quelle équipe a éliminé la Belgique en demi-finales de la Coupe du Monde 2018 ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "France"
    },
    {
        id: 20,
        question: "Question 20: Quand la Belgique a-t-elle remporté sa première médaille d'or olympique en football ?",
        proposition1: null,
        proposition2: null,
        proposition3: null,
        proposition4: null,
        reponse: "1920"
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

