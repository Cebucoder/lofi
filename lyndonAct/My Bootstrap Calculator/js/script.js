function intialize() {
    document.getElementById("txtNum1").value = "0";
    document.getElementById("txtNum2").value = "0";
  }
  
  //ADDITION
  function sum() {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var sum = num1 + num2;
    alert(`SUM: ${sum}`);
  }
  
  //SUBTRACTION
  function minus() {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var diff = num1 - num2;
    alert(`DIFFERENCE: ${diff}`);
  }
  
  //MULTIPLICATION
  function multiply() {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var prod = num1 * num2;
    alert(`PRODUCT: ${prod}`);
  }
  
  //DIVITION
  function divide() {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);
    var quot = num1 / num2;
    alert(`QUOTIENT: ${quot}`);
  }
  
  //CLEAR BUTTON
  const inputField = document.getElementById("txtNum1");
  const inputField2 = document.getElementById("txtNum2");
  const btnClear = document.getElementById("btnClear");

  btnClear.addEventListener('click',()=>{
    inputField.value = " ";
    inputField2.value = " ";
  })