// Ejercicio 3

  function lugaresFuncion(){
  disBrasil();
  disChile();
  disMexico();
  disPeru();  
}

var lugares =  ["Brasil", "Chile", "México", "Perú"];
function disBrasil() {
  alert (lugares[0]);
  document.getElementById("btn").disabled = true;
  
}
function disChile() {
  alert (lugares[1]);
  document.getElementById("btn1").disabled = true;
}
function disMexico() {
  alert (lugares[2]);
  document.getElementById("btn2").disabled = true;
}
function disPeru() {
  alert (lugares[3]);
  document.getElementById("btn3").disabled = true;
}