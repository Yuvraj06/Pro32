class Box {

    constructor(x, y, w, h) {

        var option = {

            'restitution':0.8,
            'friction':1.0,
            'density':0.2

        }

        this.body = Bodies.rectangle(x, y, w, h, option);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        this.Visibility = 255;

    }

    display() {

        if(this.body.speed<3){

            // var angle = this.body.angle;
            var pos = this.body.position;
            // push();
            // translate(pos.x,pos.y);
            // rotate(angle);
            rectMode(CENTER);
            stroke(255, 245, 0,this.Visibility);
            strokeWeight(8) 
            fill(255,255);
            rect(pos.x, pos.y, this.width, this.height);
            // pop();


        }
        else{

            var pos = this.body.position;
      
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility-5;
            fill(255,this.Visibility);
            stroke(255, 245, 0,this.Visibility);
            strokeWeight(8)
            rect(pos.x, pos.y, this.width, this.height);

            
            pop();
            
          
        }

    }

    Score(){
        if(this.Visibility === 0){
            score = score+1;
        }
    }

}