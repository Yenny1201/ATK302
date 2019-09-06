function setup() {
  // put setup code here
  createCanvas(980, 800);
  textAlign(CENTER);

}

function draw() {
  // put drawing code here

  if (mouseIsPressed) {
    background(41, 0, 75);
  fill(0);

  fill(0, 0, 255);
  ellipse(252, 300, 72, 100);

  fill(255);
  ellipse(257, 310, 50, 60);

  fill(0, 0, 255);
  ellipse(252, 250, 55, 50);

  fill(255, 255, 0);
  triangle(276, 240, 300, 250, 267, 275);

  fill(0, 0, 0);
  ellipse(252, 250, 20, 20);

  fill(225, 0, 0);
  ellipse(252, 365, 75, 50);

  fill(230, 230, 230);
  ellipse(700, 144, 72, 72);

  fill(200, 200, 200);
  ellipse(685, 160, 25, 25);

  fill(200, 200, 200);
  ellipse(710, 135, 37, 37);

  fill(255, 255, 255);
  rect(0, 390, 950, 450);

  fill(230, 230, 230);
  triangle(310, 330, 330, 300, 267, 300);

  fill(255, 0, 0);
  rect(220, 230, 55, 5);

  }
  else {
  background(00, 150, 255);
  noStroke();

  fill(0, 0, 255);
  ellipse(252, 300, 72, 100);

  fill(255);
  ellipse(257, 310, 50, 60);

  fill(0, 0, 255);
  ellipse(252, 250, 55, 50);

  fill(255, 255, 0);
  triangle(276, 240, 300, 250, 267, 275);

  fill(0, 0, 0);
  ellipse(252, 250, 20, 20);

  fill(225, 0, 0);
  ellipse(252, 365, 75, 50);

  fill(255, 255, 0);
  ellipse(700, 144, 72, 72);

  fill(255, 255, 255);
  rect(0, 390, 950, 450);


  print(mouseIsPressed);
  }
}
