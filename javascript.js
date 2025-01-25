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
    display.innerText = ""
}

function printOperand(operand) {
    display.innerHTML += operand
    let number = display.innerHTML
}

function saveOperator(operator) {
    clearDisplay()
    return operator
}

let clear = document.querySelector("#clear")
let display = document.getElementById("display")
clear.addEventListener("click", clearDisplay)
let digits = document.querySelectorAll("#digits") 
let operators = document.querySelectorAll("#operator")
let operator = ""
for (let i=0; i<digits.length; i++) {
    digits[i].addEventListener("click", function() {
        printOperand(digits[i].innerHTML)
    })
}
for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", function() {
        saveOperator(operators[i].innerHTML)
    })
}   
let evaluate = document.querySelector("#evaluate")
evaluate.addEventListener("click", operate(operator, numberA, numberB))






