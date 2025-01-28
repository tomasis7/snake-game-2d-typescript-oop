class Ghost extends Entity {
  /**
   * Creates a new Ghost entity.
   *
   * The Ghost is given a random initial position, a size of 100x100, and the
   * image of a ghost. The initial velocity is set to 0.
   */
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(50, 50),
      0.3,
      0.3,
      createVector(0, 0),
      images.ghost
    );
  }

  /**
   * Draws the ghost entity.
   *
   * This method is called by the game's draw loop. It will translate the
   * canvas to the ghost's position, and then draw the ghost's image at the
   * ghost's size.
   *
   * If the ghost's image is not loaded, it will log an error and do nothing.
   */
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

  /**
   * Updates the ghost entity's position and direction.
   *
   * This method is called by the game's update loop. It will call the ghost's
   * move method, and then check if the ghost is outside the canvas. If it
   * is, it will reverse the direction of the ghost in the appropriate
   * dimension.
   */
  update(): void {
    this.position.add(this.velocity);

    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }
}
