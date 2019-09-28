var myState = 0;
var myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    text("What is myState?", 100, 100);
    textSize(50);
    myTimer++;
    if (myTimer >= 200){
      myTimer = 0;
      myState = 1;
        background(100);
    }
    break;

    case 1:
    text("Illinois", 100, 100);
    textSize(50);
    myTimer++;
    if (myTimer >= 200){
      myTimer = 0;
      myState = 0;
        background(100);
    }
    break;
  }
}
