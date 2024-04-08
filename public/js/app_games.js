let playerScore = 0;
let computerScore = 0;


function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase();
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors' || playerInput === 'bomb') {
        return playerInput;
    } else {
        console.log("Erreur! Veuillez choisir entre 'rock', 'paper', 'scissors' ou 'bomb'.");
        return null;
    }
}

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
    document.getElementById('player-score').innerText = "Player score: " + playerScore;
    document.getElementById('computer-score').innerText = "Computer score: " + computerScore;
}

function playGame() {
    const uChoice = getPlayerChoice(prompt("Votre choix ('rock', 'paper' ou 'scissors') ?"));
        if (uChoice === null) {
        return ; // Quitte la fonction si le choix du joueur est invalide
    }
    const computerChoice = getComputerChoice();
    let whoWin =  findWinner(uChoice, computerChoice);

    console.log("Player choice:", uChoice);
    console.log("Computer choice:", computerChoice);
    console.log("Result:"+ whoWin);

    // Affichage du résultat dans le document
    let chifoumiContainer = document.createElement('div');
    chifoumiContainer.classList.add('chifoumi');
    chifoumiContainer.innerHTML = `
        <p>Player choice: ${uChoice}</p>
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
        playGame(); // Relance le jeu
    });
}

// Ajout d'un écouteur d'événement pour le bouton de démarrage du jeu
document.getElementById('start-game-button').addEventListener('click', playGame);
