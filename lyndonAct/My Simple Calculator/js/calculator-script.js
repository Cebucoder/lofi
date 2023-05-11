function intialize() {
  document.getElementById("txtNum1").value = "0";
  document.getElementById("txtNum2").value = "0";
}

//ADD BUTTON
function sum() {
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var sum = num1 + num2;
  alert(`~~SUM: ${sum}`);
}

//SUBTRACT BUTTON
function difference() {
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var diff = num1 - num2;
  alert(`~~DIFFERENCE: ${diff}`);
}

//MULTIPLY BUTTON
function product() {
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var prod = num1 * num2;
  alert(`~~PRODUCT: ${prod}`);
}

//DIVIDE BUTTON
function quotient() {
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var quot = num1 / num2;
  alert(`~~QUOTIENT: ${quot}`);
}

//CLEAR BUTTON
const inputField = document.getElementById("txtNum1");
const inputField2 = document.getElementById("txtNum2");
const btnClear = document.getElementById("btnClear");

btnClear.addEventListener('click',()=>{
  inputField.value = " ";
  inputField2.value = " ";
})

