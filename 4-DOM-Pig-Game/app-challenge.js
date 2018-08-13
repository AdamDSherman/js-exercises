/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, lastRoll, roundScore, targetScore, activePlayer, gamePlaying;

// Call init function to set starting vars
init();

//document.querySelector('#current-' + activePlayer).textContent = dice;


document.querySelector('.btn-roll').addEventListener('click', function() {

	if (gamePlaying === false) {
		return;
	}

	var dice = Math.floor(Math.random() * 3) + 1;
	var dice2 = Math.floor(Math.random() * 3) + 1;
	var diceDOM = document.querySelector('.dice');
	var dice2DOM = document.querySelector('.dice-2');
	diceDOM.style.display = 'block';
	dice2DOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	dice2DOM.src = 'dice-' + dice2 + '.png';

	console.log('current ' + dice + ' last ' + lastRoll);

	//if (dice === 1 || (dice === 6 && lastRoll === 6)) {
	if (dice === 1 || dice2 === 1) {
		console.log('next');
		nextPlayer();
	}
	else if (dice === 3 && lastRoll === 3) {
		scores[activePlayer] = 0;
		document.querySelector('#current-' + activePlayer).textContent = 0;
    	nextPlayer();
	}
	else {
		roundScore += dice + dice2;
		lastRoll = dice;
		lastRoll2 = dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} 

});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying === false) {
		return;
	}

	scores[activePlayer] += roundScore;

	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	if(scores[activePlayer] >= targetScore) {
		document.getElementById('name-' + activePlayer).textContent = 'WINNER';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice-2').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	}
	else{
		nextPlayer();
	}

});

document.querySelector('.btn-set').addEventListener('click', function() {
	targetScore = document.querySelector('.target-input').value;

	var score0 = document.querySelector('#score-0').textContent;
	var score1 = document.querySelector('#score-1').textContent;

	console.log(targetScore + ' ' + score0);

	if (score0 >= targetScore || score1 >= targetScore) {
		console.log('no winners');
	}
});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	lastRoll = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	lastRoll = 0;
	targetScore = document.querySelector('.target-input').value;

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice-2').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('actve');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('actve');
}






