var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch(myState){

    case 0:
    background(255, 0, 0);
    text("my bones are brittle", 100, 100);
    break;

    case 1:
    background(0, 255, 0);
    text("i play the fiddle", 200, 200);
    break;

    case 2:
    background(0, 0, 255);
    text("we eat skittle", 300, 300);
    break;


  }
}

function mouseReleased() {
  myState++;

  if (myState > 2) {
    myState = 0;
  }
}
