var numOfSquares = 6
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBTN = document.querySelector('#easyBTN');
var hardBTN = document.querySelector('#hardBTN');
colorDisplay.textContent = pickedColor;

easyBTN.addEventListener("click", function(){
	easyBTN.classList.add("selected");
	hardBTN.classList.remove("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

hardBTN.addEventListener("click", function(){
	hardBTN.classList.add("selected");
	easyBTN.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
});

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors"
	h1.style.background = "steelblue";
	for (var i = 0; i < squares.length; i ++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];
	}
});

for (var i = 0; i < squares.length; i ++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];
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