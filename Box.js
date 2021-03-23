class Box{
    constructor(x,y){
        var options = {
            restitution : 1
        }
        this.visibility =255;
        this.body = Bodies.rectangle(x,y,30,40,options);
        this.width = 30;
        this.height = 40;
        World.add(world,this.body);
    }
    display(){

    if(this.body.speed<3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    else{
            push();
            tint(255,this.visibility);
            this.visibility=this.visibility-5;
            pop();
        }
        
    }
}