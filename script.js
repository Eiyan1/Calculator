let displayValue = '';
let memoryValue = 0;

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function clearLastEntry() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function toggleSign() {
    if (displayValue.charAt(0) === '-') {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    document.getElementById('display').value = displayValue;
}

function memoryClear() {
    memoryValue = 0;
}

function memoryRecall() {
    displayValue += memoryValue;
    document.getElementById('display').value = displayValue;
}

function memoryAdd() {
    memoryValue += eval(displayValue);
}

function memorySubtract() {
    memoryValue -= eval(displayValue);
}

function calculateSquareRoot() {
    let result = Math.sqrt(eval(displayValue));
    document.getElementById('display').value = result;
    displayValue = '';
}

function calculateSquare() {
    let result = Math.pow(eval(displayValue), 2);
    document.getElementById('display').value = result;
    displayValue = '';
}

function calculatePower() {
    displayValue += '**';
}
