/* Make sure .js script is integrated and working. */
console.log('Live at localhost:5500');


// Initialize function for computer generated choice
let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// Create a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase();

    // Create dictionary to map choice
    var gameDict = {
        'rock': 1,
        'paper': 2,
        'scissors': 3
    };

    // Assign values to choices
    playerChoiceVal = gameDict[ps];
    computerChoiceVal = gameDict[computerSelection];

    // Calculate difference
    diffVal = playerChoiceVal - computerChoiceVal;

    if (Math.abs(diffVal) > 1){
       if (diffVal < 0){
        var playerWinBool = true; // Use var instead of let to save variable state
       }
       else {
        var playerWinBool = false;
       }
    }
    else if (diffVal < 0){
        var playerWinBool = false;
    }
    else if (diffVal > 0){
        var playerWinBool = true;
    }
    else if (diffVal === 0){
        return "tie";
    }

    // Declare winner
    if (playerWinBool){
        return 'playerWin';
    }
    else{
        return 'computerWin';
    }
}

// Function to call playRound 5 times
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++){
        let playerSelection = prompt('rock paper scissors?');

        gameOutcome = playRound(playerSelection, getComputerChoice());

        if (gameOutcome === 'tie'){
            console.log("It's a tie!");
            i--; // Do not count the round
        }
        else if (gameOutcome === 'playerWin'){
            console.log("Player wins this round!");
            playerScore++;
        }
        else{
            console.log("Computer wins this round :(");
            computerScore++;
        }
    }

    // Determine winner
    if (playerScore === computerScore){
        console.log("It's a tie!");
    }
    else if (playerScore > computerScore){
        console.log('Player Wins!');
    }
    else{
        console.log("Computer Wins :(");
    }

    console.log(`Summary: Player:${playerScore}, Computer:${computerScore}`)
}

// Call main game function
game()