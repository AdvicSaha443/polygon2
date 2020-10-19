const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon1;
var sling1;
var ground1, ground2, ground3;
var box1, box2, box3, box4, box5;
var box6, box7, box8;
var box9;
var b1, b2, b3, b4;

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon1 = new Polygon(100, 500, 50);
	sling1 = new SlingShot(polygon1.body, {x: 100, y: 500});

	ground1 = new Ground(700, 650, 1400, 5);
	ground2 = new Ground(550, 450, 300, 5);
	ground3 = new Ground(1200, 350, 300, 5);

	box1 = new Box(440, 440, 50, 50);
	box2 = new Box(490, 440, 50, 50);
	box3 = new Box(540, 440, 50, 50);
	box4 = new Box(590, 440, 50, 50);
	box5 = new Box(640, 440, 50, 50);
	box6 = new Box(485, 390, 50, 50);
	box7 = new Box(535, 390, 50, 50);
	box8 = new Box(585, 390, 50, 50);
	box9 = new Box(535, 340, 50, 50);

	b1 = new Box(1200, 305, 50, 50);
	b2 = new Box(1150, 305, 50, 50);
	b3 = new Box(1250, 305, 50, 50);
	b4 = new Box(1200, 255, 50, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill(50, 40, 90);
  polygon1.display();
  sling1.display();
  stroke(155);
  fill(50, 65, 35);
  ground1.display();
  ground2.display();
  ground3.display();

  fill(35, 48, 255);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill(94, 14, 00);
  box6.display();
  box7.display();
  box8.display();
  fill(0, 54, 24);
  box9.display();
  
  fill(255, 255, 68);
  b1.display();
  b2.display();
  b3.display();
  b4.display();

  drawSprites();

  text(mouseX + "," + mouseY, mouseX, mouseY);
 
}

function mouseDragged() {
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    sling1.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    sling1.attach(polygon1.body);
  }
}