

var blockObject1,blockObject2,blockObject3,blockObject4,blockObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	//Create the Bodies Here.
 blockObject1 = new Block(330,235,30,40);
 blockObject2 = new Block(360,235,30,40);
 blockObject3 = new Block(390,235,30,40);
 blockObject4 = new Block(420,235,30,40);
 blockObject5 = new Block(450,235,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  blockObject1.display();
  blockObject2.display();
  blockObject3.display();
  blockObject4.display();
  blockObject5.display();
  
  drawSprites();
 
}





