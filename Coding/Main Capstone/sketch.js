//global variables
var asteroid, asteriodImage, asteriodGroup;
var gameBackground, backgroundImage;
var blackHole, blackHoleImage;
var astronaut, astronautImage;
var meteor, meteorImage, meteorGroup;
var star, starImage, starGroup;

function preload()
{
  backgroundImage =loadImage("./assets/background3.png");
  asteriodImage = loadImage("./assets/asteroid.png");
  blackHoleImage = loadImage("./assets/blackhole.jpeg");
  astronautImage = loadImage("./assets/pc.png");
  meteorImage = loadImage("./assets/meteor.png");
  
  //star animation images 
  
}

function setup() {
  createCanvas(1000,700);
  
  //creating the background and making it move
  gameBackground = createSprite(500,350,4000,700);
  gameBackground.addImage(backgroundImage);
  gameBackground.scale = 2;
  gameBackground.velocityX = -3;

  //creating the PC of the game 
  astronaut = createSprite(100,100,10,10);
  astronaut.addImage(astronautImage);
  

  textSize(15);
}

function draw() 
{
  background(255);
  
  if(gameBackground.x<0)
  {
      gameBackground.x=500;
  }
 
  drawSprites();
}


