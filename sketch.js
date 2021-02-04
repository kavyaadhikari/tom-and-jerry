var garden,cat,mouse
var gardenImg,catImg,catImg2,catImg3,mouseImg,mouseImg2,mouseImg3
function preload() {
    //load the images here
    gardenImg=loadImage("garden.png")
    catImg=loadAnimation("cat1.png")
    catImg2=loadAnimation("cat2.png","cat3.png")
    catImg3=loadAnimation("cat4.png")
    mouseImg=loadAnimation("cat1.png")
    mouseImg2=loadAnimation("mouse2.png","mouset3.png")
    mouseImg3=loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(0,0,1000,800);
    garden.addImage(gardenImage);
    //create tom and jerry sprites here
    cat=createSprite(550,390,20,20)
    cat.addAnimation(catImg)
    mouse=createSprite(680,578,10,10)
    mouse.addAnimation(mouseImg)

}

function draw() {

    background(255);
    keyPressed()
    //Write condition here to evalute if tom and jerry collide
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.addAnimation(catImg3)
      cat.changeAnimation(catImg3)
    Text(mouseX +"," + mouseY+ mouseX+mouseY)
    cat.velocityX=0
    mouse.addAnimation(mouseImg3)
    mouse.changeAnimation(mouseImg3)
  }
    drawSprites();
}


function keyPressed(){
    
  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation(catImg2)
    cat.changeAnimation(catImg2)
    mouse.addAnimation(mouseImg2)
    mouse.changeAnimation(mouseImg2)
}

}
