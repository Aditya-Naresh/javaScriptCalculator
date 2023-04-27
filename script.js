let num1;
let operator = ""
let num2;
let result;
function btnClick(data) {
    let display = document.getElementById('displayLabel');
    let value = display.value.trim();
    if (data === "+" || data === "-" || data === "/" || data === "*") {
        num1 = parseFloat(value);
        operator = data;
        display.value = ""

    } else if (data === "=") {
        num2 = parseFloat(value);
        result = calculateResult()
        display.value = result;
        num1 = result;
        num2 = 0;
        operator = ""
    } else {
        value += data;
        display.value = value
    }
}

function clr() {
    let display = document.getElementById('displayLabel');
    display.value = ''
    num1 = 0;
    num2 = 0;
    operator = ""
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
        default:
            return 0;
    }
}