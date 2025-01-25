function add(a,b) {
    display.innerHTML = a+b
}

function substract(a,b) {
    display.innerHTML =  a-b
}

function multiply(a,b) {
    display.innerHTML =  a*b
}

function divide(a,b) {
    display.innerHTML =  a/b
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
}
let x = ""
let y = ""
let operator = ""
let clear = document.querySelector("#clear")
let display = document.getElementById("display")
clear.addEventListener("click", clearDisplay)
let digits = document.querySelectorAll("#digits") 
let operators = document.querySelectorAll("#operator")
for (let i=0; i<digits.length; i++) {
    digits[i].addEventListener("click", function() {
        printOperand(digits[i].innerHTML)
        
    })
}
for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", function() {
        x = display.innerHTML
        operator = operators[i].innerHTML
        clearDisplay()
    })
}   
let evaluate = document.querySelector("#evaluate")
evaluate.addEventListener("click", function() {
    y = display.innerHTML
    clearDisplay()
    operate(operator, parseInt(x), parseInt(y))
})






