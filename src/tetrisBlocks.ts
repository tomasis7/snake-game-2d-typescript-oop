class TetrisBlock extends Entity {
  // private fallDelay: number;
  // private fallCounter: number;
  /**
   * Creates a new instance of the TetrisBlock class.
   *
   * The TetrisBlock is given a random initial position, a fixed size, and the
   * image of a Tetris block. The initial velocity is set to (0, 0), and the
   * initial direction is set to (0, 0).
   */
  constructor() {
    super(
      createVector(600, 450),
      createVector(100, 120),
      images.tetrisCube,
      0,
      1,
      createVector(0, 0)
    );
  }

  update(): void {
    // this.fallCounter++;

    // if (this.fallCounter >= this.fallDelay) {
    //   this.fallCounter = 0;

    this.position.y += this.size.y;

    if (this.position.y + this.size.y >= height) {
      this.position.y = this.size.y;
    }
  }
}
