// Level Factory
class LevelFactory {
  private gridSize: number = 32;

  draw(): void {
    // Draw level creation elements
    push();
    stroke(150, 150, 150);
    strokeWeight(2);
    for (let x = 0; x < width * 2; x += this.gridSize) {
      line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += this.gridSize) {
      line(0, y, width * 2, y);
    }
    pop();
  }
}
