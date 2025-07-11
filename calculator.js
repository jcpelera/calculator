
let currDisplay = '';
let initialNumber = null; 
let operator = null; 

function updateDisplay(text){
    document.getElementById("display").textContent = text;
}
//clear display and reset values
function clearDisplay(){
    currDisplay = '';
    initialNumber = null;
    secondNumber = null;
    operator = null; 
    updateDisplay('')
}

//identifies the proper operation and supports chaining operations (e.g 5+5+5)
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

//returns the results of the operation
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
//provides
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
function backspace(){
    currDisplay = currDisplay.slice(0, -1);
    updateDisplay(currDisplay);
}
let clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true
});
//puts the number or '.' in the display
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
//keyboard support
window.addEventListener("keydown", function (e) {
    let choiceKey = e.key;
    if(!isNaN(choiceKey)){
        appendNumber(choiceKey);
    } else if (choiceKey === '+' || choiceKey === '-' || choiceKey === '*' || choiceKey === '/'){
        setOperator(choiceKey);
    } else if (choiceKey === '=' || choiceKey === 'Enter'){
        calculate();
    } else if (choiceKey === 'Backspace'){
        backspace();
    } else if (choiceKey === 'c' || choiceKey === 'C'){
        clearDisplay();
    }
});