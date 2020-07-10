class Ground{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
       // this.body.addImage("ground",groundImage);
        this.body.velocityX = -2;
        this.body.VelocityY = 0;
    }

    reset(){
        if(this.body.x<0){
            this.body.x = 600
        }
    }
}