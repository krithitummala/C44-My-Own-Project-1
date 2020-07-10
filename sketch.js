var ground,player
var groundImage
var playerImage
function preload(){
   // groundImage = loadImage("")

}
function setup(){
createCanvas(1200,400)
player = new Player(50,300,40,80)
ground = new Ground(600,390,1200,20)
}

function draw(){
background("black");
ground.reset();
player.behaviour();
drawSprites();
}