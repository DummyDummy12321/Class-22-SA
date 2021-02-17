const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gnd;

function setup()
{
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    var prop = 
    {
        isStatic : true
    }
    gnd = Bodies.rectangle(400,790,800,20, prop);
    World.add(world, gnd);

}

function draw()
{
    background(0);

    Engine.update(engine);

    fill("green")
    rectMode(CENTER);
    rect(gnd.position.x, gnd.position.y, 800,20);

  

    
}