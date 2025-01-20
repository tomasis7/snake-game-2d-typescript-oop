class Star extends Entity {
  /**
   * Creates a new instance of the Star class.
   *
   * The Star is given a random horizontal position at the top of the screen,
   * a fixed size, and an image. The vertical velocity is randomly determined
   * between 3 and 5 to simulate falling. The initial direction is set to
   * (0, 0).
   */
  constructor() {
    super(
      createVector(random(width), 50), // Random x, start y at 50
      createVector(50, 50),           // Fixed size
      images.star,                    // Image
      0,                              // Horizontal speed (0)
      0,                              // Vertical speed
      createVector(0, 0)              // Initial direction
    );
  }

  /**
   * Updates the position of the Star entity by adding the velocity to the
   * current position. This is done to simulate the falling of the stars.
   */
  update(): void {
    this.position.add(this.velocity);
  }

  /**
   * Moves the Star entity based on its direction and velocity.
   *
   * This function will move the Star entity in the direction it is facing at
   * the speed set by its velocity.
   */
  move(): void {
    // Move star entity
  }
}
