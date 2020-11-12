var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FruitGroup, obstacleGroup
var Fruit, bananaImage
var score1
var Score2
var obstaclesGroup
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
 
  monkey.scale=0.1
 
  ground=createSprite(400,350,800,10);
  ground.velocityX=-6;
  ground.x= ground.width/2;
   
    obstaclesGroup=createGroup();
   FruitGroup=createGroup();
   score1=0;
   Score2=0;
}


function draw() {
background("white");
  
    if (ground.x<0){
   ground.x= ground.width/2;
  }
 
   
     
       if(keyDown("space")) {
       
      monkey.velocityY = -12;
  }
      monkey.velocityY = monkey.velocityY + 0.8      
      monkey.collide(ground); 
   
  
  if (monkey.isTouching(FruitGroup)){
    Score2=Score2+1
    FruitGroup.destroyEach();
  }
         

     if (monkey.isTouching(obstaclesGroup)){
       score1=0
       Score2=0
       monkey.velocityX=0
       ground.velocityY=0
       obstaclesGroup.setVelocityEach=0
       FruitGroup.setVelocityEach=0
       
       obstaclesGroup.setLifetime(-1);
       FruitGroup.setLifetime(-1);
     }

           

     
     
     
     
     
     
   
   
text("Score1: "+ score1, 320,30);
  text("Score2: "+ Score2, 320,50);
   score1 = score1 + Math.round(getFrameRate()/60);
  createEdgeSprites();
  SpawnObstacles();
  SpawnFruits();
  drawSprites();
}
   
  
  
  
  
  
  
  
  
 
   
  
 
  
  
  

 
function SpawnObstacles(){
  if (frameCount % 90 === 0){
   var obstacle = createSprite(200,327,10,40);
   obstacle.velocityX = -6; 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
     obstaclesGroup.add(obstacle);
    obstacle.lifetime = 300;
  }
}
function  SpawnFruits(){
  if (frameCount % 120 === 0){
   var Fruit = createSprite(200,200,10,40);
   Fruit.velocityX = -6; 
    Fruit.addImage(bananaImage);
    Fruit.scale=0.1
     FruitGroup.add(Fruit);
    Fruit.lifetime = 300;
  
  
  
  
  }
}




