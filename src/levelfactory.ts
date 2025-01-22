// Level Factory
class LevelFactory {
  private gridSize: number = 32;
  //private scrollSpeed: number = 2;
  //public cameraOffset: number = 0;

  draw(cameraOffset: number): void {
    // Draw level creation elements
    push();
    stroke(150, 150, 150);
    strokeWeight(2);
    translate(-cameraOffset, 0);

    //draw grid
    for (let x = 0; x < width * 2; x += this.gridSize) {
      line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += this.gridSize) {
      line(0, y, width * 2, y);
    }
    pop();

    //this.cameraOffset += this.scrollSpeed;
  }
}
//   getCameraOffset(): number {
//     return this.cameraOffset;
//   }
// }
