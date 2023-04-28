let num1;
let operator = "";
let num2;
let result;
let firstNumberEntered = false;
let decimalEntered = false; // added variable to track if decimal has been entered

function btnClick(data) {
    let display = document.getElementById('displayLabel');
    let value = display.value.trim();
    if (data === "+" || data === "-" || data === "/" || data === "*") {
        if (!firstNumberEntered) {
            num1 = parseFloat(value);
            operator = data;
            display.value = "";
            firstNumberEntered = true;
            decimalEntered = false; // reset decimalEntered when new number is entered
        } else {
            num2 = parseFloat(value);
            result = calculateResult();
            display.value = result;
            num1 = result;
            num2 = 0;
            operator = data;
            decimalEntered = false; // reset decimalEntered when new number is entered
        }
    } else if (data === "=") {
        num2 = parseFloat(value);
        result = calculateResult();
        display.value = result;
        num1 = result;
        num2 = 0;
        operator = "";
        firstNumberEntered = false;
        decimalEntered = false; // reset decimalEntered when calculation is performed
    } else if (data === ".") {
        if (!decimalEntered) { // only add decimal if it hasn't been added before
            value += data;
            display.value = value;
            decimalEntered = true;
        }
    } else {
        value += data;
        display.value = value;
    }
}

function clr() {
    let display = document.getElementById('displayLabel');
    display.value = '';
    num1 = 0;
    num2 = 0;
    operator = "";
    firstNumberEntered = false;
    decimalEntered = false; // reset decimalEntered when calculator is cleared
}

function calculateResult() {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
    }
}
