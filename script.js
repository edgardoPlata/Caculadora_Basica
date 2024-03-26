// selected
function aggregate(value) {
  document.getElementById("pantalla").value += value;
}

function eliminate() {
  document.getElementById("pantalla").value = "";
}

function calculate() {
  const valueScreen = document.getElementById("pantalla").value;
  const result = eval(valueScreen);
  document.getElementById("pantalla").value = result;
}
