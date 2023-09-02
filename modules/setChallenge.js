function fillWordsArea (wordsArea, textInput, timeLeft, wordsGroup, result, resultArea) {
    wordsArea.textContent = "";
    textInput.value = ""; 
    result.counter = 0;
    result.right = 0;
    result.wrong = 0;
    result.words = [];
    

    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.floor(Math.random()*100);
        
        let span = document.createElement("span");
        span.innerText = `${wordsGroup[randomNumber]} `
        wordsArea.appendChild(span);     
        
        result.words.push(wordsGroup[randomNumber]);
    };
    
    timeLeft.innerText = "60";
    resultArea.classList.add("hidden");
    


};



export default fillWordsArea;

