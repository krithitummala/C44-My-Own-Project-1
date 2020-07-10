class Player{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
       // this.body.addImage("player",groundImage);
        
    }

behaviour(){
    if(keyDown("space")&& this.body.y>=340){
        this.body.velocityY = -15;
        
    }
    console.log(this.body.y)
    this.body.velocityY = this.body.velocityY + 1
    this.body.collide(ground.body);

}
}