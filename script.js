
const display = document.getElementById('display');

function updateDisplay(value) {
    display.value += value;
}

function calculateResult() {
    let result = eval(display.value.replace('×', '*'));
    display.value = result;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        clearDisplay();
    }
}

