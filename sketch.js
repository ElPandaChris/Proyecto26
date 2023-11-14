
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	
	Engine.run(engine);
	
  
}

function draw() {
	rectMode(CENTER);
	background(230);
	roofObject.display();
  
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  
	// Dibujar líneas que conectan las bolas con el techo
	stroke(0);
	strokeWeight(3);
	line(bob1.body.position.x, bob1.body.position.y, roofObject.body.position.x - 80, roofObject.body.position.y);
	line(bob2.body.position.x, bob2.body.position.y, roofObject.body.position.x - 40, roofObject.body.position.y);
	line(bob3.body.position.x, bob3.body.position.y, roofObject.body.position.x, roofObject.body.position.y);
	line(bob4.body.position.x, bob4.body.position.y, roofObject.body.position.x + 40, roofObject.body.position.y);
	line(bob5.body.position.x, bob5.body.position.y, roofObject.body.position.x + 80, roofObject.body.position.y);
  }
  


//ELIGE LA OPCIÓN CORRECTA PARA APLICAR UN KEYPRESSED PARA CAMBIAR LA POSICIÓN DEL OBJETO PELOTA A LA IZQUIERDA CUANDO SE PRESIONA LA TECLA DE FLECHA ARRIBA

 function keyPressed() {
 	if (keyCode === UP_ARROW) {
 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
 	}
 }
