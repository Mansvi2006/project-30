const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var shelf1, shelf2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12,
 box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var polygon, polygonImg;
var slingshot;

function preload()
{
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  shelf1 = new Shelf(width/2-100, height/2+150, 300, 20);
  shelf2 = new Shelf(width/2+300, height/2-50, 200, 20);

  polygon = Bodies.circle(50, 200, 10);
  World.add(world, polygon);

  slingshot = new Sling(this.polygon, {x: 100, y: 200});

  box1 = new Box(290,340);
  box2 = new Box(310,340);
  box3 = new Box(330,340);
  box4 = new Box(350,340);
  box5 = new Box(370,340);
  box6 = new Box(390,340);
  box7 = new Box(410,340);
  box17= new Box(700,140);
  box18= new Box(720,140);
  box19= new Box(740,140);
  box20= new Box(760,140);
  box21= new Box(780,140);


  box8 = new Box(310,301);
  box9 = new Box(330,301);
  box10 = new Box(350,301);
  box11 = new Box(370,301);
  box24 = new Box(721,98);
  box22 = new Box(741,98);
  box23 = new Box(761,98);
  box25 = new Box(740,58);


  box13 = new Box(330,259);
  box14 = new Box(349,259);
 // box15 = new Box(370,260);
  box16 = new Box(345,218);
  
  

}

function draw() {
  background(57,43,44); 
  //(mouseX + ", " + mouseY, 100,100);

  fill("white");
  text("Drag The Polygon, To Release It Towards The Stones",50,50);
  text("Press Space To Get Another Chance",60,70);

  Engine.update(engine);

  drawSprites();

  shelf1.display();
  shelf2.display();

  fill(" blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();



  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  //box12.display();
  box22.display();
  box23.display();
  box24.display();

  fill("green");
  box13.display();
  box14.display();
  //box15.display();
  box25.display();

  fill("grey");
  box16.display();

  
  slingshot.display();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon, {x:100 , y:200});
    slingshot.attach(polygon.body);
  }
}