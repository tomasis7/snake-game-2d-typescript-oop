/// <reference path="entity.ts" />
class Block extends Entity {
  constructor(x: number, y: number) {
    super(
      createVector(x, y), // x, y from levelFactory
      createVector(32, 32), // Fixed size
      0, // Horizontal speed (0)
      0, // Vertical speed
      createVector(0, 0), // Initial direction
      undefined // Image
    );
  }

  draw(): void {
    push();
    rectMode(CENTER);
    fill("#8E8E8E");
    stroke("#515151");
    strokeWeight(2);
<<<<<<< HEAD

=======
>>>>>>> ac1726b88c2976cfcc98b519836667d55c54de15
    rect(this.position.x, this.position.y, this.size.x, this.size.y); // Center the block
    pop();
  }

  update(): void {}
}

// update(): void {
//   // Eventuell logik för uppdatering
//   return;
// }
