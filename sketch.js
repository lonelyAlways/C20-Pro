var car,wall;
var speed,weight;
var boundary1,boundary2,boundary3;


function setup() {
  createCanvas(1600, 400);
  
  car=createSprite(50,50,30,10)

  wall=createSprite(1500,50,10,30)
  wall.shapeColor="grey"

  boundary1=createSprite(770,100,1800,7)
  boundary1.shapeColor="white"

  boundary2=createSprite(770,200,1800,7)
  boundary2.shapeColor="white"

  boundary3=createSprite(770,300,1800,7)
  boundary3.shapeColor="white"
}

function draw() {
  background(0)
  edges=createEdgeSprites()
  text(mouseX+","+mouseY,mouseX,mouseY)
  
  car.velocityX=5

  speed=random(55,90);
  weight=random(400,1500)

  if(wall.x-car.x < (car.width + wall.width)/2)
  {
  car.velocityX=0
 
  var deformation=0.5 * weight *speed*speed/22509;
  if(deformation>180)  
{
  car.shapeColor=color(255,0,0);
}
      if(deformation<180 && deformation<100)
      {
        car.shapeColor=color(230,230,0);
      }            
      if(deformation<100)
      {
        car.shapecolor=color(0,255,0);
      }
  }
 
  drawSprites();
}