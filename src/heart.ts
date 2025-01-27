class Heart extends Entity {
  private pulseScale: number;
  private pulseSpeed: number;

  /**
   * Create a new Heart entity.
   *
   * The heart is given a specific initial position, size, image, and initial
   * velocity. The 'pulse' animation is initialized as well.
   */
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(32, 32),
      images.heart,
      0,
      0,
      createVector(0, 0)
    );
    // 'pulse' animation
    this.pulseScale = 1;
    this.pulseSpeed = 0.01;
  }
  /**
   * Draw the heart entity.
   *
   * This will draw the heart at its current position, with its current scale
   * (which is updated every frame to give the 'pulse' effect).
   */
  draw(): void {
    this.update();
    push();

    translate(this.position.x, this.position.y);
    scale(this.pulseScale);
    image(
      this.image,
      +this.size.x / 2,
      +this.size.y / 2,
      this.size.x,
      this.size.y
    );

    pop();
  }
  /**
   * Update the heart's 'pulse' animation.
   *
   * This method updates the heart's scale to create a pulsating effect
   * by adjusting the pulseScale based on the current time and pulseSpeed.
   * The pulseScale is logged to the console for debugging purposes.
   */
  update(): void {
    // update 'pulse' animation on heart
    const newPulseScale = 1 + 0.1 * Math.sin(millis() * this.pulseSpeed);
    this.pulseScale = newPulseScale;
    //console.log(this.pulseScale);
  }
}
