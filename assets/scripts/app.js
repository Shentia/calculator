const defaultResult = 0;
let currentResult = defaultResult;
let valueInput = userInput;

function getUserInputNumber() {
  return parseInt(userInput.value);
}
function add() {
  const valueInput = getUserInputNumber();
  const calcDescription = `${currentResult} + ${valueInput}`;
  currentResult = currentResult + valueInput;
  outputResult(currentResult, calcDescription);
}
// function subtract() {
//   const calcDescription = `${currentResult} - ${userInput.value}`;
//   currentResult = currentResult - parseInt(userInput.value);
//   outputResult(currentResult, calcDescription);
// }

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
