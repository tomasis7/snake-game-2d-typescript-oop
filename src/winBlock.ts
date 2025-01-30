/// <reference path="entity.ts" />
/**
 * TODO: Lägg till fullständig JSDoc för klassen Star och dess metoder.
 */
class WinBlock extends Entity {
  /**
   * Skapar en ny instans av Star-klassen.
   * @param {number} x - Startposition på x-axeln
   * @param {number} y - Startposition på y-axeln
   */
  constructor(x: number, y: number) {
    super(
      createVector(x, y), // x, y från levelFactory
      createVector(32, 32),
      0,
      0,
      createVector(0, 0),
      images.winBlock
    );
  }

  /**
   * Ritar tetris på skärmen.
   */
  draw(): void {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);

    noStroke();
    fill("ffce12");
    rectMode(CENTER);
    rect(0, 0, this.size.x, this.size.y);

    // Draw the image on top
    if (this.image) {
      image(this.image, 0, 0, this.size.x, this.size.y);
    } else {
      console.warn("Wallblock entity has no image to draw.");
    }

    pop();
  }
}
