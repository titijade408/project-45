var panda,pandaImg,bgImg,bambo,bamboimg,ground,rocks,rocks2,rock3,rocksImg,rocks2Img,rock3Img
function preload(){
    pandaImg=loadImage("pandarunning.png")
    bgImg=loadImage("bamboforest.jpg")
    bamboimg=loadImage("bamboo.png")
    rocksImg=loadImage("rocks.png")
    rocks2Img=loadImage("rocks2.png")
    rocks3Img=loadImage("rocks3.png")
}
function setup(){
   createCanvas(1200,400)
    panda=createSprite(50,250,20,30)
    panda.addImage(pandaImg)
    panda.scale=0.25
    ground=createSprite(1200,335,1200,10)
    ground.velocityX=-3
    ground.x=ground.width/2
    ground.shapeColor="green"
     rocks=createSprite(50,250,20,30)
     rocks.addImage(rocksImg)
     rocks.scale=0.2
     rocks2=createSprite(50,250,20,30)
     rocks2.addImage(rocks2Img)
     rocks2.scale=0.25
     rocks3=createSprite(50,250,20,30)
     rocks3.addImage(rocks3Img)
     rocks3.scale=0.25
     

}
function draw(){
    background("white")
    if(ground.x<0){
      ground.x=ground.width/2
      
    }
    bamboo()
    rocks()
    rocks2()
    rocks3()
    drawSprites()
}
function bamboo(){
   if(frameCount%150===0){
       var bambo=createSprite(1200,300,10,20)
       bambo.velocityX=-3
       bambo.addImage(bamboimg)
   }
}
function rocks(){
    if(frameCount%150===0){
        var rocks=createSprite(1200,300,10,20)
     rocks.velocityX=-3
        rocks.addImage(bamboimg)
    }

}