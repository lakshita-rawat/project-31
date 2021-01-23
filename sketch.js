const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
particle1= new Paricles(30,30,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
}



