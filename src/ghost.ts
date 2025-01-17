class Ghost extends Entity {
    constructor(
      position: p5.Vector,
      size: p5.Vector,
      speed: number,
      direction: p5.Vector
    ) {
      super(position, size, ghostImage, speed, direction);
    }
  
    draw(): void {
      if (!ghostImage) {
        console.error("Ghost image not loaded");
        return;
      }
  
      push();
      translate(this.position.x, this.position.y);
      image(
        ghostImage,
        -this.size.x / 2,
        -this.size.y / 2,
        this.size.x,
        this.size.y
      );
      pop();
    }
  
    update(): void {
      this.move();
  
      if (this.position.x < 0 || this.position.x > width) {
        this.direction.x *= -1;
      }
      if (this.position.y < 0 || this.position.y > height) {
        this.direction.y *= -1;
      }
    }
  
    move(): void {
      this.position.add(this.direction.copy().mult(this.speed));
    }
  }