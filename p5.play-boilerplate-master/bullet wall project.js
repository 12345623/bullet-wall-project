var bullet,wall;
var speed,weight,thickness;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50,200,5,20);
  bullet.velocityX=speed; 
  wall=createSprite(1500,200,thickness,height/2);

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    deformation=0.5*speed*speed*weight/thickness*thickness*thickness;
    if(deformation>10){
      bullet.shapecolor=color(255,0,0);
    }
    
    if(deformation<10){
      bullety.shapecolor=color(0,255,0);
    }
  }

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}