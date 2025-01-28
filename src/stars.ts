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
      createVector(32, 32), // Fast storlek
      0, // Horisontell hastighet (0)
      0, // Vertikal hastighet
      createVector(0, 0), // Initial riktning
      images.star // Bild
    );
  }

  /**
   * Ritar stjärnan på skärmen.
   */
  draw(): void {
    if (!this.image) {
      console.error("Ghost image not loaded");
      return;
    }

    push();
    rectMode(CENTER);
    translate(this.position.x, this.position.y);
    image(this.image, this.size.x, this.size.y, this.size.x, this.size.y);
    pop();
  }
}
