function showResult(resultArea, correctAnswers, wrongAnswers, {right, wrong}) {
    resultArea.classList.remove("hidden");
    correctAnswers.innerText = ` ${right} `;
    wrongAnswers.innerText = ` ${wrong} `;
}


export default showResult;