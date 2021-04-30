const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


var ground, stand1, stand2, slingshot,ball,box1,box2;
var box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box12,box13,box14,box14,box15

function setup() {
  createCanvas(1200,400);
  
  ground = new Ground();
  stand1 = new Ground(380,300,270,10);
  stand2 = new Ground(700,200,200,10);


  box1 = new Box(280,275,30,40)
  box2 = new Box(310,275,30,40)
  box3 = new Box(340,275,30,40)
  box4 = new Box(370,275,30,40)
  box5 = new Box(400,275,30,40)
  box6 = new Box(430,275,30,40)
  box7 = new Box(460,275,30,40)
  box8 = new Box(490,275,30,40)

  box9 = new Box(310,235,30,40)
  box10 = new Box(340,235,30,40)
  box11 = new Box(370,235,30,40)
  box12 = new Box(400,235,30,40)
  box13 = new Box(430,235,30,40)
  box14 = new Box(460,235,30,40)
  box15 = new Box(490,235,30,40)


  ball = Bodies.circle(50,200,20);
  World.add(world, ball);

  slinghot = new SlingShot(this.ball,{x:200,y:200});
  
}

function draw() {
  background(255,255,255);
  
  ground.display();
  stand1.display();
  stand2.display();

  box1.display();
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box15.display()
  box14.display()
  



  ellipse(ball.position.x,ball.position.y,20)
  slinggshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}