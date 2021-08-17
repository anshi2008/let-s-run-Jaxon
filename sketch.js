var RunnerImg,runner, PathImg ,path,PowerImg,power,left_boundary,right_boundary;


function preload(){
  //pre-load images
  RunnerImg = loadAnimation("Runner-1.png" , "Runner-2.png")
  PathImg = loadImage("path.png")
  PowerImg = loadImage("power.png")
}

function setup(){
  createCanvas(600,600);

  //creating Path
path = createSprite(300,300)
path.addImage(PathImg)
path.velocityY = 5

  //creating Runner
runner = createSprite(180,340,50,170);
runner.addAnimation("running",RunnerImg)
runner.scale = 0.1

//creating the power
power = createSprite(300,80,100,100)
power.addImage(PowerImg)
//creating the boundary
left_boundary = createSprite(0,300,100,600)
right_boundary = createSprite(390,300,80,600)

//making both boundary invisible
left_boundary.visible=false;
right_boundary.visible=false;


}

function draw() {
  background("grey");
  
  

  //making runner moving with mouse
  runner.x=World.mouseX;

  //making the path infinite
  if (path.y>600){
    path.y=path.height/2;
  }
drawSprites()
}
