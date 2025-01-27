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

  draw(): void {
    push();
    fill("#FDD03C");
    stroke("#D6B034");
    strokeWeight(2);
    rect(
      this.position.x - this.size.x / 2,
      this.position.y - this.size.y / 2,
      this.size.x,
      this.size.y
    ); // Center the block
    pop();
  }

  // update(): void {
  //   // Eventuell logik för uppdatering
  //   return;
  // }
}
