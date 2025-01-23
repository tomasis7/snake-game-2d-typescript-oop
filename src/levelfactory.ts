// Level Factory
class LevelFactory {
  private gridSize: number = 32;
  private level1: number[][];
  // private level2: number[][];

  constructor() {
    // 0 = inget
    // 1 = block
    // 2 = stjärna
    this.level1 = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 16 * 32
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      // 10 * 32
    ];
  }

  public createEntitiesForLevel(level: number): Entity[] {
    const entities: Entity[] = [];

    // loopa över level och skapa alla entiteter

    return entities;
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
