/**
 * TODO: Lägg till fullständig JSDoc för klassen Star och dess metoder.
 */
class Star extends Entity {
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
      images.star
    );
  }

  /**
   * Ritar stjärnan på skärmen.
   */
  draw(): void {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);

    if (this.image) {
      image(this.image, 0, 0, this.size.x, this.size.y);
    } else {
      console.warn("Heart entity has no image to draw.");
    }

    pop();
  }
}
