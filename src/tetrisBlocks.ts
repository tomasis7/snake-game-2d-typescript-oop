class TetrisBlock {
  position: p5.Vector;
  size: p5.Vector;
  fillColor: string;
  strokeColor: string;

  constructor(x: number, y: number, fillColor: string, strokeColor: string) {
    this.position = createVector(x, y);
    this.size = createVector(32, 32);
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
  }

  draw(): void {
    push();
    fill(this.fillColor);
    stroke(this.strokeColor);
    strokeWeight(2);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }

  update(): void {
    // Eventuell logik för uppdatering
  }
}






/* Tidigare kod nedan, ej raderat om någon skulle använda den till något */

// class TetrisBlock extends Entity {
//   // private fallDelay: number;
//   // private fallCounter: number;
//   /**
//    * Creates a new instance of the TetrisBlock class.
//    *
//    * The TetrisBlock is given a random initial position, a fixed size, and the
//    * image of a Tetris block. The initial velocity is set to (0, 0), and the
//    * initial direction is set to (0, 0).
//    */
//   constructor() {
//     super(
//       createVector(600, 450),
//       createVector(100, 120),
//       images.tetrisCube,
//       0,
//       1,
//       createVector(0, 0)
//     );
//   }

//   // draw(): void {
//   //   push(); // Save the current drawing state
//   //   if (!this.image) {
//   //     console.error("TetrisBlock image not loaded");
//   //     return;
//   //   }

//   //   translate(this.position.x, this.position.y);
//   //   image(
//   //     this.image,
//   //     -this.size.x / 2,
//   //     -this.size.y / 2,
//   //     this.size.x,
//   //     this.size.y
//   //   );
//   //   pop(); // Restore the previous drawing state
//   // }

//   update(): void {
//     // this.fallCounter++;

//     // if (this.fallCounter >= this.fallDelay) {
//     //   this.fallCounter = 0;

//     return;
//   }
// }
