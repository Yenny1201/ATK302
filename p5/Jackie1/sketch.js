var myState = 0;
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
  image7 = loadImage("Assets/Sweetshop1.png")
  image8 = loadImage("Assets/Neil.png")
  image9 = loadImage("Assets/SatyrSatyr.png")
  image10 = loadImage("Assets/Ludi.png")
  image11 = loadImage("Assets/Tazwomante.png")
  image12 = loadImage("Assets/NeoHajime.png")
  image13 = loadImage("Assets/Oddman.jpg")
  image14 = loadImage("Assets/EpicPotato.png")
  image15 = loadImage("Assets/Maddy.png")
  image16 = loadImage("Assets/Opaquely.png")
  image17 = loadImage("Assets/Asmo.png")
  image18 = loadImage("Assets/Masato.png")
  image19 = loadImage("Assets/Doon.jpg")
  image20 = loadImage("Assets/Triumphant.png")
  image21 = loadImage("Assets/Supertito.png")
  image22 = loadImage("Assets/Z3r0.png")
  image23 = loadImage("Assets/Ink.jpg")
  image24 = loadImage("Assets/Heart.png")
}

function draw() {
  // put drawing code here

    switch(myState){
    case 0:
    background(255, 255, 255);
    text("Sanka", 100, 100);
    text("HAPPY BIRTHDAY JACKIE!!!", 500, 900)
    textSize(50);
    image(image0, 470, 20);
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
    text("Maddy", 100, 100);
    textSize(50);
    image(image15, 430, 50);
    break;

    case 16:
    background(255, 255, 255);
    text("OpaquelyTranslucent", 100, 100);
    textSize(50);
    image(image16, 500, 100);
    break;

    case 17:
    background(255, 255, 255);
    text("Asmo", 100, 100);
    textSize(50);
    image(image17, 430, 50);
    break;

    case 18:
    background(255, 255, 255);
    text("Masato", 100, 100);
    textSize(50);
    image(image18, 430, 50);
    break;

    case 19:
    background(255, 255, 255);
    text("Doon", 100, 100);
    textSize(50);
    image(image19, 430, 50);
    break;

    case 20:
    background(255, 255, 255);
    text("Triumpant", 100, 100);
    textSize(50);
    image(image20, 430, 50);
    break;

    case 21:
    background(255, 255, 255);
    text("Supertito", 100, 100);
    textSize(50);
    image(image21, 430, 100);
    break;

    case 22:
    background(255, 255, 255);
    text("Z3r0", 100, 100);
    textSize(50);
    image(image22, 430, 50);
    break;

    case 23:
    background(255, 255, 255);
    text("Ink", 100, 100);
    textSize(50);
    image(image23, 430, 50);
    break;

    case 24:
    background(255, 255, 255);
    textSize(20);
    text("Sanka", 100, 100);
    text("Remake", 100, 130);
    text("Red", 100, 160);
    text("NotsoCuteSlime", 100, 190);
    text("Oddman", 100, 220);
    text("Ludi", 100, 250);
    text("TriumpantObtuse", 100, 280);
    text("Tazwomante", 100, 310);
    text("EpicPotato Lord", 100, 340);
    text("Lusmiasm", 100, 370);
    text("Sweetshop", 100, 400);
    text("Harpy", 100, 430);
    text("SatyrSatyr", 100, 460);
    text("Masato", 100, 490);
    text("Neil", 100, 520);
    text("Penlink", 100, 550);
    text("NeoHajime", 100, 580);
    text("OpaquelyTranslucent", 100, 610);
    text("Maddy", 100, 640);
    text("Asmo", 100, 670);
    text("TaurusKnight", 100, 700);
    text("Doon", 100, 730);
    text("ATripleZeroNeo", 100, 760);
    text("FlamingWings", 100, 790);
    text("Z3r0", 100, 820);
    text("Soup", 100, 850);
    text("Midori", 350, 100);
    text("Supertito", 350, 130);
    text("Choklit", 350, 160);
    text("MoodyJazz", 350, 190);
    text("J0ker", 350, 220);
    text("LoyalLZX", 350, 250);
    text("Sath", 350, 280);
    text("BaronVonArthur", 350, 310);
    text("Gregthelion", 350, 340);
    text("ShadowBladeX", 350, 370);
    text("Sukiru", 350, 400);
    text("Frostwolf", 350, 430);
    text("LucarioShirona", 350, 460);
    text("Marcy", 350, 490);
    text("Ink", 350, 520);
    text("Juni221", 350, 550);
    text("Tantric", 350, 580);
    text("FireDragonKong", 350, 610);
    text("Toonman", 350, 640);
    text("Nicoyoann", 350, 670);
    text("GodDevice", 350, 700);
    text("Kev", 350, 730);
    text("Luxy", 350, 760);

    textSize(50)
    text("We all wish you a happy birthday!", 500, 800);
    image(image24, 600, 50);
    break;
  }
}

function mouseReleased(){
  myState++;
  if (myState > 24) {
    myState = 0;
  }
}
