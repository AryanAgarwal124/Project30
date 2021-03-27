class Block{
  constructor(x, y, width, height) {
      var options = {
        restitution : 0.7,
        friction : 0.6,
        isStatic : false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png")
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed < 5){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     }

     else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 30, 40);
      pop();
    }


 }
}
