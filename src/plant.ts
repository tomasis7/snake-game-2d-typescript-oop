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
    if (!this.image) {
      console.error("Ghost image not loaded");
      return;
    }

    push();
    imageMode(CENTER);
    translate(this.position.x, this.position.y);
    image(this.image, this.size.x, this.size.y, this.size.x, this.size.y);
    pop();
  }
}
