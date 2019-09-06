var x = 0;

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1000, 800); //always in the setup

}

function draw(){
  background(00, 100, 255);
  noStroke();

  fill(0, 255, 100);
  rect(0, 500, 1000, 500);

  fill(255, 255, 255);
  rect(300, 550, 50, 150);

  fill('green');
  ellipse(325, 550, 100, 100);

  fill('yellow');
  ellipse(700, 144, 72, 72);

  fill('white');
  ellipse(x, 300, 90, 72);
  x = x + 1;
  if (x > 1000) x = 0;

  fill('white');
  ellipse(x + 25, 300, 90, 72);
  x = x + 1;
  if (x > 1000) x = 0;

  fill('white');
  ellipse(x + 50, 320, 90, 72);
  x = x + 1;
  if (x > 1000) x = 0;

  fill('white');
  ellipse(x + 75, 320, 90, 72);
  x = x + 1
  if (x > 1000) x = 0;



fill(255);
text(mouseX +','+ mouseY, 20, 20)
}

function mouseRelease(){

  print(mouseX +','+ mouseY, 20, 20) ;
}
