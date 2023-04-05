// Variables to keep track of game state
let money = 0;
let clickValue = 1;
let autoValue = 0;
let autoPriceAuto = 4;
let autoPriceInc = 2;

// Update the display for money, click value, and auto value
function updateDisplay() {
  document.getElementById("money").innerText = "Money: " + money + "$";
  document.getElementById("clickValue").innerText =
    "Increase per click: " + clickValue;
  document.getElementById("autoPriceInc").innerText =
    "Price for increase click: " + autoPriceInc + "$";
  document.getElementById("autoValue").innerText = "Auto clicker: " + autoValue;
  document.getElementById("autoPriceAuto").innerText =
    "Price for auto click: " + autoPriceAuto + "$";
}

// Increase the player's money by the click value
function clickMoney() {
  money += clickValue;
  updateDisplay();
}

// Buy an auto clicker
function buyAutoClicker() {
  if (money >= autoPriceAuto) {
    money -= autoPriceAuto;
    autoValue += 1;
    autoPriceAuto = Math.round(autoPriceAuto * 1.2);
    updateDisplay();
  } else {
    alert("duitnya buat nambahin auto clicker kurang cuy");
  }
}

// Buy an increase clicker
function buyIncClicker() {
  if (money >= autoPriceInc) {
    money -= autoPriceInc;
    clickValue += 1;
    autoPriceInc = Math.round(autoPriceInc * 1.2);
    updateDisplay();
  } else {
    alert("duitnya buat nambahin increase clicker kurang cuy");
  }
}

// Automatically increase the player's money
function autoMoney() {
  money += autoValue;
  updateDisplay();
}

// Call autoMoney() every second
setInterval(autoMoney, 1000);

// Add event listeners to the click and buy button
document.getElementById("click-button").addEventListener("click", clickMoney);
document.getElementById("buy-button").addEventListener("click", buyAutoClicker);

// Update the display when the page first loads
updateDisplay();
