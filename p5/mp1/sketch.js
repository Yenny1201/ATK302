function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

  background(237, 34, 93);
fill(0);

if (mouseIsPressed) {
  ellipse(50, 50, 50, 50);


} else {
  //the not-pressed state
  rect(25, 25, 50, 50);
}
function mouseRelease(){

  print(mouseX +','+ mouseY, 20, 20) ;
}
}
