var player;
var score = 0;
var wormGroup;


function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  player = createSprite(50,550,30,30) 
  wormGroup = new Group ()
}

function draw() {
  background("black");  
  stroke("red")
  noFill()
  ellipse(100,350,50,20)
  player.x = mouseX
  player.y = mouseY
  if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
    text("NO CHEATING!!",200,200);
    player.x=30;
    player.y=30;
  }
  generateWorm()
  for(var i = 0 ; i< (wormGroup).length ;i++){
    var temp = (wormGroup).get(i) ;
    if (player.isTouching(temp)) {
      score++;
      temp.destroy();
      temp=null;
      }   
    }
drawSprites()
textSize(30)
text("worm destroy = "+score,350,50)
}

function generateWorm()
{
  if (frameCount%15===0)
    {
    var worm = createSprite(100,350,random(30,70),random(2,8))

    worm.shapeColor = "blue"
    worm.velocityX = random(-4,8)
    worm.velocityY = random(-4,8)
    wormGroup.add(worm)

  
}
}