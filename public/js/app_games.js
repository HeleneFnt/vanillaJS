let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        return 'rock';
    } else if (computerInput === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === 'bomb') {
        return 'La méga win';
    } else if (playerChoice === computerChoice) {
        return 'Tied';
    } else if ((playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissors')) {
        playerScore++;
        return 'Won';
    } else {
        computerScore++;
        return 'Lost';
    }
}

function updateScore() {
    document.getElementById('player-score').innerText = "Votre score: " + playerScore;
    document.getElementById('computer-score').innerText = "Score de l'ordinateur: " + computerScore;
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let whoWin = findWinner(playerChoice, computerChoice);


    console.log("Player choice:", playerChoice);
    console.log("Computer choice:", computerChoice);
    console.log("Result:", whoWin);

    // Affichage du résultat
    let chifoumiContainer = document.createElement('div');
    chifoumiContainer.classList.add('chifoumi');
    chifoumiContainer.innerHTML = `
        <p>Player choice: ${playerChoice}</p>
        <p>Computer choice: ${computerChoice}</p>
        <p>Result: ${whoWin}</p>
        <button id="replay-button">Rejouer</button>
        <p id="player-score">Votre score: ${playerScore}</p>
        <p id="computer-score">Score de l'ordinateur: ${computerScore}</p>
    `;
    document.body.appendChild(chifoumiContainer);

    // Mise à jour du score
    updateScore();

    // Gestion du bouton Rejouer
    document.getElementById('replay-button').addEventListener('click', () => {
        chifoumiContainer.remove(); // Supprime l'affichage précédent
        playerScore = 0; // Réinitialisation des scores
        computerScore = 0;
        updateScore();
    });
}

// Gestion des clics sur les boutons de choix
document.getElementById('rock-button').addEventListener('click', () => playGame('rock'));
document.getElementById('paper-button').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors-button').addEventListener('click', () => playGame('scissors'));
