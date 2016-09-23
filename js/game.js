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