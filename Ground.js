class Ground{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.body = Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}
