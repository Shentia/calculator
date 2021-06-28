const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserInputNumber() {
  return parseInt(userInput.value);
}
// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
//   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//   outputResult(currentResult, calcDescription);
// }

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator}${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, prevResult, number, result) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult += valueInput;
  createAndWriteOutput("+", initialResult, valueInput);
  writeToLog("ADD", initialResult, valueInput, currentResult);
}
function subtract() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult -= valueInput;
  createAndWriteOutput("-", initialResult, valueInput);
  writeToLog("Sub", initialResult, valueInput, currentResult);
}

function multiply() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult *= valueInput;
  createAndWriteOutput("*", initialResult, valueInput);
  writeToLog("multiply", initialResult, valueInput, currentResult);
}

function divide() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult /= valueInput;
  createAndWriteOutput("/", initialResult, valueInput);
  writeToLog("divide", initialResult, valueInput, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
