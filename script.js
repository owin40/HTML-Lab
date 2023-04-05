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
    autoPriceAuto = Math.round(autoPriceAuto * 2);
    updateDisplay();
  } else {
    alert("duitnya buat nambahin AUTO CLICKER kurang cuy");
  }
}

// Buy an increase clicker
function buyIncClicker() {
  if (money >= autoPriceInc) {
    money -= autoPriceInc;
    clickValue += 1;
    autoPriceInc = Math.round(autoPriceInc * 2);
    updateDisplay();
  } else {
    alert("duitnya buat nambahin INCREASE CLICKER kurang cuy");
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

// create an audio object
const soundEffect = new Audio("assets/music/coin.mp3");

// add a click event listener to the kodok button
const kodokButton = document.getElementById("kodok");
kodokButton.addEventListener("click", function () {
  // play the sound effect
  soundEffect.play();
});

const kodok = document.getElementById("kodok");

function clickKodok() {
  kodok.classList.add("clicked");
  playSound();
  setTimeout(() => {
    kodok.classList.remove("clicked");
  }, 200);
}

kodok.addEventListener("click", clickKodok);
