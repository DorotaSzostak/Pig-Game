/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x=document.querySelector('#score-0').textContent;
//console.log(x);

var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

var gamePlaying = true;
var lastDice;
var score;



init();



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //random number
    var dice = Math.floor(Math.random()*6) + 1;
    var secondDice = Math.floor(Math.random()*6) + 1;
    // display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
        
    var secondDiceDOM = document.querySelector('.dice-2');
    secondDiceDOM.style.display = 'block';
    secondDiceDOM.src = 'dice-' + secondDice + '.png';
// player looses currnet score when one of dices is a 1
        if(dice === 1 && secondDice ===1){
            scores[activePlayer]=0;
            document.querySelector('#score-' + activePlayer).textContent='0';
            nextPlayer();
        } else {
            roundScore = (dice + secondDice) + roundScore;
            document.querySelector('#current-' + activePlayer).textContent=roundScore;
        }
    //Player looses score
//    if(dice === 6 && lastDice ===6) {
//        console.log("rolled twice");
//        scores[activePlayer] = 0;
//        document.querySelector('#score-' + activePlayer).textContent='0';
//        lastDice = -1;
//        nextPlayer();
//    // update the round score IF the rolled number was NOT a 1
//    } else if(dice !== 1){
//        //add score
//        roundScore = (dice + secondDice) + roundScore ;
//        document.querySelector('#current-' + activePlayer).textContent = roundScore;
//        lastDice=dice;
//    } else {
//        //next player - ternary operator
//    lastDice= -1;
//    nextPlayer();
//        
//    } 
//        lastDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
      // add current score to global score
    scores[activePlayer] += roundScore;
    // update user interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector("#winnerScore").value;
    var winningScore;
    // undefined, 0, null or "" are coerced to false
    if(input){
        winningScore = input;
    } else {
        winningScore = 100;
    }
    //check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        //next player
    nextPlayer();
    }  
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer (){
            activePlayer === 0 ? activePlayer =1 : activePlayer =0;
//        if(activePlayer === 0) {
//            activePlayer = 1;
//        } else {
//            activePlayer = 0;
//        }
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = "none";
    document.querySelector('.dice-2').style.display = "none";
    }


function init (){
var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;
var gamePlaying = true;


document.querySelector('.dice').style.display='none';
document.querySelector('.dice-2').style.display='none';
    
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('#name-0').textContent = "Player 1";
document.querySelector('#name-1').textContent = "Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

