const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;



	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
    rope1=new Rope(bobObject1.body, {x:340, y:200})
    rope2=new Rope(bobObject2.body,{x:400, y:200})
	rope3=new Rope(bobObject3.body, {x:460, y:200})
	rope4=new Rope(bobObject4.body, {x:520, y:200})
	rope5=new Rope(bobObject5.body, {x:580, y:200})


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);


  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body, {x:mouseX, y:mouseY});
}


