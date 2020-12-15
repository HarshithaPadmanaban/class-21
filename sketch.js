var fixedrect,movingrect
var rect1,rect2


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(400,200,50,50);
  fixedrect.shapeColor="green"
  movingrect.shapeColor="blue"
  rect1=createSprite(100,100,50,50)
  rect2=createSprite(300,100,50,50)
}

function draw() {
  background(255,255,255);  
  rect1.x=World.mouseX
  rect1.y=World.mouseY
  if(isTouching(rect1,rect2)){
    rect2.shapeColor="red"
    rect1.shapeColor="red"    
  }else{
    rect2.shapeColor="green"
rect1.shapeColor="blue"   
  }
  drawSprites();
}


