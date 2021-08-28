class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 
        this.snow = loadImage("snow5.webp");
         World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        image(this.snow,0,0,this.r,this.r);
        pop();
    }

};