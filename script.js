// Variables to keep track of game state
let money = 0;
let clickValue = 1;
let autoValue = 0;
let autoPrice = 50;

// Update the display for money, click value, and auto value
function updateDisplay() {
	document.getElementById('money').innerText = money;
	document.getElementById('click-value').innerText = clickValue;
	document.getElementById('auto-value').innerText = autoValue;
	document.getElementById('auto-price').innerText = autoPrice;
}

// Increase the player's money by the click value
function clickMoney() {
	money += clickValue;
	updateDisplay();
}

// Buy an auto clicker
function buyAutoClicker() {
	if (money >= autoPrice) {
		money -= autoPrice;
		autoValue += 1;
		autoPrice = Math.round(autoPrice * 1.2);
		updateDisplay();
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
document.getElementById('click-button').addEventListener('click', clickMoney);
document.getElementById('buy-button').addEventListener('click', buyAutoClicker);

// Update the display when the page first loads
updateDisplay();
