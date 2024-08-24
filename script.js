
const display = document.getElementById('display');

function updateDisplay(value) {
    if (display.value === 'error') {
        display.value = '';
    }
    display.value += value;
}


function calculateResult() {
    try {
        display.value = eval(display.value.replace('×', '*'));
    } catch (error) {
        console.log(error);
        display.value = "error";
    }
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    if (display.value === "error") {
        clearDisplay()
    }
    display.value = display.value.slice(0, -1);
}

