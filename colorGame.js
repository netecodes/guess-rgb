
var numOfSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	//mode buttons event listeners
	setUpModeButtons();
	//square buttons event listeners
	setUpSquareButtons();
	//resetButton Event Listener
	setUpResetButton();
	//New Game
	reset();
};

function setUpSquareButtons() {
	for (var i = 0; i < squares.length; i ++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent ="Play again?";
			} else { 
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}


function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		})
	};
}

function setUpResetButton() {
	resetButton.addEventListener("click", function() {
	reset();
	})
}

function reset() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = " ";
	resetButton.textContent = "New colors"
	h1.style.background = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block"
		} else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < colors.length; i++) {
	//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor() {
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	//rgb(r,g,b)
	return "rgb(" + r + ", " + g +", " + b +")";
	}

function generateRandomColors(num) {
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}

	return arr;
}