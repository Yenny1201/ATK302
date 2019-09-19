var ubuntu;
var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  ubuntu = loadFont("assets/Ubuntu-Regular.ttf")
}

function draw() {
  // put drawing code here
  background(100);
  textFont(ubuntu, 120);

  fill('red');
  text("Hello world", x, 150);
  x++;
  if (x > width) {
    x = 0;
  }

  textSize(30);
    text("from Josh", 20, 250);

}
