class TetrisBlock extends Entity {
  
  constructor() {
    super(
      createVector(600, 450),
      createVector(100, 120),
      images.tetrisCube,
      0,
      1,
      createVector(0, 0)
    );
  }

  // draw(): void {
  //   push(); // Save the current drawing state
  //   if (!this.image) {
  //     console.error("TetrisBlock image not loaded");
  //     return;
  //   }

  //   translate(this.position.x, this.position.y);
  //   image(
  //     this.image,
  //     -this.size.x / 2,
  //     -this.size.y / 2,
  //     this.size.x,
  //     this.size.y
  //   );
  //   pop(); // Restore the previous drawing state
  // }

  update(): void {
    return;
  }
}
