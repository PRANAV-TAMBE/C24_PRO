class Rub {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1.9
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      circleMode(RADIUS)
      fill("darkblue");
      ellipse(300,320,20);
      pop();
    }
  };