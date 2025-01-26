//Calculator logic functions
function add(a,b) {
    display.innerHTML = (a+b).toFixed(2)
}

function substract(a,b) {
    display.innerHTML =  (a-b).toFixed(2)
}

function multiply(a,b) {
    display.innerHTML =  (a*b).toFixed(2)
}

function divide(a,b) {
    if(b == 0) {
        display.innerHTML = "ERROR"
    } else {
        display.innerHTML =  (a/b).toFixed(2)
    }
}

function operate(operator, a, b) {
    if (operator == "+") return add(a,b)
    if (operator == "-") return substract(a,b)
    if (operator == "*") return multiply(a,b)
    if (operator == "/") return divide(a,b)
}
//Erase display from screen
function clearDisplay() {
    display.innerText = "0"
}
//I create variables and DOM
let x = ""
let y = ""
let operator = ""
let clear = document.querySelector("#clear")
let display = document.getElementById("display")
clear.addEventListener("click", clearDisplay)
let digits = document.querySelectorAll("#digits") 
let operators = document.querySelectorAll("#operator")
let integer = document.querySelector("#integer")
let decimal = document.querySelector("#decimal")
//For each digit button and eventListener is added and the digit is displayed.
for (let i=0; i<digits.length; i++) {
    digits[i].addEventListener("click", function() {
        if (display.innerHTML == "0") {
            display.innerHTML = digits[i].innerHTML
        } else {
            display.innerHTML += digits[i].innerHTML
        }

    })
}
//For each operator button, the first input and the operator clicked  is saved
for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener("click", function() {
        x = display.innerHTML
        operator = operators[i].innerHTML
        clearDisplay()
    })
}   
//Change positive value to negative
integer.addEventListener("click", function() {
    if (display.innerHTML == "0") {
        display.innerHTML = display.innerHTML
    }else if (display.innerHTML.includes('-')) {
        display.innerHTML = display.innerHTML.replace('-', "")
    }else {
        display.innerHTML = "-" + display.innerHTML
    } 
})
//Add decimal number
decimal.addEventListener("click", function() {
    if(display.innerHTML.includes('.')) {
        decimal.removeEventListener
    } else {
        display.innerHTML += "."
    }
})
//Evaluate the operation, operate and display value on screen
let evaluate = document.querySelector("#evaluate")
evaluate.addEventListener("click", function() {
    y = display.innerHTML
    clearDisplay()
    operate(operator, parseFloat(x), parseFloat(y))
})






