class Drops {
    constructor(x,y){
        var options = {
            friction: 0.1,
        }
        
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
       
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        rectMode(CENTER);
        fill("blue");
        stroke("blue");
    }

    update(){
        if(this.rain.position.y > height){
              Matter.body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
        }
    }

}
