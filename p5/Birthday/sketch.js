var myState = 0;
var song1;
var image1;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  image1 = loadImage("Assets/SlimeyArt.jpg")
  image2 = loadImage("Assets/Penlink.png")
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background(255, 255, 255);
    text("SlimeyArt", 100, 100);
    textSize(50);
    image(image1, 400, 100);
    break;

    case 1:
    background(255, 255, 255);
    text("Penlink", 100, 100);
    textSize(50);
    image(image2, 430, 50);
    break;
  }

}

function mouseReleased(){
  myState++;

  if (myState > 1) {
    myState = 0;
  }
}
