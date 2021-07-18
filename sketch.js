const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameState=0
var database;
var playerCount=0
var Resources=0
var allPlayers;
var player,player_1,player_2,players
var mySound,myTrack
var Reso,Reso1,Reso2,Reso3,Reso4;
var Thanos_img,blocks,iron_man,backyo,resources
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,ground;
var form


function preload(){
Thanos_img=loadImage("images/thanos.jpg")
    blocks=loadImage("images/images.jpeg")
    iron_man=loadImage("images/iron_2.png")
  backyo=loadImage("images/endgame.jpeg")
  resources=loadImage("images/resources.png")
  soundFormats('mp3','ogg')
mySound=loadSound('Music/welcome')
mySound.setVolume(0.001)
  soundFormats('mp3','ogg')
myTrack=loadSound('Music/playing3')
myTrack.setVolume(0.001)


}
function setup(){
    engine = Engine.create();
    world = engine.world;
    canvas=createCanvas(1500,880)
    
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

  
 


}
function draw(){
    Engine.update(engine);
    background(backyo);

    mySound.play();


    
    if(playerCount === 2){
      game.update(1);
    }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }
         
  
      


    


    

     
   

    drawSprites() 

    
}


