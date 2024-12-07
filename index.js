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
        display.value = eval(display.value);
        hasError = false;
    } catch (error) {
        display.value = "Error";
        hasError = true;
    }
}
