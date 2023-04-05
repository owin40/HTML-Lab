let money = 0;
let clickValue = 1;
let autoValue = 0;
let autoPriceAuto = 4;
let autoPriceInc = 2;

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

function clickMoney() {
  money += clickValue;
  updateDisplay();
}

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

function autoMoney() {
  money += autoValue;
  updateDisplay();
}

setInterval(autoMoney, 1000);

document.getElementById("click-button").addEventListener("click", clickMoney);
document.getElementById("buy-button").addEventListener("click", buyAutoClicker);

updateDisplay();

const soundEffect = new Audio("assets/music/coin.mp3");

const kodokButton = document.getElementById("kodok");
kodokButton.addEventListener("click", function () {
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
