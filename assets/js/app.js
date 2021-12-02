const word = [
    "test",

];

let looseCount = 2;
let wordRandom;
const pendu = document.getElementById("pendu");
function randomWord() {
    const random = Math.floor(Math.random() * word.length);
    wordRandom = word[random];
    console.log(wordRandom);
    return wordRandom
}

randomWord();

function createDivForEachLetter () {
    for (let i = 0; i < wordRandom.length; i++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("letter");
        createDiv.innerHTML = "?";
        document.getElementById("sous-container1").appendChild(createDiv);
    }
}

createDivForEachLetter();

let letterUser = null;
const inputUser = document.getElementById("inputLetter");
const sendLetterButton = document.getElementById("sendLetter");


sendLetterButton.addEventListener("click", function () {

    letterUser = inputUser.value;
    inputUser.value = null;
    checkLetter();
})

function checkLetter() {
    if (wordRandom.includes(letterUser)) {
        console.log("C'est la bonne lettre");
    }
    else {
        pendu.src = "/assets/img/" + looseCount++ + ".png";

    }

    if (looseCount === 8) {
        console.log("ta tué kenny enfoiré");
        sendLetterButton.innerHTML = "re-start";
        restartGame();
    }
}

function restartGame() {
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "Re-start";

}





