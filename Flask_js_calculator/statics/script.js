const display = document.getElementById("display");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");

function appendNumber(number) {
  display.value += number;
}


function appendOperator(operator) {
  if (
    display.value.slice(-1) !== "+" &&
    display.value.slice(-1) !== "-" &&
    display.value.slice(-1) !== "*" &&
    display.value.slice(-1) !== "/"
  ) {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = "";
}

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendOperator(button.textContent);
  })
);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  })
);

clearButton.addEventListener("click", clearDisplay);
