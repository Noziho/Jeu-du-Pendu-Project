const word = [
    "teeeest",
    /*
    "revoir",
    "hello",
    "world",
    "anime",
    "bonsoir",
    "test",
    "pendu",
    "simple",
    "comme",
    "eren",
    "livai",
    "erwin",
    "titan",
    "colossal",
    "bestial",
    "inspiration",
*/
];

let looseCount = 2;
let winCount = 2;
let id = 0;
let wordRandom;
let random = Math.floor(Math.random() * word.length);
const pendu = document.getElementById("pendu");
const container = document.getElementById("sous-container1");
let letterUser;
const inputUser = document.getElementById("inputLetter");
const sendLetterButton = document.getElementById("sendLetter");


let createDiv = document.createElement("div");

let restartButton = document.createElement("button");
restartButton.innerHTML = "Re-start";
container.append(restartButton);

restartButton.addEventListener("click", function () {
    looseCount = 1;
    pendu.src = "/assets/img/" + looseCount + ".png";
    randomWord();
});


function randomWord() {
    random = Math.floor(Math.random() * word.length);
    wordRandom = word[random];
    console.log(wordRandom);
    return wordRandom
}

randomWord();

function createDivForEachLetter() {
    for (let i = 0; i < wordRandom.length; i++) {
        createDiv = document.createElement("div");
        createDiv.classList.add("letter");
        createDiv.innerHTML = "?";
        createDiv.id = `${id++}`;
        container.appendChild(createDiv);
    }
    document.getElementById("0").innerHTML = wordRandom[0];
    document.getElementById((wordRandom.length - 1).toString()).innerHTML = wordRandom[wordRandom.length - 1];
}

createDivForEachLetter();


sendLetterButton.addEventListener("click", function () {
    letterUser = inputUser.value;
    inputUser.value = null;
    checkLetter();
})

function checkLetter() {
    if (wordRandom.includes(letterUser)) {
        printLetter();
        if (winCount === wordRandom.length) {
            document.getElementById("win").innerHTML = "T'as épargne Kenny bien joué enfoiré";
            restartGame();
        }
    }
    else {
        pendu.src = "/assets/img/" + looseCount++ + ".png";
        if (looseCount === 9) {
            console.log("ta tué kenny enfoiré");
            restartGame();
        }
    }
}

function restartGame() {
    looseCount = 1;
    winCount = 2;
    pendu.src = "/assets/img/" + looseCount++ + ".png";

    randomWord();

}


function printLetter() {
    for (let i = 1; i < wordRandom.length - 1; i++) {
        if (letterUser === wordRandom[i]) {
            winCount++;
            document.getElementById(i.toString()).innerHTML = letterUser;
        }
    }
}




