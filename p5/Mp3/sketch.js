var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var net, netRight, netLeft;
var bird;
var birds = [];
var welcome;
var deathnoise;

function preload(){
  deathnoise = loadSound('assets/death.mp3')

deathnoise.loop();
deathnoise.stop();
}

function setup() {
  createCanvas(800, 800);


  birds[0] = loadImage("assets/Welcome.png");
  netRight = loadImage("assets/NetRight.png");
  netLeft = loadImage("assets/NetLeft.png");
  net = netRight;

  bird = loadImage("assets/bird1.png");



  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }


  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {

    case 0: // splash screen
      // welcome to my game, click to start
      background('Black');

      fill('white');
      text("Click to start the game", 100, 100);
      textSize(30);
      break;

    case 1: // the game state
      game();
      timer++;
      if (timer > 600) {
        myState = 3;
        timer = 0;
      }
      break;

    case 2: // the win state
      background('green');
      fill('white');
      text("YOU WON!!!", 100, 100);
      break;

    case 3: // the lose state
      background('blue');

      fill('white');
      text("You LOST!", 100, 100);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: // the win state!
      resetTheGame();
      myState = 0;
      break;

    case 3: // the lose myState
      resetTheGame();
      myState = 0;
      break;

  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length - 1));
  this.timer = 0;
  this.maxTimer = random(10, 30); // use this for timer code


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //    rect(this.pos.x, this.pos.y, 100, 50);
    //    ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    //    ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    //  image(bird, this.pos.x, this.pos.y, 100, 100);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;

    if (this.timer > this.maxTimer) {

      this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length - 1) this.birdNum = 0;
      this.timer = 0;
    }



  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) net = netLeft;
  if (keyCode === RIGHT_ARROW) net = netRight;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [];
  // spawn cars!!!
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0;

}


function game() {
  background(100);
  if(deathnoise.isPlaying() == false) {
    deathnoise.play();
  }
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    // make sure car isn't really close to frog!!!!
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);  // take the car out!!
      // if the car's type is a killer type, myState = 3
    }
  }

  if (cars.length == 0) {
    myState = 2;
  }

  // draw the frog
  //  ellipse(frogPos.x, frogPos.y, 60, 60);
  image(net, frogPos.x, frogPos.y);
  checkForKeys();
}
