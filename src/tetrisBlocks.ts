import { Entity } from "./entity";

export class TetrisBlock extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(32, 32),
      0,
      0,
      createVector(0, 0),
      images.tetrisBlock
    );
  }

  draw(): void {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);

    fill("#ffce12");
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.size.x, this.size.y);

    if (this.image) {
      image(this.image, 0, 0, this.size.x, this.size.y);
    } else {
      console.warn("TetrisBlock entity has no image to draw.");
    }

    pop();
  }
}
