class Log extends Base{
    constructor(x, y, height, angle) {
     super(x, y, 20, height, angle);

      this.width = 20;
      this.height = height;
      
      this.image = loadImage("sprites/wood2.png"); 

      this.height = height;
      Matter.Body.setAngle(this.body, angle);
    }
  };
  