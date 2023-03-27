

let botScore=0,
	playerScore=0;

document.getElementById("rock").addEventListener('click', playerThrowsRock);
// .onclick=playerThrowsRock;
document.getElementById("paper").addEventListener('click', playerThrowsPaper);
// .onclick=playerThrowsPaper;
document.getElementById("scissors").addEventListener('click', playerThrowsScissors);
// .onclick=playerThrowsScissors;

function playerThrowsRock(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Tie!!" + " "+"I also threw "+ botsWeapon);
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
		displayCompleteMessage("Sorry, you lost!" + " "+"I threw "+ botsWeapon);
	}
	else{
		increasePlayerScore();
		displayCompleteMessage("Aye, you WON!" + " "+"I threw "+ botsWeapon);
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerText=botScore;
	// .innerHTML=botScore;
	displayCompleteMessage("Sorry, you lost!");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerText=playerScore;
	// .innerHTML=playerScore;
	displayCompleteMessage("Aye, You WON!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerText=msg;
	// .innerHTML=msg;
}