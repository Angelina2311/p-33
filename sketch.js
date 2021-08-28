const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var backgroundImage;
var particles = [];
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  }
function preload(){
 backgroundImage = loadImage("snow3.jpg");
}



function draw() {
  background(backgroundImage);
  Engine.update(engine);
  if (frameCount%30===0){
    particles.push(new Snow(random(0,800),0));
  }

  //display the particles 
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
  drawSprites();
}
  