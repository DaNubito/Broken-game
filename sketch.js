const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var ground_options={
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(30, 10, 30, ball_options);
	Engine.run(engine);
    groundObj = new Ground(200,350,350,10,ground_options)
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
  Engine.update(engine);
 
}



