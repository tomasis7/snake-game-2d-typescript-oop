import { Entity } from "./entity";

export class WinBlock extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(32, 32),
      0,
      0,
      createVector(0, 0),
      images.WinBlock
    );
  }

  draw(): void {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);

    noStroke();
    fill("ffce12");
    rectMode(CENTER);
    rect(0, 0, this.size.x, this.size.y);

    if (this.image) {
      image(this.image, 0, 0, this.size.x, this.size.y);
    } else {
      console.warn("Wallblock entity has no image to draw.");
    }

    pop();
  }
}
