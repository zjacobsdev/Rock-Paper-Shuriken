
//ZAHMIR'S VERSION

var botScore=0, playerScore=0;
var botsWeapon;
var playerThrowsRock
var playerThrowsPaper
var playerThrowsScissors



document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

//
if (playerThrowsRock == true){
	playerThrowsRock();
}
if (playerThrowsPaper == true) {
	playerThrowsPaper();
}
if (playerThrowsScissors == true) {
	playerThrowsScissors();
}




// player throws 1 of the 3 options: rock,paper, scissors

function playerThrowsRock(){
	 botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsPaper(){
	botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}

function playerThrowsScissors(){
	botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}

//Bot gets Random Weapon
function getRandomWeapon(){

	var randomNumber=Math.random();

	if(randomNumber <.3333){
		botsWeapon="scissors";

	}else if (randomNumber >.3333 && randomNumber <.6666) {
		botsWeapon="rock";

	}else if(randomNumber >.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}


// Compares player weapon  and bot's weapon to determine winner
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Draw");
	}
	if((botsWeapon=="scissors" && playersWeapon=="paper") ||
 					(botsWeapon=="paper" && playersWeapon=="rock") ||
					(botsWeapon=="rock" && playersWeapon=="scissors")){
						increaseBotScore();
	}
	if ((botsWeapon=="paper" && playersWeapon=="scissors") ||
 			(botsWeapon=="rock" && playersWeapon=="paper") ||
			(botsWeapon=="scissors" && playersWeapon=="rock")) {
		increasePlayerScore();
	}
}


// increase bots + player score
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage( "The Bot is the Winner");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You are the Winner");

}
//displays message your a winner msg
function displayCompleteMessage(msg){
	 document.getElementById("status").innerHTML = msg ;
}
