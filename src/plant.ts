/**
 * TODO: Lägg till JSDoc för klassen Plant och dess metoder.
 */
class Plant extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y), // x, y från LevelFactory
      createVector(32, 64), // Fast storlek
      0, // Horisontell hastighet
      0, // Vertikal hastighet
      createVector(0, 0), // Initial riktning
      images.Plant // Bild
    );
  }

  draw(): void {
    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);

    if (this.image) {
      image(this.image, 0, 0, this.size.x, this.size.y);
    } else {
      console.warn("Plant entity has no image to draw.");
    }

    pop();
  }
}
