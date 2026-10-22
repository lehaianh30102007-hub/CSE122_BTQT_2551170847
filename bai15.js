let currentExpression = '';
let displayResultElement = document.getElementById('currentResult');
let displayPreviousElement = document.getElementById('previousOperation');
function appendValue(value) {
    currentExpression += value;
    displayResultElement.innerText = currentExpression;
}

function clearScreen() {
    currentExpression = '';
    displayResultElement.innerText = '0';
    displayPreviousElement.innerText = '';
}

function calculateResult() {
    if (currentExpression === '') return;

    try {
        let expressionToEvaluate = currentExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        let result = eval(expressionToEvaluate);
        displayPreviousElement.innerText = currentExpression;
        displayResultElement.innerText = result;
        currentExpression = result.toString();
    } catch (error) {
        displayResultElement.innerText = 'Lỗi';
        currentExpression = '';
    }
}