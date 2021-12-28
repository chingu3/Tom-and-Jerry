var bgImg;
var cat;
var mouse;
 function preload() {
     //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
   mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png");
    mouseimg2 = loadAnimation("images/mouse2.png");
    catimg3 = loadAnimation("images/cat3.png");
    mouseimg3 = loadAnimation("images/mouse3.png");
    catimg4 = loadAnimation("images/cat4.png");
    mouseimg4 = loadAnimation("images/mouse4.png");
 }

 function setup(){
     createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(870,600);
 cat.addAnimation("catSitting",catimg1);
 cat.scale = 0.2;

 mouse = createSprite(870,600);
 mouse.addAnimation("mouseHoldingCheese",mouseimg1);
 mouse.scale = 0.2;
 }

 function draw() {

     background("bgImg");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
cat.addAnimation("catSecondLastImage",catimg3);
        cat.changeAnimation("catSecondLastImage");
        cat.x = 300;
        cat.scale = 0.2;

        //mouse.velocityX = 0;
         cat.addAnimation("mouseSecondLastImage",mouseimg3);
         cat.changeAnimation("mouseSecondLastImage");
         //mouse.x = 300;
        mouse.scale = 0.2;
    }
     drawSprites();
 }


 function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseimg2);
       mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

       cat.velocityX = -5;
       cat.addAnimation("catRunning", catimg2);
      cat.changeAnimation("catRunning");
    //  cat.frameDelay = 25;
 }


    }
 
