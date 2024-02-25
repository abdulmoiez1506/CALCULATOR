const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else if(btnValue == '√'){
    output = Math.sqrt(output);
  } else if(btnValue == 'x^2'){
    output = square();
  } else if(btnValue == 'sin'){
    output = Math.sin(output);
  }
  else if(btnValue == 'cos'){
    output = Math.cos(output);
  }
  else if(btnValue == 'tan'){
    output = Math.tan(output);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
const square =()=> {
  return eval(output*output);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});