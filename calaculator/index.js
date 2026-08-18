let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;

document.getElementById("num2-el").textContent = num2;

let sum = document.getElementById("sum-el");

function add(){
let add = num1 + num2;
  sum.innerText = "Sum: " + add;
};
function subtract(){
  let sub = num1 - num2;
  sum.innerText = "Subtract: " + sub;
};
function multiply(){
  let multiply = num1 * num2;
   sum.innerText = "Multiply: " + multiply;
};
function divide(){
  let divide = num1 / num2;
   sum.innerText = "Divide: " + divide;
};
