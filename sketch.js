var tom,tomi;
var jer,jeri;
var ground,groundi;

function preload() {
groundi = loadImage("images/garden.png"); 
tomi = loadImage("images/cat1.png");
tomr = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png");
jeri = loadAnimation("image/mouse1.png","image/mouse2.png","image/mouse3.png","image/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   ground = createSprite(500,350,10,10);
   ground.addImage(groundi);
   ground.scale = 1.4;

   cat = createSprite(850,700,10,10);
   cat.addAnimation(tomr);
   cat.scale = 0.1;

  jer = createSprite(100,750,10,10);
  jer.addImage(jeri);

}

function draw() {

    background(0);
   
    if(keyDown("left")){
      cat.velocityX = -5;
  
    }
    drawSprites();
}


function keyPressed(){



}
