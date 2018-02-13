var y = 100;

function setup() {
	createCanvas(500, 500);
	stroke(255);
	frameRate(50);
}

function draw() {
	background(0);
	y = y - 1;
	if (y < 0) {
		y = height;
	}
	ellipse(100, y, 20, 20);
	ellipse(200, y, 20, 20);
	ellipse(300, y, 20, 20);
	ellipse(400, y, 20, 20);
}
