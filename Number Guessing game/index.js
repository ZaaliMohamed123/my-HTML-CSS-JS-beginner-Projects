//Number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

const h3 = document.getElementById("h3");
const result = document.getElementById("result");
const textBox = document.getElementById("textBox");
const checkButton = document.getElementById("Check");
const Attempts = document.getElementById("Attempts");

h3.textContent = `Enter a number between ${minNum} and ${maxNum}`;


function Guess() {
    let guess = Number(textBox.value);
    if (guess < minNum || guess > maxNum) {
        result.textContent = `Enter a valid number between ${minNum} and ${maxNum}`;
    } else {
        attempts++;
        if (guess < answer) {
            result.textContent = `TOO LOW! Try again `;
            Attempts.textContent = `Attempt : ${attempts}`;
            textBox.value = "";
            checkButton.disabled = false;
        } else if (guess > answer) {
            result.textContent = "TOO HIGH! Try again";
            Attempts.textContent = `Attempt : ${attempts}`;
            textBox.value ="";
            checkButton.disabled = false;
        } else {
            result.textContent = `CORRECT! the answer was ${answer}, it tooks you ${attempts} attempts`;
            Attempts.textContent = "";
            checkButton.disabled = true;
        }
    }
}


