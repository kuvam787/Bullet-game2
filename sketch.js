var bullet ,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
speed = random(223,321)
weight = random(32,52)
thickness = random(22,83)

bullet  = createSprite(50,200,50,50);
bullet.velocityX = speed;
bullet.shapeColor = "blue";

wall = createSprite(1500,200,60,height/2);

}

function draw() {
  background(255,255,255); 
  wall.shapeColor= "black";
  
  if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor= color(255,0,0);
}
if(damage<10){
  wall.shapeColor = color(0,255,0);
}

  }
  drawSprites();
}
  
function hascollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallleftEdge = wall.x;

if(bulletRightEdge>=wallleftEdge){

return true;
}
return false;
}