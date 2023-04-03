var click = 0;

function add() {
  click += 1;
  document.getElementById("clickCount").innerHTML = "Click count: " + click;
}
