const word = [
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
    "inspiration"

];

let looseCount = 2;
let winCount = 2;
let id = 0;
let wordRandom;
let random = Math.floor(Math.random() * word.length);
const pendu = document.getElementById("pendu");
const containerForButton = document.getElementById("sous-container1");
let letterUser;
const inputUser = document.getElementById("inputLetter");
const sendLetterButton = document.getElementById("sendLetter");
const containerForLetter = document.getElementById("container-letter");

let winText = document.getElementById("win");
let createDiv = document.createElement("div");

let restartButton = document.createElement("button");
restartButton.innerHTML = "Re-start";
containerForButton.append(restartButton);

restartButton.addEventListener("click", function () {
    restartGame();
});

// Function
function randomWord() {
    random = Math.floor(Math.random() * word.length);
    wordRandom = word[random];
    return wordRandom
}

randomWord();

//Function for create a Div for each letter of the random word
function createDivForEachLetter() {
    for (let i = 0; i < wordRandom.length; i++) {
        createDiv = document.createElement("div");
        createDiv.classList.add("letter");
        createDiv.innerHTML = "?";
        createDiv.id = `${id++}`;
        containerForLetter.appendChild(createDiv);
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


//Function for win or loose condition
function checkLetter() {
    if (wordRandom.includes(letterUser)) {
        printLetter();
        if (winCount === wordRandom.length) {
            winText.innerHTML = "T'as épargne Kenny bien joué enfoiré";
        }
    }
    else if (!wordRandom.includes(letterUser)) {
        winText.innerHTML += `${letterUser} n'est pas dans le mot` + "<br>";
        pendu.src = "/assets/img/" + looseCount++ + ".png";
        if (looseCount === 8) {
            winText.innerHTML = `T'a buté kenny enfoiré le bon mot c'était ${wordRandom.toUpperCase()}`;
            sendLetterButton.style.display = "none";

        }
    }
}
//Function for restart all game, generate a random word again and make an empty divs etc...
function restartGame() {
    looseCount = 1;
    pendu.src = "/assets/img/" + looseCount + ".png";
    winCount = 2;
    id = 0;
    containerForLetter.innerHTML = "";
    winText.innerHTML = "";
    sendLetterButton.style.display = "inline";
    randomWord();
    createDivForEachLetter();
}

//Function for print each letter on the right div.
function printLetter() {
    for (let i = 1; i < wordRandom.length - 1; i++) {
        if (letterUser === wordRandom[i]) {
            winCount++;
            document.getElementById(i.toString()).innerHTML = letterUser;
        }
    }
}




