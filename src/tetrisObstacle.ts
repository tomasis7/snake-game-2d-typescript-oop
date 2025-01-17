class TetrisObstacle extends Entity {
    constructor(position: p5.Vector, size: p5.Vector, image: p5.Image) {
      super(position, size, image, 0, p5.Vector.random2D());
    }
  
    draw(): void {}
  
    update(): void {}
  
    move(): void {}
  }