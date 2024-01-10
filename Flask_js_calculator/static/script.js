const display = document.getElementById("display");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");

function appendNumber(number) {
  return (display.value += number);
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

let calculationDone = false;
function calculate() {
  fetch("calculate", {
    method: "POST",
    body: JSON.stringify({ equation: display.value }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error(data.error);
      } else {
        display.value = data.result; 
      }
    })
    .catch((error) => console.error("Error:", error));
    calculationDone = true;
}


numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (calculationDone) {
      display.value = "";
      calculationDone = false;
    }
  });
});


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
