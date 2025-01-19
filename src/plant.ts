class Plant extends Entity {
  /**
   * Create a new Plant entity.
   *
   * The plant is given a random initial horizontal position, a fixed y position
   * of 730, a size of 50x70, the image of a plant, and an initial velocity of
   * (0, 0).
   */
  constructor() {
    super(
      createVector(random(width), 700),
      createVector(50, 90),
      images.Plant,
      0,
      0,
      createVector(0, 0)
    );
  }

  update(): void {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
    // can be some kind of animation if the plant eats the player
  }
}
