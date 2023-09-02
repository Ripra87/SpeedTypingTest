function countdown (timeLeft) {

    let count = +timeLeft.innerText;
    let newCount = --count;
    timeLeft.innerText = newCount;
    
}



export default countdown;