var myState = 0;
var song1;
var image1;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  image0 = loadImage("Assets/Maddy.png")
  image1 = laodImage("Assets/Bday1.png")
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background(255, 255, 255);
    text("Maddy", 100, 100);
    textSize(50);
    image(image0, 470, 100);
    break;

    case 1:
    background(255, 255, 255);
    text("Sweetshop", 100, 100);
    textSize(50);
    image(image1, 470, 100);
    break;


  }

}

function mouseReleased(){
  myState++;

  if (myState > 0) {
    myState = 0;
  }
}
