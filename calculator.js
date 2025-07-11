
let currDisplay = '';
let initialNumber = null; 
let operator = null; 

function updateDisplay(text){
    document.getElementById("display").textContent = text;
}

function clearDisplay(){
    //display.textContent = '';
    currDisplay = '';
    initialNumber = null;
    secondNumber = null;
    operator = null; 
    updateDisplay('')
}

function setOperator(symbol){
    if(currDisplay === '' && initialNumber !== null){
    operator = symbol;
    return;
    } 
    if(currDisplay !== ''){
        const secondNumber = parseFloat(currDisplay);
        if(initialNumber === null){
            initialNumber = secondNumber;
        }else if (operator){
        initialNumber = operate(initialNumber, secondNumber, operator);
        updateDisplay(initialNumber);
        }
    }
    operator = symbol;
    currDisplay ='';
    
}
function operate(lOperand, rOperand, operator){
    switch(operator){
        case '+': 
            return lOperand + rOperand;
        case '-': 
            return lOperand - rOperand;
        case '*': 
            return lOperand * rOperand;
        case '/': 
            if(rOperand != 0){
                return parseFloat(lOperand / rOperand);
            } else {
                alert("Really? Dividing by zero?");
                clearDisplay();
                return;
            }
        default: 
            return;
    }
}

function calculate(){
    if(initialNumber === null || operator === null || currDisplay === '') return;
    let secondNumber = parseFloat(currDisplay);
    let result = (operate(initialNumber, secondNumber, operator)).toFixed(2);
    
    updateDisplay(result);
    currDisplay = result.toString();
    initialNumber = null;
    secondNumber = null;
    operator = null;

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