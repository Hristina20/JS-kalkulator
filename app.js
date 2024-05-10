let currentResult = 0;

let resultHistory = [];

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
squareBtn.addEventListener("click", square);
powerBtn.addEventListener("click", power);

function addHistoryLog (userInput, userOperation, operationResult) {
    let logEntry = {
        input: userInput,
        operation: userOperation,
        result: operationResult
    };
    resultHistory.push(logEntry);
    resultHistory.push(resultHistory);
}

function add() {
    let calculationDescription = currentResult + " + " + userInput.value;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
    addHistoryLog(parseInt(userInput.value), "ADD", currentResult);
}

function subtract() {
    let calculationDescription = currentResult + " - " + userInput.value;
    currentResult = currentResult - parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
    addHistoryLog(parseInt(userInput.value), "SUBTRACT", currentResult);
    
}

function multiply() {
    let calculationDescription = currentResult + " * " + userInput.value;
    currentResult = currentResult * parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
    addHistoryLog(parseInt(userInput.value), "MULTIPLY", currentResult);
}

function divide() {
    let calculationDescription = currentResult + " / " + userInput.value;
    currentResult = currentResult / parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
    addHistoryLog(parseInt(userInput.value), "DIVIDE", currentResult);
}

function square() {
    let calculationDescription = currentResult + " ^2 ";
    currentResult = currentResult * currentResult;
    outputResult(currentResult, calculationDescription);
    addHistoryLog(parseInt(userInput.value), "SQUARE", currentResult);
}

function power() {
    let calculationDescription = currentResult + " ^ " + userInput.value;
    currentResult = Math.pow(currentResult, parseInt(userInput.value));
    outputResult(currentResult, calculationDescription);
    resultHistory.push(currentResult);
    console.log(resultHistory);
}





