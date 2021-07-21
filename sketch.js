const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1, ball2 ,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball1 = Bodies.circle(260,100,radius/2,ball_options);
	fill("pink");
	World.add(world,ball1);

	ball2 = Bodies.circle(400,100,radius/2,ball_options);
	fill("pink");
	World.add(world,ball2);

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(850,600,20,120);
	rightSide = new ground(1350,600,20,120);
	middleG = new ground (1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball1.position.x,ball1.position.y,radius,radius);

  ellipse(ball2.position.x,ball2.position.y,radius,radius);

  

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  middleG.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1,ball1.position,{x:85,y:-55});
    
  	}
	  else{
		  if(keyCode === DOWN_ARROW){
			  Matter.Body.applyForce(ball2, ball2.position, {x:85, y: -65});
		  }
	  }
}

