const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function add() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult + valueInput;
  createAndWriteOutput("+", initialResult, valueInput);
}
function subtract() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - valueInput;
  createAndWriteOutput("-", initialResult, valueInput);
}

function multiply() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult * valueInput;
  createAndWriteOutput("*", initialResult, valueInput);
}

function divide() {
  const valueInput = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / valueInput;
  createAndWriteOutput("/", initialResult, valueInput);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
