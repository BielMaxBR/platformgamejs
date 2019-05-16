function setup() {
	createCanvas(windowWidth, windowHeight);
	
}
// frameRate();
var x = 1280/2;
var y = 720/2;
//
var r = 255;
var g = 255;
var b = 255;
function moveRight() {
	x += 7.5;
	
}
function moveLeft() {
	x -= 7.5;
}
function moveUp() {
	y -= 7.5;
}
function moveDown() {
	y += 7.5 ;
}
function draw() {
	background(20,20,20);
	fill( r, g, b );
	ellipse(x, y, 30, 30);
	
	text("'-'", windowWidth/2-3, (windowHeight/2)+50, 200, 200)
	console.log(x,y);
	
    if (mouseX > x) {
	moveRight();
    noStroke();
  	}
  	else if (mouseX < x) {
	  moveLeft();
	  noStroke();
	}
  	if (mouseY < y) {
	  moveUp();
	  noStroke();
  	}
  	else if (mouseY > y) {
	  moveDown();
	  noStroke();
  	}	


}
function mousePressed() {
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);	
};
