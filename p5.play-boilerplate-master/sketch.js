var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  car=createSprite(50,200,50,50);
  car.velocityX=speed; 
  wall=createSprite(1500,200,60,height/2);

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    deformation=0.5*speed*speed*weight/22500;
    if(deformation>180){
      car.shapecolor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapecolor=color(230,230,0);
    }
    if(deformation<100){
      car.shapecolor=color(0,255,0);
    }
  }

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}