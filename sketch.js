var backgrnd,backgrndImg;
var boy,boyImage
var score = 0;
var starGroup,birdGroup;
var star , starImage;

var gameState = "play";

function preload(){
backgrndImg = loadImage("jungle.jpg");
  boyImage= loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
  
  starImage = loadImage("tar.png");
  birdImage= loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
}

function setup() {
 createCanvas(600,300);
  
  edges = createEdgeSprites();
  
  backgrnd  = createSprite(300,150);
  backgrnd.addImage(backgrndImg);
  backgrnd.scale=0.5;
  backgrnd.velocityX = -2;
  
  boy = createSprite(160,230,20,40);
  boy.addAnimation("Boy running", boyImage); 
  boy.scale = 0.5;
    
   
  birdGroup = new Group();
  starGroup = new Group();
}

function draw() {
  
  if(gameState === "play"){
    if(backgrnd.x<240){
    backgrnd.x=300
  }
 
  spawnStars();
  spawnBird();
  if(keyDown("SPACE")){
    boy.velocityY = -15 ;
  }
  
  boy.velocityY = boy.velocityY+0.8;
  
  if(boy.isTouching(starGroup)){
    starGroup.destroyEach();
    score=score+10;
     
     }
  
  boy.collide(edges);
  drawSprites();
  text("SCORE : "+score,450,50);
    
    if(boy.isTouching(birdGroup)){
      gameState = "end";
      
    }
    
}
  if(gameState === "end"){
    background(0);
    textSize(40);
    fill("red")
    text("Game Over!!",200,200)
  }
 
  
}


function spawnStars() {
  //write code here to spawn the clouds
  if (frameCount % 180 === 0) {
    star = createSprite(600,180,40,10);
    star.addImage(starImage)
    star.y = Math.round(random(10,60))
    star.scale = 0.2;
    star.velocityX = -3;
    star.lifetime = 200;
    starGroup.add(star);
   
    }
}

function spawnBird() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    bird = createSprite(20,50,20,40);
    bird.addAnimation("Boy running", birdImage);
    bird.y = Math.round(random(10,60))
    bird.scale = 0.5;
    bird.velocityX = 3;
    bird.lifetime = 200;
    birdGroup.add(bird);
   
    }
}