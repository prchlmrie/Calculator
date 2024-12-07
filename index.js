const display = document.getElementById("display");
let hasError = false;

function appendToDisplay(input) {
    if (hasError) {
        display.value = "";
        hasError = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    hasError = false;
}

function calculate() {
    try {
        const result = eval(display.value);
        if (!isFinite(result)) {
            throw new Error("Invalid calculation");
        }
        display.value = result;
        hasError = false;
    } catch (error) {
        display.value = "Error";
        hasError = true;
    }
}

document.querySelectorAll('#keys button').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent;
        if (buttonText === 'C') {
            clearDisplay();
        } else if (buttonText === '=') {
            calculate();
        } else {
            appendToDisplay(buttonText);
        }
    });
});

