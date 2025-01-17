class Star extends Entity {
    constructor(
    ) {
      super(position, size, 0, image, speed, direction);
    }
  
    update(): void {
      this.position.y += this.speed;
    }
  
    move(): void {
      // Move star entity
    }
  }