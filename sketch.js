const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;

 var engine, world
var drops=[]
var maxDrops=100
var backgroundIMG
function preload(){
 var lightning1= loadImage("2.png")  
}

function setup(){
   engine=Engine.create
   world=engine.world
   createCanvas(400,800)
   umbrella= new Umbrella(200,500)
    if(frameCount%150===0){
        for(var i =0; i < maxDrops; i++){
            drops.push(new Rain(random(0,400), random(0,400)));

        }
    }
}

function draw(){
    Engine.update(engine)
    background(0)
    thunder= createSprite(random(10,370),random(10,30),10,10)
    umbrella.display(); 
     for(var i = 0; i<maxDrops; i++)
     { drops[i].display(); drops[i].updateY() } 
     lightning.addImage("2.png")
     drawSprites();

}   

