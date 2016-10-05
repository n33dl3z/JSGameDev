var mainPlayer = {
    name: "Player",
    rank: "Pawn",
    speed: 10,
    power: 1,

    messenger: function (message) {
        alert("this is some of the info you gave me, in order." + message);
    }
}

mainPlayer.name = prompt("Enter character name.");

alert("Welcome " + mainPlayer.name);
var phrases = [
    prompt("Please enter some info for me."), 
    prompt("Enter different info for me."), 
    prompt("And again."),
    prompt("Keep on going."),
];

for (var i = 0 ; i < phrases.length ; i++){
    mainPlayer.messenger(phrases[i]);
}

function PlayGame(firstNum, secondNum) {
    return firstNum + secondNum;
}

var firstPrompt = parseInt( prompt("Enter a number between 0 and 10") );
var secondPrompt = parseInt( prompt("Enter a number between 11 and 20") );

var score = PlayGame(firstPrompt, secondPrompt);
alert("Your score is " + score + ".");
alert("Do you want to play again?");