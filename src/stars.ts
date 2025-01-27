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
}
