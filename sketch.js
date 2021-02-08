
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops = []; 
var world,engine;
function preload()
{
thunder1 = loadImage('1.png')	
thunder2 = loadImage('2.png')	
thunder3 = loadImage('3.png')	
thunder4 = loadImage('4.png')	

}

function setup() {
	createCanvas(400, 700);
	
	
	engine = Engine.create();
	world = engine.world;
	umbrella = new Umbrella(200,500)
	//Create the Bodies Here.
	if (frameCount%150===0){
		for (var i=0; i<100;i++){
			drops.push(new Drops(random(0,400),random (0,400)))
		}
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rand = Math.round(random (1,4))
  if (frameCount%80===0){
	  i=frameCount;
	  thunder= createSprite(random(10,370),random(10,30),10,10)
	  if (rand === 1){
		  thunder.addImage(thunder1)
	  }
	  if (rand === 2){
		thunder.addImage(thunder2)
	}if (rand === 3){
		thunder.addImage(thunder3)
	}if (rand === 4){
		thunder.addImage(thunder4)
	}
	thunder.scale = 0.3;
  }
  if (i+10 === frameCount){
	  thunder.destroy();
  }
  umbrella.display();
  for (var i=0; i<100; i++ ){
	  drops[i].display();
	  drops[i].update();

  }

    drawSprites();
 
}



