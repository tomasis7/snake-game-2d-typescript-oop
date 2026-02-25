import { Entity } from "./entity";

export class Heart extends Entity {
  private pulseScale: number;
  private pulseSpeed: number;

  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(32, 32),
      0,
      0,
      createVector(0, 0),
      images.heart
    );
    this.pulseScale = 1;
    this.pulseSpeed = 0.01;
  }

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

  update(): void {
    super.update();
    const newPulseScale = 1 + 0.1 * Math.sin(millis() * this.pulseSpeed);
    this.pulseScale = newPulseScale;
  }
}
