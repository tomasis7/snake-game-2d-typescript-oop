/**
 * Representerar en Spök-entitet med slumpmässig rörelse och kollisionseffekter.
 */
class Ghost extends Entity {
  /**
   * Skapar en ny instans av Ghost med en given position.
   * @param {number} x - Startposition på x-axeln
   * @param {number} y - Startposition på y-axeln
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
   * Ritar spöket på skärmen.
   */
  draw(): void {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);

    if (this.image) {
      image(this.image, 0, 0, this.size.x, this.size.y);
    } else {
      console.warn("Ghost entity has no image to draw.");
    }

    pop();
  }

  /**
   * Uppdaterar spökets riktning och kontrollerar om det är utanför skärmen.
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
