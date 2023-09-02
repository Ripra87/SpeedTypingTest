import wordsGroup from "./modules/words.js";
import fillWordsArea from "./modules/setChallenge.js";
import countdown from "./modules/startChallenge.js";
import typing from "./modules/challenge.js";
import showResult from "./modules/endChallenge.js";


const wordsArea = document.getElementById("words-area");
const newTest = document.getElementById("reset");
const textInput = document.getElementById("input-field");
const timeLeft = document.getElementById("time-left");
const resultArea = document.getElementById("result");
const correctAnswers = document.getElementById("correct");
const wrongAnswers = document.getElementById("wrong");

const result = { counter: 0, right: 0, wrong: 0, words: [] };

document.addEventListener("DOMContentLoaded",() => {
    fillWordsArea(wordsArea, textInput, timeLeft, wordsGroup, result, resultArea);
})

newTest.addEventListener("click", () => {
    fillWordsArea(wordsArea, textInput, timeLeft, wordsGroup, result, resultArea);
    

});


textInput.addEventListener("click", () => {
    wordsArea.children[0].style.backgroundColor = "yellow"
    let timer = setInterval(() => {
        countdown(timeLeft);
        if (timeLeft.innerText <= 0) {
            clearInterval(timer);
            showResult(resultArea, correctAnswers, wrongAnswers, result);
        };
    }, 1000);
    
});


textInput.addEventListener("keyup", (e) => {
    typing(e, textInput, result, wordsArea ); 
});












