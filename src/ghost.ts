class Ghost extends Entity {
    constructor(
      position: p5.Vector,
      size: p5.Vector,
      velocity: p5.Vector,
      direction: p5.Vector
    ) {
      super(position, size, images.ghost, velocity.x, velocity.y, direction);
    }
  
    draw(): void {
      if (!this.image) {
        console.error("Ghost image not loaded");
        return;
      }
  
      push();
      translate(this.position.x, this.position.y);
      image(
        this.image,
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
      this.position.add(this.direction.copy().mult(this.velocity));
    }
  }