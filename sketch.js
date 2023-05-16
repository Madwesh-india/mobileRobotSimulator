var canvas;

function setup() {
	canvas = createCanvas(screenWidth, screenHeight);
	canvas.parent("#canvas");

	background(51);

}

function draw() {
	translate(screenWidth/2, screenHeight/2);
	scale(1, -1);
	background(51);
	
	translate(axisX, axisY);
	rotate(axisAng);

	rect(100, 100, 100, 100);
}