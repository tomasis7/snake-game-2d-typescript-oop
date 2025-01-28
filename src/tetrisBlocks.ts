/**
 * Represents a Tetris-style block entity.
 */
class TetrisBlock extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(32, 32),
      0,
      0,
      createVector(0, 0),
      undefined
    );
  }

  /**
   * Draws the Tetris block shape.
   */
  draw(): void {
    push();
    rectMode(CENTER);
    fill("#FDD03C");
    stroke("#D6B034");
    strokeWeight(2);
    rect(this.position.x, this.position.y, this.size.x, this.size.y); // Center the block
    pop();
  }

  // update(): void {
  //   // Eventuell logik för uppdatering
  //   return;
  // }
}
