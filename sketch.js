//variables:
var dog,HappyDog;
var garbut,foodS
var bones=20,bone;
var dogfo=20,wa=20


function  preload() {
  
  dogImage=loadImage("dogImg.png");
  dogImage2=loadImage("dogImg1.png");
  rd1=loadImage("running.png")
  rd2=loadImage("runningLeft.png")
  gar=loadImage("Garden.png")
  but=loadImage("button_garden.png")
  dst=loadImage("dogst.jpeg")
  kit=loadImage("kitchen.jpg")
  kitb=loadImage("button_kitchen.png")
  bedb=loadImage("button_bedroom.png")
  batb=loadImage("button_bathroom.png")
 
  milk=loadImage("Food Stock.png")
  bone=loadImage("bone.png")
  dof=loadImage("emo (2).png")
water=loadImage("water.png")
wate=loadImage("wate.png")
dogfoodimg=loadImage("dogfood.png");

bedroo=loadImage("Bed Room.png")
bathroom=loadImage("wash room.png")
}

function setup (){

  createCanvas(1300,580)
  database = firebase.database();

 /* ground=createSprite(200,600,5555,300)
  ground.shapeColor="lightgreen"*/



  milk1 = createSprite(966,440,10,10);
  milk1.addImage(milk);
  milk1.scale = 0.1;
  milk1.visible = false;


  bon=createSprite(950,445)
  bon.addImage(bone)
  bon.scale=0.15
  bon.visible=false

 

  


  
 garbut=createSprite(1200,102)
  garbut.addImage(but) 
  garbut.scale=0.5
  garbut.visible=false

  kitbut=createSprite(1200,152)
  kitbut.addImage(kitb)
  kitbut.scale=0.5
  kitbut.visible=false

  bedrb=createSprite(1200,202)
  bedrb.addImage(bedb)
  bedrb.scale=0.5
  bedrb.visible=false

  bathb=createSprite(1200,252)
  bathb.addImage(batb)
  bathb.scale=0.5
  bathb.visible=false

  ba=createSprite(700,220)
  ba.addImage(bathroom)
  ba.scale=0.9
  ba.visible=false

  be=createSprite(700,220)
  be.addImage(bedroo)
  be.scale=0.9
  be.visible=false

  rd=createSprite(1100,465)
  rd.addImage(rd2)
  rd.scale=0.4
  rd.visible=false

  dog=createSprite(609,340);
  dog.addImage(dst);
  dog.scale = 0.7;
  dog.visible=false

  dog1=createSprite(1049,395);
  dog1.addImage(dogImage2);
  dog1.scale = 0.3;
  dog1.visible=false

 
  
  

  ground=createSprite(200,600,5555,300)
  ground.shapeColor="lightgreen"


background("lightblue")
 
 
  input = createInput("Name of your dog");
  input.position(600,200)
  button = createButton('Play');
  button.position(650,240)
  greeting = createElement('h3');
  button.mousePressed(()=>{
    input.hide()
    button .hide()
    name = input.value();
    background("white")
    dog.visible=true
   
    garbut.visible=true
    kitbut.visible=true
    bedrb.visible=true
    bathb.visible=true

    
  
  
  })
   
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  foodStock.set(20);

 
  
  
  

}

function draw(){
 
  if(mousePressedOver(garbut)){
   
   background(gar)
 
   greeting.html("Press left or right arrow to move your pet dog "+name+"🐶")
   greeting.position(500,10)
   greeting.show()
    rd.visible=true
    dog.visible=false
    ground.visible=false
    dog1.visible=false
    be.visible=false
    ba.visible=false
    milk1.visible=false
    bon.visible=false
  }
  milk1.visible=false
  bon.visible=false
  if(keyDown(LEFT_ARROW)){
    background(gar)
    rd.addImage(rd2)
    rd.x=rd.x-10
  }
  if(keyDown(RIGHT_ARROW)){
    background(gar)
    rd.addImage(rd1)
    rd.x=rd.x+10

  }
 
  if(mousePressedOver(kitbut)){
    background(kit)
    
    be.visible=false
      ba.visible=false
    ground.visible=false
    dog.visible=false
   dog1.visible=true
   rd.visible=false
   milk1.visible=false
   bon.visible=false
   
   greeting.hide()
  
   textSize(37);
  fill("darkred");
  text("Press up/down arrow key to feed your pet  ",50,50);
 // fill("black");
 
 
  

   
  }
  if(foodS !== 0){
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog1.addImage(dogImage2);
      milk1.visible = true;
      bon.visible=false
      be.visible=false
      ba.visible=false
     }
     if(keyWentUp(UP_ARROW)){
      writeStock(foodS);
     // dog1.addImage(dogImage);
      milk1.visible = false;
      bon.visible=false
      be.visible=false
      ba.visible=false
     }
    }
  
    if(foodS == 0){
      dog1.addImage(dogImage);
      foodS = 20;
    }
  
    if(keyWentDown(DOWN_ARROW)){
      bones=bones-1
      //dog.addImage(dogImage2);
      milk1.visible=false
      bon.visible=true
      be.visible=false
      ba.visible=false
     }
     if(keyWentUp(DOWN_ARROW)){
      bones=bones-1
     // dog1.addImage(dogImage);
      milk1.visible=false
      bon.visible=false
      be.visible=false
      ba.visible=false
     }
     if(bones==0){
       bones=20
     }
     
     if(mousePressedOver(bedrb)){
       background("black")
       be.visible=true
       dog.visible=false
       dog1.visible=false
       ground.visible=false
       ba.visible=false
       milk1.visible=false
       bon.visible=false
       greeting.hide()
     }

     if(mousePressedOver(bathb)){
       background("black")
     ba.visible=true
     be.visible=false
       dog.visible=false
       ground.visible=false
       milk1.visible=false
       bon.visible=false
       greeting.hide()
       dog1.visible=false

     }
     
drawSprites();

 

 
}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}


