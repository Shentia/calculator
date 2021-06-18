let currentResult = 0;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

let sum = add(4, 4);

const description = `((${currentResult} + 2) / 2) + 10`;

currentResult = (currentResult + 2) / 2 + 10;

outputResult(sum, description);
