class TetrisBlock extends Entity {
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

  private drawSquareAt(
    row: number,
    col: number,
    color: string,
    cameraOffset: number
  ): void {
    push();
    fill(color);
    stroke("white");
    strokeWeight(width * 0.001);
    const x = col * this.gridSize - cameraOffset;
    const y = row * this.gridSize;
    rectMode(CORNER);
    rect(x, y, this.gridSize, this.gridSize);
    pop();
  }
  /**
   * Draws the Tetris block entity.
   *
   * This method is called by the game's draw loop. It will translate the
   * canvas to the Tetris block's position, and then draw the Tetris block's
   * image at the Tetris block's size.
   *
   * If the Tetris block's image is not loaded, it will log an error and do
   * nothing.
   */

