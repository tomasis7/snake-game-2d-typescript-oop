/**
 * Representerar en Hjärt-entitet som pulserar för en visuell effekt.
 */
class Heart extends Entity {
  private pulseScale: number;
  private pulseSpeed: number;

  /**
   * Skapar en ny Heart-entitet på en given position.
   * @param {number} x - Startposition på x-axeln
   * @param {number} y - Startposition på y-axeln
   */
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(32, 32),
      0,
      0,
      createVector(0, 0),
      images.heart
    );
    // 'pulse' animation
    this.pulseScale = 1;
    this.pulseSpeed = 0.01;
  }
  /**
   * Ritar hjärtat och tillämpar puls-animationen.
   */
  draw(): void {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    scale(this.pulseScale);

    if (this.image) {
      image(this.image, 0, 0, this.size.x, this.size.y);
    } else {
      console.warn("Heart entity has no image to draw.");
    }

    pop();
  }

  /**
   * Uppdaterar hjärtats puls-animation.
   */
  update(): void {
    super.update();
    // update 'pulse' animation on heart
    const newPulseScale = 1 + 0.1 * Math.sin(millis() * this.pulseSpeed);
    this.pulseScale = newPulseScale;
  }
}
