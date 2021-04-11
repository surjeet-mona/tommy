
var bg,bgImage;
var cat1,catImage1,catImage2,catImage3;
var mouse1,mouseImage1,mouseImage2;


function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=loadAnimation("images/cat4.png");
    mouseImage1=loadAnimation("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseImage3=loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,200,200);
    bg.addImage(bgImage);

    cat1=createSprite(800,550,20,20);
    cat1.addAnimation("first",catImage1);
    cat1.scale=0.2;

    mouse1=createSprite(200,550,20,20);
    mouse1.addAnimation("first",mouseImage1);
    mouse1.scale=0.15;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat1.x -mouse1.x < (cat1.width-mouse1.width)/2 ){

    cat1.addAnimation("third",catImage3);
    cat1.changeAnimation("third",catImage3);
    cat1.velocityX=0;
    cat1.x=300

    mouse1.addAnimation("third",mouseImage3);
    mouse1.changeAnimation("third",mouseImage3);
}



    keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
    mouse1.addAnimation("second",mouseImage2);
    mouse1.changeAnimation("second",mouseImage2);
    mouse1.frameDelay=25;

    cat1.addAnimation("second",catImage2)
    cat1.changeAnimation("second",catImage2);
    cat1.velocityX=-2
}

}
