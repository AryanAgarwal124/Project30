const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14, block15, block16;
var block17,block18,block19,block20,block21,block22;
var block23,block24,block25,block26,block27,block28, block29
var ground1, ground2, ground3;

var polygon
var img;
var sling

function preload(){
  img = loadImage("polygon.png");

}

function setup()
{
    createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    //creating grounds
    ground1 = new Ground(595,320,230,10);
    ground2 = new Ground(900,215,200,10);
    ground3 = new Ground(750, 600, 1500, 30)
  
    //floor 5 of 1st ground
    block23 = new Block(530,300,30,40);
    block24 = new Block(560,300,30,40);
    block25 = new Block(590,300,30,40);
    block26= new Block(620,300,30,40);
    block27 = new Block(650,300,30,40);
    block28 = new Block(680,300,30,40);


    //floor 4 of 1st ground
    block1 = new Block(600,260,30,40);
    block2 = new Block(570,260,30,40);
    block3 = new Block(540,260,30,40);
    block4 = new Block(630,260,30,40);
    block5 = new Block(660,260,30,40);
  
    //floor 3 of 1st ground
    block6 = new Block(585,220,30,40);
    block7 = new Block(555,220,30,40);
    block8 = new Block(615,220,30,40);
    block9 = new Block(645,220,30,40);
  
    //floor 2 of 1st ground
    block10 = new Block(600,180,30,40);
    block11 = new Block(570,180,30,40);
    block12 = new Block(630,180,30,40);
  
    //floor 1 of 1st ground
    block13 = new Block(600,140,30,40);
  

    //floor 3 of 2nd ground
    block14 = new Block(900,170,30,40);
    block15 = new Block(930,170,30,40);
    block16 = new Block(870,170,30,40);
    block17 = new Block(840,170,30,40);
    block18 = new Block(960,170,30,40);
  
    //floor 2 of 2nd ground
    block19 = new Block(900,140,30,40);
    block20 = new Block(930,140,30,40);
    block21 = new Block(870,140,30,40);
  
    //floor 1 of 2nd ground
    block22 = new Block(900,110,30,40);

    //creating polygon
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling = new SlingShot(this.polygon,{x:150, y:300});

}

function draw() {
    background(220);
    Engine.update(engine);
 
    imageMode(CENTER);
    image(img,polygon.position.x,polygon.position.y,40,40);

    fill("black")
    textSize(23)
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",50 ,50);
    text("Press Space to get a 2nd chance to play",180 ,90);

    //displaying the objects 
    ground1.display();
    ground2.display();
    ground3.display();
     
    sling.display();

    fill("lightGrey")
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();


    fill(rgb(135, 205, 236));
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
  
    fill("lightPink");
    block6.display();
    block7.display();
    block8.display();
    block9.display();
  
    fill("lightGreen");
    block10.display();
    block11.display();
    block12.display();

    fill("Grey");
    block13.display();

    fill(rgb(135, 205, 236));
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    fill("lightGreen");
    block19.display();
    block20.display();
    block21.display();

    fill("lightPink");
    block22.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    sling.fly();
  }
  
  function keyPressed() 
  {
    if (keyCode === 32) 
    {
      Matter.Body.setPosition(this.polygon, {x:150, y:300}) 
       sling.attach(this.polygon);
    }
  }