var myState = 0;
var song1;
var image1;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  image0 = loadImage("Assets/Sanka.png")
  image1 = loadImage("Assets/SlimeyArt.jpg")
  image2 = loadImage("Assets/Penlink.png")
  image3 = loadImage("Assets/Lusmiasm.jpg")
  image4 = loadImage("Assets/Red.png")
  image5 = loadImage("Assets/Harpy.png")
  image6 = loadImage("Assets/Remake.jpg")
  image7 = loadImage("Assets/SweetShop1.png")
  image8 = loadImage("Assets/Neil.png")
  image9 = loadImage("Assets/SatyrSatyr.png")
  image10 = loadImage("Assets/Ludi.png")
  image11 = loadImage("Assets/Tazwomante.png")
  image12 = loadImage("Assets/NeoHajime.png")
  image13 = loadImage("Assets/Oddman.jpg")
  image14 = loadImage("Assets/EpicPotato.png")
  image15 = loadImage("Assets/Opaquely.png")
}

function draw() {
  // put drawing code here

  switch(myState){
    case 0:
    background(255, 255, 255);
    text("Sanka", 100, 100);
    text("HAPPY BIRTHDAY JACKIE!!!", 500, 100)
    textSize(50);
    image(image0, 470, 100);
    break;

    case 1:
    background(255, 255, 255);
    text("SlimeyArt", 100, 100);
    textSize(50);
    image(image1, 430, 50);
    break;

    case 2:
    background(255, 255, 255);
    text("Penlink", 100, 100);
    textSize(50);
    image(image2, 400, 50);
    break;

    case 3:
    background(255, 255, 255);
    text("Lusmiasm", 100, 100);
    textSize(50);
    image(image3, 430, 50);
    break;

    case 4:
    background(255, 255, 255);
    text("Red", 100, 100);
    textSize(50);
    image(image4, 430, 50);
    break;

    case 5:
    background(255, 255, 255);
    text("Harpy", 100, 100);
    textSize(50);
    image(image5, 430, 50);
    break;

    case 6:
    background(255, 255, 255);
    text("Remake", 100, 100);
    textSize(50);
    image(image6, 430, 50);
    break;

    case 7:
    background(255, 255, 255);
    text("Sweetshop", 100, 100);
    textSize(50);
    image(image7, 400, 50);
    break;

    case 8:
    background(255, 255, 255);
    text("Neil", 100, 100);
    textSize(50);
    image(image8, 430, 50);
    break;

    case 9:
    background(255, 255, 255);
    text("SatyrSatyr", 100, 100);
    textSize(50);
    image(image9, 430, 50);
    break;

    case 10:
    background(255, 255, 255);
    text("Ludi", 100, 100);
    textSize(50);
    image(image10, 430, 50);
    break;

    case 11:
    background(255, 255, 255);
    text("Tazwomante", 100, 100);
    textSize(50);
    image(image11, 430, 50);
    break;

    case 12:
    background(255, 255, 255);
    text("NeoHajime", 100, 100);
    textSize(50);
    image(image12, 430, 50);
    break;

    case 13:
    background(255, 255, 255);
    text("Oddman", 100, 100);
    textSize(50);
    image(image13, 430, 50);
    break;

    case 14:
    background(255, 255, 255);
    text("EpicPotato", 100, 100);
    textSize(50);
    image(image14, 430, 50);
    break;

    case 15:
    background(255, 255, 255);
    text("OpaquelyTranslucent", 100, 100);
    textSize(50);
    image(image15, 500, 100);
    break;


  }

}

function mouseReleased(){
  myState++;

  if (myState > 15) {
    myState = 0;
  }
}
