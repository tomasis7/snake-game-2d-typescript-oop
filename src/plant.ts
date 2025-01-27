class Plant extends Entity {
  
  constructor(x: number, y: number) {
    super(
      createVector(x, y), // x, y från LevelFactory
      createVector(32, 70), // Fast storlek
      0, // Horisontell hastighet
      0, // Vertikal hastighet
      createVector(0, 0), // Initial riktning
      images.Plant // Bild
    );
  }
}
