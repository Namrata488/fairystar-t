var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyImg2;
var star, starBody;

const _________ = Matter.Engine;
const ________ = Matter.World;
const ________ = Matter.Bodies;
const ________ = Matter.Body;

function preload()
{
	starImg = loadImage("images/_________");
  fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
  fairyImg2 = loadImage("images/_______");
	bgImg = loadImage("images/____________");
	fairyVoice = loadSound("sound/__________");

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world;

	//DO:- PALY THE SOUND
	________________

	fairy = createSprite(130, 520);
	fairy.addAnimation("________",___________);  
	fairy.scale =____;

	star = createSprite(650,30);
	star.addImage(__________);
	star.scale = ____;

	var options={
		'restitution':0.5,
		'isStatic':true
	}

	starBody = Bodies.circle(650 , 30 , 5 ,options);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(____);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
    Matter.Body.setStatic(starBody,true);
    fairy.addImage("change",___________)
    fairy.changeAnimation("change")
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){

		//do:- ADD RIGHT MOVEMENT TO FAIRY
        fairy.x = _____________;
	}
	
    if(keyCode === LEFT_ARROW){

		//DO:- ADD LEFT MOVEMENT TO FAIRY
        fairy.x = ___________;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}