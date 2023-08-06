const EMPTY_STRING = "";
let displayValue = EMPTY_STRING;
let firstOperand = EMPTY_STRING;
let operatorChosen = EMPTY_STRING;
let operatorRecentlyPressed = false;
let equalsRecentlyPressed = false;

function add(firstNum, secondNum){
    return processResult(firstNum + secondNum);
}

function subtract(firstNum, secondNum){
    return processResult(firstNum - secondNum);
}

function multiply(firstNum, secondNum){
    return processResult(firstNum * secondNum);
}

function divide(firstNum, secondNum){
    return processResult(firstNum / secondNum);
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
equalsButton.addEventListener("click", equalsButtonPressed);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearEverything);

function numberButtonPressed(event) {
    if(wasOperatorRecentlyPressed() || wasEqualsRecentlyPressed()){
        clearDisplayValue();
        resetOperatorRecentlyPressed();
        resetEqualsRecentlyPressed();
    }
    let number = Number(event.target.textContent);
    updateDisplayValue(number);
    updateDisplayScreen();
}

function operatorButtonPressed(event) {
    if(displayValue != EMPTY_STRING){
        if(operatorChosen != EMPTY_STRING &&
                    !wasOperatorRecentlyPressed()){
            validateExpression();
        }
        let operator = event.target.textContent;
        updateOperatorChosen(operator);
        updateFirstOperand();
        setOperatorRecentlyPressed();
    }
    else
        console.log("first operand missing, nothing will be done.");
}

function equalsButtonPressed() {
    setEqualsRecentlyPressed();
    validateExpression();
}

function updateDisplayValue(numberString){
    displayValue = displayValue + numberString;
}

function clearDisplayValue() {
    displayValue = EMPTY_STRING;
}

function updateDisplayScreen(){
    let displayScreen = document.querySelector(".display-screen");
    displayScreen.textContent = displayValue;
}

function clearDisplayScreen() {
    let displayScreen = document.querySelector(".display-screen");
    displayScreen.textContent = EMPTY_STRING;
}

function updateOperatorChosen(operator) {
    operatorChosen = operator;
}

function clearOperatorChosen() {
    operatorChosen = EMPTY_STRING;
}

function updateFirstOperand() {
    firstOperand = displayValue;
    console.log(firstOperand);
}

function clearFirstOperand() {
    firstOperand = EMPTY_STRING;
}

function wasOperatorRecentlyPressed() {
    return operatorRecentlyPressed;
}

function setOperatorRecentlyPressed() {
    operatorRecentlyPressed = true;
}

function resetOperatorRecentlyPressed() {
    operatorRecentlyPressed = false;
}

function wasEqualsRecentlyPressed() {
    return equalsRecentlyPressed;
}

function setEqualsRecentlyPressed() {
    equalsRecentlyPressed = true;
}

function resetEqualsRecentlyPressed() {
    equalsRecentlyPressed = false;
}

function clearAllExpressionValues() {
    clearDisplayValue();
    clearOperatorChosen();
    clearFirstOperand();
}

function clearEverything() {
    clearAllExpressionValues();
    clearDisplayScreen();
    resetOperatorRecentlyPressed();
}

function validateExpression() {
    if(displayValue === EMPTY_STRING || firstOperand === EMPTY_STRING ||
            operatorChosen === EMPTY_STRING || wasOperatorRecentlyPressed()){
        console.log("one or more values of the expression are empty");
        clearEverything();
    }
    else if(displayValue == "0" && operatorChosen == "/"){
        clearDisplayValue();
        updateDisplayValue(">:(");
        updateDisplayScreen()
        clearAllExpressionValues();
    }
    else{
        let firstNum = Number(firstOperand);
        let secondNum = Number(displayValue);
        let evaluation = operate(firstNum, operatorChosen, secondNum);
        clearDisplayValue();
        updateDisplayValue(evaluation);
        updateDisplayScreen();
        clearOperatorChosen();
    }
}

function processResult(resultNumber) {
    if(Number.isInteger(resultNumber)){
        return resultNumber;
    }
    else{
        return resultNumber.toFixed(2);
    }
}

