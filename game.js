class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        background(backyo)
        if(gameState === 0){
          player = new Player();
         
   
        
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
       
   
         form = new Form()
        form.display();
        }
        player_1=createSprite(displayWidth/2, displayHeight-70,0.7,0.3)
        player_1.addImage(iron_man)
        player_1.scale=0.2

        player_2=createSprite(displayWidth/2+70, displayHeight-70,0.7,0.3)
        player_2.addImage(iron_man)
        player_2.scale=0.2
       
    }


    play(){
       form.hide()
       //player.getPlayerInfo();
       
       myTrack.play();
       background(Thanos_img);

       
     
        
 
    
   
      
        Reso=createSprite(100,250,10,20)
        Reso.addImage(resources)
        Reso.scale=0.2

        Reso1=createSprite(700,250,10,20)
        Reso1.addImage(resources)
        Reso1.scale=0.2

        Reso2=createSprite(1300,670,10,20)
        Reso2.addImage(resources)
        Reso2.scale=0.2

        Reso3=createSprite(1020,500,10,20)
        Reso3.addImage(resources)
        Reso3.scale=0.2

        Reso4=createSprite(450,500,10,20)
        Reso4.addImage(resources)
        Reso4.scale=0.2

        box1 =  createSprite(150,720,250,20)
        box1.addImage(blocks)
        box2 =  createSprite(1300,720,250,20)
        box2.addImage(blocks)
        box3 =  createSprite(725,720,250,20)
        box3.addImage(blocks)
        box4 =  createSprite(450,550,250,20)
        box4.addImage(blocks)
        box5 =  createSprite(1025,550,250,20)
        box5.addImage(blocks)
        box6 =  createSprite(150,300,250,20)
        box6.addImage(blocks)
        box7 =  createSprite(1300,300,250,20)
        box7.addImage(blocks)
        box8=  createSprite(725,300,250,20)
        box8.addImage(blocks)
        box9 =  createSprite(450,100,250,20)
        box9.addImage(blocks)
     
      
        box10 =  createSprite(1025,100,250,20)
        box10.addImage(blocks)
        ground= createSprite(750,880,1500,10)

       


       players=[player_1,player_2]
       if(allPlayers !== undefined){ 
        for(var plr in allPlayers){
          var index = 0;
          var x = 775 ;
          var y;
          index = index + 1 ;
          x = x + 50;
          //use data form the database to display the cars in y direction
          y = 770
          players[index-1].x = x;
          player[index-1].y = y;
        

       
        

          if(keyDown('W')&& player.index !== null ){
            player.x+=5
            player.update();
           
          }}
      
      

        
      
        


            
        

       

        
    }
  
  }
    
      
}
    
