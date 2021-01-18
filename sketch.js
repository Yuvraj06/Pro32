const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var polygon_img;
var score = 0;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,800);
    engine=Engine.create();   
    world = engine.world;

    ground = new Ground(600, 800, 1300, 10);

    stand = new Ground (1000,600,400,20);

    //first layer!!

    box = new Box(1000,565,50,50);
    box2 = new Box(950,565,50,50);
    box3 = new Box(900,565,50,50);
    box4 = new Box(1050,565,50,50);
    box5 = new Box(1100,565,50,50);

    //Second layer!

    box6 = new Box(1000,515,50,50);
    box7 = new Box(950,515,50,50);
    box8 = new Box(1050,515,50,50);

    //third layer

    box9 = new Box(1000,465,50,50);

    var options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }

    polygon = Bodies.circle(300,410,20,options);
    World.add(world, polygon);

   
    
    slingShot = new Slingshot(this.polygon,{x:300,y:400});

     


}

function draw(){

    background("lightblue");


    rectMode(CENTER);
    
    Engine.update(engine);

    
    
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,70,70);

    stand.display();
    ground.display();

    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    slingShot.display();

    fill("lightblue");
    strokeWeight(4);
    stroke("white");
    textSize(30);
    text("Score: " + score,1000,40);

    drawSprites();

    box.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score();
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.polygon);
    }
}