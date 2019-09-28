var myState = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  switch(myState) {
    case 0:
    background(100);
    text("Some say Charmander is the best", 100, 100);
    textSize(50);
       break;

    case 1:
    background(100);
    text("Some say it's Squirtle", 100, 100);
    textSize(50);
       break ;

    case 2:
    background(100);
    text("But deep down we all know that", 100, 100);
    textSize(50);
        break ;

    case 3:
    background(100);
    text("America is institutionally opposed to\n student debt relief and universal\n healthcare because it needs to use those\n programs as enticements to join the military\n and this uphold it's global imperialist hegemony", 100, 100);
    textSize(50);
        break ;


     }
}

function mouseReleased() {
  myState++;

  if (mystate > 3)   {
    mystate = 0;
  }
}
