const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function updateResult(originClear = false) {
    result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

function addDigit(digit) {
  if (digit === "," && (currentNumber.includes(",") || !currentNumber))
    return;

  if(restart) {
    currentNumber = digit;
    restart = false;
  } else {
    currentNumber += digit;
  }

  updateResult(); //atualizar o bloco de codigo acima em tela
}

function setOperator (newOperator) {
  if(currentNumber) {
      firstOperand = parseFloat(currentNumber.replace(",","."));
      currentNumber = "";
  }

  operator = newOperator;
}

function calculate() {
  if (operador === null || firstOperand ===null) return;
  let secondOperand = parseFloat(currentNumber.replace("," , "."));
  let resultValue;

  switch (operador) {
    case "+":
      resultValue = firstOperand + secondOperand;
      break;

    case "-":
      resultValue = firstOperand - secondOperand;
      break;

    case "x":
      resultValue = firstOperand * secondOperand;
      break;

    case "÷":
      resultValue = firstOperand / secondOperand;
      break;
    default:
      return;
  }













}

buttons.forEach((button)=> {
    button.addEventListener("click", () =>{
      const buttonText = button.innerText;
      if (/^[0-9,]+$/.test(buttonText)) {
        addDigit(buttonText)
      }  else if(["+", "-", "x", "÷"].includes(buttonText)) {
        setOperator(buttonText);
      }
    })
})