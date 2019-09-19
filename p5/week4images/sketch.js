var redPanda;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  redPanda = loadImage("assets/TiredPanda.jpg")
}

function draw() {
  // put drawing code here
  image(redPanda, 20, 100);
}
