var playerImage,player,enemy1,enemy1Image,enemy2,enemy2Image,arrow,arrowImage,backgroundImage,arrows, loaded;
var arrowGroup,enemy1Group;
function preload(){
    playerImage=loadImage("Archer-Character.png");
    backgroundImage=loadImage("Background.png");
    enemy1Image=loadImage("Enemy1.png");
    enemy2Image=loadImage("Enemy2.png");
    arrowImage=loadImage("Arrow.png");
    arrows=20;
    loaded=true;
    arrowGroup=[];
    enemy1Group=[];
}
function setup(){
    createCanvas(windowWidth,8000);
    player=createSprite(windowWidth/2,50,50,50);
    player.addImage("Basic",playerImage);
    player.scale=0.3;
    enemy1Spawn();

}
function draw(){
    background(backgroundImage);
    drawSprites();
   text("Arrows:"+arrows,player.position.x,player.position.y-70);
    if(keyDown("W")){
        player.position.y-=4;
    }
    if(keyDown("S")){
        player.position.y+=4;
    }
    if(keyDown("A")){
        player.position.x-=4;
    }
    if(keyDown("D")){
        player.position.x+=4;
    }
    if(keyDown("E")){
        arrowShoot();
    }
    if(keyDown("R")){
        if(arrows>0&&loaded===false){
            loaded=true
            arrows-=1;
        }
        
    }
    enemyCollides_1();
    
}

function enemy1Spawn(){
    for(var i=0;i<10;i++){
        enemy1=createSprite(Math.round(random(50,width)),Math.round(random(200,1000)));
        enemy1.addImage("enemyImage",enemy1Image);
        enemy1.scale=0.25;
        enemy1Group.push(enemy1);
    }
}
function arrowShoot(){
   
        if(loaded===true){arrow=createSprite(player.position.x,player.position.y,10,10);
            arrow.addImage("arrowImage",arrowImage);
            arrow.scale=0.3;
            arrow.velocity.y=40;
           
            loaded=false;
            arrowGroup.push(arrow);
        }
    
}
function enemyCollides_1(){
    for(var i=0;i<arrowGroup.length;i++){
        for(var j=0;j<enemy1Group.length;j++){
            if(arrowGroup[i].collide(enemy1Group[j])){
                console.log("collision succesful")
                
                arrowGroup[i].remove()
                enemy1Group[j].remove()
             
              
            i=0
            j=0
            }
        }
    }

}