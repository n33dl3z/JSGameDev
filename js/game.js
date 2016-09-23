var mainPlayer = {
    name: "Player",
    rank: "Pawn",
    speed: 10,
    power: 1,

    messenger: function (message0, message1, message2){
        alert(message0);
        alert(message1);
        alert(message2);
    }
}

mainPlayer.name = prompt("Enter character name.");

alert("Welcome " + mainPlayer.name);
var phrases = [
    prompt("Please enter some info for me."), 
    prompt("Enter different info for me."), 
    prompt("And again.")
];

mainPlayer.messenger(phrases[0], phrases[1], phrases[2]);