function add(a,b) {
    return a+b
}

function substract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate(operator, a, b) {
    if (operator == "+") return add(a,b)
    if (operator == "-") return substract(a,b)
    if (operator == "*") return multiply(a,b)
    if (operator == "/") return divide(a,b)
}

function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function printOperand(operand) {
    document.getElementById("#display").innerText = operand;
}

let clear = document.querySelector("#clear")
clear.addEventListener("click", clearDisplay)
let buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", printOperand(button.innerText))
});
