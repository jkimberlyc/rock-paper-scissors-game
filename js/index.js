var choices = ["Rock", "Paper", "Scissors"];
var matchResult = document.getElementById("result");
var botChar = document.querySelector("#botCharacter");
var playerChar = document.querySelector("#playerCharacter");
var playerScore = document.getElementById("playerScore");
var botScore = document.getElementById("botScore");
var playerScoreCount=0, botScoreCount = 0;
playerScore.innerHTML = "You: " + playerScoreCount;
botScore.innerHTML = botScoreCount + " :Bot";



function fight(playerChoice){
    resetChars();
    let botChoice = Math.floor(Math.random() * 3);
    // let result = "You chose " + choices[playerChoice] + ". Bot chose " + choices[botChoice] + ". ";
    let result = "";
    let winner = "";

    if(playerChoice===botChoice){
        result += "IT'S A TIE!";
        botWin();
        playerWin();
        winner="tie";
    }
    else if(playerChoice===0){
        if(botChoice===1){
            result += "YOU LOSE!"
            botScoreCount++;
            botWin();
            playerLoss();
            winner="bot";
        }
        else if(botChoice===2){
            result += "YOU WIN!"
            playerScoreCount++;
            botLoss();
            playerWin();
            winner="player";
        }
    }
    else if(playerChoice===1){
        if(botChoice===0){
            result +="YOU WIN!";
            playerScoreCount++;
            botLoss();
            playerWin();
            winner="player";
        }
        else if(botChoice===2){
            result += "YOU LOSE!";
            botScoreCount++;
            botWin();
            playerLoss();
            winner="bot";
        }
    }
    else if(playerChoice===2){
        if(botChoice==0){
            result += "YOU LOSE!";
            botScoreCount++;
            botWin();
            playerLoss();
            winner="bot";
        }
        else if(botChoice==1){
            result += "YOU WIN!"
            playerScoreCount++;
            botLoss();
            playerWin();
            winner="player";
        };
    }

    updatePlayerMove(playerChoice);
    updateBotMove(botChoice);
    matchResult.classList.remove("invisible");
    matchResult.innerHTML = result;
    recordMatch(playerChoice, botChoice, winner);
    updateScores();
}

function recordMatch(choice1, choice2, winner){
    let history = document.getElementById("history");

    if(history.childElementCount > 6){
        history.removeChild(history.firstElementChild);
    }

    let match = document.createElement("div");
    match.innerHTML = choices[choice1] + " vs. " + choices[choice2];
    match.classList.add("h5", "text-start", "m-1", "w-100");
    if(winner==="player") match.classList.add("text-success");
    else if(winner==="bot") match.classList.add("text-danger");
    else match.classList.add("text-secondary");

    history.appendChild(match);
}

function updateScores(){
    botScore.innerHTML = botScoreCount + " :Bot";
    playerScore.innerHTML = "You: " + playerScoreCount;
}

function updatePlayerMove(playerMove){
    let player = document.getElementById("playerSide");
    if(player.childElementCount ===3 ) player.removeChild(player.children[0]);

    let item = document.createElement("img");
    item.style.width = "80px";
    item.style.height = "80px";
    item.classList.add("me-auto");
    item.id = "playerMove"

    if(playerMove === 0) item.src = "img/rock.png";
    else if(playerMove === 1) item.src = "img/paper.png";
    else if(playerMove === 2) item.src = "img/scissors.png";

    player.insertBefore(item, player.children[0]);
}

function updateBotMove(botMove){
    let bot = document.getElementById("botSide");
    if(bot.childElementCount === 3) bot.removeChild(bot.children[0]);
    
    let item = document.createElement("img");
    item.style.width = "80px";
    item.style.height = "80px";
    item.classList.add("ms-auto");
    item.id = "botMove"

    if(botMove === 0) item.src = "img/rock.png";
    else if(botMove === 1) item.src = "img/paper.png";
    else if(botMove === 2) item.src = "img/scissors.png";

    bot.insertBefore(item, bot.children[0]);
}

function botLoss(){
    botChar.src="img/botLoss.gif";

    setTimeout(() => {
    botChar.src="img/botDeath.png";
      }, 440);
}

function playerWin(){
    playerChar.src="img/playerWin.gif";
}

function playerLoss(){
    playerChar.src="img/playerLoss.gif";

    setTimeout(() => {
        playerChar.src="img/playerDeath.png";
          }, 440);
}

function botWin(){
    botChar.src="img/botWin.gif";
}

function resetChars(){
    botChar.src="img/botIdle.gif";
    playerChar.src="img/playerIdle.gif";
}
