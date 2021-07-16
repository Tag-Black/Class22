const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myengine, ground, ball, myworld

function setup() {
  createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
  ground = Bodies.rectangle(400, 390, 800, 20, {isStatic: true});
  ball = Bodies.circle(100, 180, 20, {restitution: 1})
  World.add(myworld, [ground, ball]);
  console.log(ground);
}

function draw() {
  background(0);  
  
  Engine.update(myengine);

  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x, ball.position.y, 20, 20);

  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x, ground.position.y, 800, 20);
  //drawSprites();
}