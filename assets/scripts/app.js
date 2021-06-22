const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, "");
}
function subtract() {
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
