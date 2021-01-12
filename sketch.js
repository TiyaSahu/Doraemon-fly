var doraemon,doraemonsad,doraemonImage;
var cloud,cloudImage,obstacleGroup;
var star,starImage,starGroup;
var gameState="play";

function preload(){
doraemonImage=loadImage("doraemon.png");
  doraemonsad=loadImage("doraemonsad.gif");
  cloudImage=loadImage("cloud.png");
  starImage=loadImage("star.png");
}

function setup() {
  createCanvas(displayWidth-40,displayHeight-90);
 
  doraemon=createSprite(250,300,10,10);
  doraemon.addImage(doraemonImage);
  doraemon.scale=0.1;
  
  score=0
  starGroup=new Group();
  obstacleGroup=new Group();
}

function draw() {
  background("lightblue");
  if(gameState==="play"){
    if(keyDown("left_arrow")){
      doraemon.x=doraemon.x-5;
    }
    if(keyDown("right_arrow")){
      doraemon.x=doraemon.x+5;
    }
    if(starGroup.isTouching(doraemon)){
      starGroup.destroyEach();
      score=score+1;
    }
    if(obstacleGroup.isTouching(doraemon)){
      gameState="end"
      
      starGroup.destroyEach();
      obstacleGroup.destroyEach();
      starGroup.setVelocityYEach=0;
      obstacleGroup.setVelocityYEach=0;
    }
  }
  
  spawncloud();
  spawnscore();
  
  drawSprites();
  
  if(gameState==="end"){
     background(235);
    textSize(50);
    stroke("red");
    fill("red");
    text("GAME OVER",240,300);
   
  }
  
  textSize(18);
  fill("black");
  text("Score:"+score,300,30);
 
}

function spawncloud(){
  if(frameCount%100===0){
    cloud=createSprite(80,40,10,10);
    cloud.addImage(cloudImage);
    cloud.x=Math.round(random(displayWidth-50));
    cloud.scale=0.4;
    cloud.velocityY=2;
    cloud.lifetime=500;
    obstacleGroup.add(cloud);
  }
}

function spawnscore(){
  if(frameCount%200===0){
    star=createSprite(300,50,10,10);
    star.addImage(starImage);
    star.x=Math.round(random(displayWidth-55));
    star.scale=1;
    star.velocityY=3;
    star.lifetime=500;
    starGroup.add(star);
  }
}
  