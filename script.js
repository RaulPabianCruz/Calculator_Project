let displayValue = "";
let firstOperand = "";
let operatorChosen = "";

function add(firstNum, secondNum){
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    return firstNum / secondNum;
}

function operate(firstOperand, operator, secondOperand){
    switch(operator){
        case "+":
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "*":
            return multiply(firstOperand, secondOperand);
        case "/": 
            return divide(firstOperand, secondOperand); 
    }
}

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(function(button) {
    button.addEventListener("click", numberButtonPressed);
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        console.log(event.target.textContent);
    });
})

function numberButtonPressed(event) {
    let number = Number(event.target.textContent);
    updateDisplayValue(number);
}

function updateDisplayValue(numberString){
    displayValue = displayValue + numberString;
    updateDisplayScreen(displayValue);
}

function updateDisplayScreen(numberString){
    let displayScreen = document.querySelector(".display-screen");
    displayScreen.textContent = numberString;
}



