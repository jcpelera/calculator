
let currDisplay = '';
let initialNumber = null; 
let operator = null; 

function updateDisplay(text){
    document.getElementById("display").textContent = text;
}
function add(a,b){
    return a + b;
}

function minus(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


function clearDisplay(){
    //display.textContent = '';
    currDisplay = '';
    initialNumber = null;
    operator = null; 
    updateDisplay('')
}

function setOperator(symbol){
    if(currDisplay === '') return; 

    initialNumber = parseFloat(currDisplay);
    operator = symbol;
    currDisplay ='';
}
function calculate(){
    if(initialNumber === null || operator === null || currDisplay === '') return;
    let secondNumber = currDisplay;
    let result;
    switch(operator){
        case '+': {
            result = add(initialNumber, secondNumber);
            break;
        }
        case '-': {
            result = minus(leftOperand, rightOperand);
            break;
        }
        case '*': {
            result = multiply(leftOperand, rightOperand);
            break;
        }
        case '/': {
            if(rightOperand != 0){
                result = divide(leftOperand, rightOperand);
            } else {
                alert("Really? Dividing by zero?");
                resetVals();
                result = 0;
            }
        }
    }
    return result;
}
//All clear Key 
const allClearKey = document.querySelector("#all-clear");
allClearKey.addEventListener("click", () => {
    clearDisplay();
});

//Delete Key
const deleteKey = document.querySelector("#delete");
deleteKey.addEventListener("click", () => {
    currDisplay = currDisplay.slice(0, -1);
    updateDisplay(currDisplay);
});
let clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true
});

function resetVals(){
    initialNumber = null; 
    operator = null; 
}
function appendNumber(num){
    if(num === '.' && currDisplay.includes('.')) return;
    if(num === '.' && currDisplay === ''){
        currDisplay = "0.";
        display.textContent = currDisplay;
    } else {
        currDisplay += num;
        display.textContent = currDisplay;
    }
}