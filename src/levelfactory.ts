// Level Factory
class LevelFactory {
  private gridSize: number = 32;
  private scrollSpeed: number = 2;
  private cameraOffset: number = 0;

  draw(): void {
    // Draw level creation elements
    push();
    stroke(150, 150, 150);
    strokeWeight(2);

    this.cameraOffset += this.scrollSpeed;
    //translate(-this.cameraOffset, 0);

    for (let x = -this.cameraOffset; x < width * 2; x += this.gridSize) {
      line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += this.gridSize) {
      line(0, y, width * 2, y);
    }
    pop();
  }
}
