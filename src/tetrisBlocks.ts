class TetrisBlock extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y),
      createVector(32,32),
      0,
      0,
      createVector(0,0),
      undefined
    );
  }

  draw(): void {
    push();
    fill("#FDD03C");
    stroke("#D6B034");
    strokeWeight(2);
    rect(this.position.x, this.position.y, 32, 32);
    pop();
  }

  update(): void {
    // Eventuell logik för uppdatering
    return;
  }
}