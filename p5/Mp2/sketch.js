var myState = 0;
var myTimer = 0;
var x = 0;
var song1;
var song2;
var song3;

function preload(){
  song1 = loadSound('Assets/Skullgirls.mp3')
  song2 = loadSound('Assets/Katamari.mp3')
  song3 = loadSound('Assets/HeyYa.mp3')

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
}


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  // put drawing code here
  fill(230, 230, 230);
  ellipse(700, 144, 72, 72);

  fill(200, 200, 200);
  ellipse(685, 160, 25, 25);

  fill(200, 200, 200);
  ellipse(710, 135, 37, 37);

  push();
  translate(x, 0);
  x += 3;
  if (x > width){
    x = -400
  }

  switch (myState) {
    case 0:
    song1.play();
    myTimer++
    if (myTimer >= 10) {
      myTimer = 0;
      myState = 1;
    }
      background('purple');

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





    case 1:
    song2.play();
    myTimer++
    if (myTimer >= 200) {
      myTimer = 0;
      myState = 2;
    }
      background('purple');

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

      fill(255, 255, 255);
      rect(0, 390, 950, 450);

      fill(230, 230, 230);
      triangle(310, 330, 330, 300, 267, 300);

      fill(255, 0, 0);
      rect(220, 230, 55, 5);
      break;



      case 2:
      song3.play();
      myTimer++
      if (myTimer >= 200) {
        myTimer = 0;
        myState = 0;
      }
      background('blue');

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

      fill(255, 255, 255);
      rect(0, 390, 950, 450);

      fill(230, 230, 230);
      triangle(310, 330, 330, 300, 267, 300);

      fill(255, 0, 0);
      rect(220, 230, 55, 5);
      break;




  }
}

function mouseReleased() {
  myState++;
  if (myState > 3) {
    myState = 0;
  }

}
