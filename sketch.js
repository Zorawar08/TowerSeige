const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,310,70,70);
    box2 = new Box(770,310,70,70);
    box3 = new Box(840,310,70,70);
    box4 = new Box(910,310,70,70);
    box5 = new Box(630,310,70,70);
    box6 = new Box(665,240,70,70);
    box7 = new Box(735,240,70,70);
    box8 = new Box(805,240,70,70);
    box9 = new Box(875,240,70,70);
    box10 = new Box(700,170,70,70);
    box11 = new Box(770,170,70,70);
    box12 = new Box(840,170,70,70);
    box13 = new Box(735,100,70,70);
    box14 = new Box(805,100,70,70);
    box15 = new Box(770,30,70,70);
    bird= new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   //pig1.display();
   // log1.display();

    box3.display();
    box4.display();
   //pig3.display();
   // log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
   // log4.display();
    //log5.display()
    bird.display();
    platform.display();
    //log6.display()
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode = 32){
        slingshot.attach(bird.body)

    }
}