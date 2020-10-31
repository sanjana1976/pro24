
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball
var ground1
var dustbin, dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paperball = new Paper(50,50);
ground1 = new Ground(400,700,900,20);
dustbin= createSprite(580,620,40,120);
dustbin2= createSprite(740,620,40,120);
dustbin3= createSprite(660,670,200,40);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  ground1.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.Body,paperball.body.position,{x:85,y:-85});
	}
}



