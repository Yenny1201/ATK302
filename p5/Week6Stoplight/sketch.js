var myState = 0;
var myTimer = 200;
var x = 0;
var vel = 3;

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
background(100);
fill('F7FF3C');
rect(width/2, height/2, 150, 400);

  fill('yellow');
  rect(width / 2, height / 2, 150, 400);

  fill(0);
  rect(width/2, height/2, 105, 305);

  fill('#1f4706')
  rect(width/2, height/1.65, 55, 55);

  fill('#a8ab09');
  rect(width/2, height/2, 50, 50);

  fill('#7d0000');
  rect(width/2, height/2.5, 50, 50);



  switch (myState) {
      case 0:
      fill('green');
      ellipse(width / 2, height / 1.65, 50, 50);
      myTimer++;
      if (myTimer >= 200) {
        myTimer = 0;
        myState = 1;
      }
        break;

        case 1:
        fill('yellow');
        ellipse(width / 2, height / 2, 50, 50);
        myTimer++;
        if (myTimer >= 200) {
          myTimer = 0;
          myState = 2;
        }
        break;


        case 2:
        fill('red');
        ellipse(width / 2, height / 2.5, 50, 50);
        myTimer++;
        if (myTimer >= 250) {
          doTimer(0, 50);

          vel = 0;
          break;
        }
}
        // animate a car
        fill('purple');
        rect(x, height-100, 80, 50);
        x = x + vel;
        if (x > width){
          x = 0;
        }

        function doTimer(whichState, variableTimer){
          timer--;
          if(timer <= 0){
            timer = variableTimer;
            myState = whichState;
          }
        }
  }
}
