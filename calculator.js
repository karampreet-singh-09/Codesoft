let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function evaluateExpression() {
  try {
    expression = eval(expression).toString();
    document.getElementById('display').value = expression;
  } catch (e) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}

document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => appendValue(button.textContent));
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => appendValue(button.textContent));
});

document.querySelector('.clear').addEventListener('click', clearDisplay);
document.querySelector('.equal').addEventListener('click', evaluateExpression);
document.querySelector('.dot').addEventListener('click', () => appendValue('.'));
