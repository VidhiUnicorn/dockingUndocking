var issI,spaceBGI,SC1I,SC2I,SC3I,SC4I;
var iss,spacecraft, hasDocked = false;
function preload (){
  issI = loadImage ("./images/iss.png")
  spaceBGI= loadImage ("./images/spacebg.jpg")
  SC1I = loadImage ("./images/spacecraft1.png")
  SC2I = loadImage ("./images/spacecraft2.png")
  SC3I = loadImage ("./images/spacecraft3.png")
  SC4I = loadImage ("./images/spacecraft4.png")


}

function setup() {
  createCanvas(800,700);
   spacecraft = createSprite (400,400);
  spacecraft.addImage(SC1I);
  spacecraft.scale = 0.3
  spacecraft.x = random(100,700);
 
  iss = createSprite(400,200);
  iss.addImage(issI);
  
  
}

function draw() {
  background(spaceBGI);  
  drawSprites();

  if(!hasDocked){

    if(keyWentDown(LEFT_ARROW)){
      spacecraft.addImage (SC4I);
      spacecraft.velocityX = -2
    }
    else if(keyWentUp(LEFT_ARROW)){
        spacecraft.velocityX = 0
        spacecraft.addImage(SC1I);
    }
    if(keyWentDown(RIGHT_ARROW)){
      spacecraft.addImage (SC3I);
      spacecraft.velocityX = 2
    }
    else if(keyWentUp(RIGHT_ARROW)){
        spacecraft.velocityX = 0
        spacecraft.addImage(SC1I);
    }
    if(keyWentDown(DOWN_ARROW)){
      spacecraft.addImage (SC2I);
    }
    else if(keyWentUp(DOWN_ARROW)){
        spacecraft.addImage(SC1I);
    }
    if(keyWentDown(UP_ARROW)){
      spacecraft.addImage (SC2I);
      spacecraft.velocityY = -2
    }
    else if(keyWentUp(UP_ARROW)){
        spacecraft.velocityY = 0
        spacecraft.addImage(SC1I);
    }
     
     if(spacecraft.y <=300){
       spacecraft.velocityY = 0
       if(spacecraft.x <= 335 && spacecraft.x >= 325){
        spacecraft.velocityX = 0

        hasDocked = true;
        console.log (hasDocked)
      }
     }
     else if (hasDocked){
      fill (255)
      text("DOCKING SUCCESSFUL",400,500)
     }
  }
}