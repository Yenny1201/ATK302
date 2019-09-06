var score = 0;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  // put drawing code here

    //text("rose", width/2, height/2)

    textSize(100);
    text(score, 100, 100);

    fill(255);
    ellipse(252, 300, 72, 72);

    fill(255);
    ellipse(252, 250, 50, 50);

    fill(255);
    ellipse(252, 220, 35, 35);


}


 function mouseReleased() {


 fill(random (255), 0, 0);
  ellipse(mouseX, mouseY, 100,  100);



score++
}
