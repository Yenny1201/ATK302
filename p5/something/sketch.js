var myState = 0;
var myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    myTimer ++;
    text("I", 100, 100);
    textSize(100);
    if (myTimer >= 200){
      myTimer = 0;
      myState = 1;
        background(random(225), random(255), random(225));
    }
    break;

    case 1:
    myTimer ++;
    text("Love", 200, 200);
    textSize(100);
    if (myTimer >= 200){
      myTimer = 0;
      myState = 2;
      background(random(225), random(255), random(225));
    }
    break;

    case 2:
    myTimer ++;
    text("You", 300, 300);
    textSize(100);
    if (myTimer >= 200){
      myTimer = 0;
      myState = 0;
      background(random(225), random(255), random(225));
    }
    break;

  }

}
