var balloon,balloonImage1,balloonImage2;
var database,position ;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);
var balloonPosition=database.ref("balloon/position");
balloonPosition.on("value",readPosition,showError);
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(-2,0);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(2,0)
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,-2)
    balloon.scale=balloon.scale-0.002
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,2)
    balloon.scale=balloon.scale+0.002

    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
/*function updateHeght(x,y){
database.ref("ballon/height").set({
'x':Height.x+x,
'y':height.y+y
})
}

function readHeight(data){
height=data.val();
balloon.x=height.x;
balloon.y=height.y;
}*/

function showError(){
  console.log("this is the error")
}
function writePosition(x,y){
  database.ref("balloon/position").update({
    x:balloon.x+x,
    y:balloon.y+y
  })


}
function readPosition(data){
position=data.val()
balloon.x=position.x;
balloon.y=position.y;
}
