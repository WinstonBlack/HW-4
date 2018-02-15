var x = 45
var y = 50
var xSpeed = 3
var ySpeed = 1
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
	noStroke ();
	

	ellipse(x, y, 10)
	
	x = x + xSpeed
	
	y = y + ySpeed
	 
	if (x > width) {
		 xSpeed = -3;
}

	if (x < 0) {
		xSpeed = 3;
	}
	
	if (y > width) {
		 ySpeed = -3;
}

	if (y < 0) {
		ySpeed = 3;
	}
	
	
	
}
