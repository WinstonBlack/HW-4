var x = 230;
var y = 220;
var y2 = 220;
var x2 = 230;
var y2 = 220;
var x3 = 230;
var y3 = 220;
var x4 = 230;
var y4 = 220;

function setup() {
	createCanvas(400, 400);
	colorMode(HSB)
}

function draw() {
	background(0);
	noStroke();

	// draw pipe
	rect(0, 200, x, 20);

	// draw drip
	ellipse(x, y, 10);
	ellipse(x2, y2, 10);
	ellipse(x2, y2, 10);
	ellipse(x3, y3, 10);
	ellipse(x4, y4, 10);

	

	y = y + 3
	
	y2 = y2 + 5
	
	y3 = y3 + 4
	
	y4 = y4 + 6


	if (y > height * 2) {

		y = 220;
	}

	if (y2 > height) {
		y2 = 220
	}
	
	if (y3 > height + 100) {
		y3 = 220
	}
	
	if (y4 > height + 150) {
		y4 = 220
	}
	
}
