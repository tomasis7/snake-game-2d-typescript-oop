class Star extends Entity {
  /**
   * Creates a new instance of the Star class.
   */
  constructor(x: number, y: number) {
    super(
      createVector(x, y), // x, y from levelFactory
      createVector(32, 32), // Fixed size
      0, // Horizontal speed (0)
      0, // Vertical speed
      createVector(0, 0), // Initial direction
      images.star // Image
    );
  }

  draw(): void {
    if (!this.image) {
      console.error("Ghost image not loaded");
      return;
    }

    push();
    rectMode(CENTER);
    translate(this.position.x, this.position.y);
    image(this.image, +this.size.x, +this.size.y, this.size.x, this.size.y);
    pop();
  }
}
