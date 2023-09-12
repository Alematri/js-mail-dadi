// Array con le email autorizzate
const emailAutorizzate = ["alessandro@gmail.com", "alematri@gmail.com", "alessandromatri@gmail.com", "alessandromatricardi@gmail.com", "a@a.com"];

// Variabili
const pageTitle = document.getElementById("pageTitle");
const emailGroup = document.getElementById("emailGroup");
const emailInput = document.getElementById("email");
const verifyAccessButton = document.getElementById("verifyAccess");
const rollDiceButton = document.getElementById("rollDice");
const messageElement = document.getElementById("message");
const resultElement = document.getElementById("result");
let accessoConcesso = false;

// Verifica dell'accesso
verifyAccessButton.addEventListener("click", function () {
    if (!accessoConcesso) {
        const email = emailInput.value;
        let accessoTrovato = false;

        // Cicla attraverso l'array delle email autorizzate
        for (const emailAutorizzata of emailAutorizzate) {
            if (emailAutorizzata === email) {
                accessoTrovato = true;
            }
        }

        if (accessoTrovato) {
            accessoConcesso = true;
            pageTitle.textContent = "Lancia un dado";
            emailGroup.style.display = "none";
            verifyAccessButton.style.display = "none";
            rollDiceButton.style.display = "block";
            messageElement.textContent = "";
        } else {
            messageElement.textContent = "Accesso negato. L'email non è autorizzata.";
        }
    }
});

// Lancio del dado
rollDiceButton.addEventListener("click", function () {
    if (accessoConcesso) {
        const playerRoll = Math.floor(Math.random() * 6) + 1;
        const computerRoll = Math.floor(Math.random() * 6) + 1;
        let resultMessage = `Il giocatore ha ottenuto ${playerRoll}, il computer ha ottenuto ${computerRoll}. `;

        if (playerRoll > computerRoll) {
            resultMessage += "Hai vinto!";
        } else if (playerRoll < computerRoll) {
            resultMessage += "Hai perso.";
        } else {
            resultMessage += "Hai pareggiato.";
        }

        resultElement.textContent = resultMessage;
        resultElement.style.display = "block";
    }
});
