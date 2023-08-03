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

function operate(firstNum, operator, secondNum){
    switch(operator){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/": 
            return divide(firstNum, secondNum); 
    }
}

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(function(button) {
    button.addEventListener("click", numberButtonPressed);
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(function(button) {
    button.addEventListener("click", operatorButtonPressed);
})

const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click", validateExpression);

function numberButtonPressed(event) {
    let number = Number(event.target.textContent);
    updateDisplayValue(number);
}

function operatorButtonPressed(event) {
    if(displayValue != ""){
        if(operatorChosen != ""){
            validateExpression();
        }
        let operator = event.target.textContent;
        updateOperatorChosen(operator);
        console.log(operatorChosen);
    }
    else
        console.log("first operand missing, nothing will be done.");
}

function updateDisplayValue(numberString){
    displayValue = displayValue + numberString;
    updateDisplayScreen(displayValue);
}

function updateDisplayScreen(numberString){
    let displayScreen = document.querySelector(".display-screen");
    displayScreen.textContent = numberString;
}

function updateOperatorChosen(operator) {
    operatorChosen = operator;

}

function validateExpression() {
    if(displayValue == "" || firstOperand == "" ||
            operatorChosen == ""){
        console.log("one or more values of the expression are empty");
    }
    else if(firstOperand == "/" && displayValue == "0"){
        updateDisplayScreen(">:(")
    }
    else{
        let firstNum = Number(firstOperand);
        let secondNum = Number(displayValue);
        let evaluation = operate(firstNum, operatorChosen, secondNum);
        console.log(evaluation);
    }
}

