/**
 * Representerar en Tetris-liknande blockentitet.
 */
class TetrisBlock extends Entity {
  /**
   * Skapar en ny instans av TetrisBlock.
   * @param {number} x - Startposition på x-axeln
   * @param {number} y - Startposition på y-axeln
   */
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
   * Ritar blockets form i Tetris-stil.
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
