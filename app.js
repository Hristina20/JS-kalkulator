/*function Add(num1, num2) {
    return num1 + num2;
};
var resultAdd = Add (2, 3);
console.log(resultAdd);

function Subtract(num1, num2) {
    return num1 - num2;
}
var resultSubtract = Subtract(10, 2)
console.log(resultSubtract);

function Multiply(num1, num2){
    return num1 * num2
};
var resultMultiply = Multiply(2, 6);
console.log(resultMultiply);

function Divide(num1, num2) {
    return num1 / num2;
}
var resultDivide = Divide(14, 2);
console.log(resultDivide);*/

let currentResult = 0;

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function add() {
    let calculationDescription = currentResult + " + " + userInput.value;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
}

function sub() {
    let calculationDescription = currentResult + " - " + userInput.value;
    currentResult = currentResult - parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
}

function multiply() {
    let calculationDescription = currentResult + " * " + userInput.value;
    currentResult = currentResult * parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
}

function divide() {
    let calculationDescription = currentResult + " / " + userInput.value;
    currentResult = currentResult / parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
}


