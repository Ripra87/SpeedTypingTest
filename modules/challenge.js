function typing (e, textInput, result, wordsArea ) {
    if (result.testStart) {
    let currentWord = textInput.value.toLowerCase();    
        if (e.key === "Enter" && currentWord == result.words[result.counter]) {
            wordsArea.children[result.counter].style.color = "green";
            result.counter++;
            result.right++;
            textInput.value="";
            for (let i = 0; i < wordsArea.children.length; i++) {
                wordsArea.children[i].style.backgroundColor = "white";
            }
            wordsArea.children[result.counter].style.backgroundColor = "yellow";
        } 
        else if (e.key === "Enter" && currentWord !== result.words[result.counter]) {
            wordsArea.children[result.counter].style.color = "blue";
            result.counter++;
            result.wrong++;
            textInput.value= "";
            for (let i = 0; i < wordsArea.children.length; i++) {
                wordsArea.children[i].style.backgroundColor = "white";
            }
            wordsArea.children[result.counter].style.backgroundColor = "yellow";
            
        }
    }
}



export default typing;


