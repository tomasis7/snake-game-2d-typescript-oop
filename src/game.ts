interface GridPosition {
  row: number;
  col: number;
}

class Game {
  private player1: GridPosition = { row: 0, col: 0 };
  private player2: GridPosition = { row: 0, col: 0 };
  private isGameOver: boolean = false;
  private gridSize: number = 32;
  private position: p5.Vector;
  private position2: p5.Vector;
  private cameraOffset: number = 0;
  private scrollSpeed: number = 2;
  private obstacleImage: p5.Image;

  constructor() {
    this.position = createVector(width * 0.5, height * 0.3);
    this.position2 = createVector(width * 0.5, height * 0.7);

    this.player1.row = Math.floor(this.position.y / this.gridSize);
    this.player1.col = Math.floor(this.position.x / this.gridSize);
    this.player2.row = Math.floor(this.position2.y / this.gridSize);
    this.player2.col = Math.floor(this.position2.x / this.gridSize);

    this.obstacleImage = loadImage("assets/images/obstacle.png");
  }

  public draw() {
    if (this.isGameOver) {
      this.showGameOver();
      return;
    }

    this.cameraOffset += this.scrollSpeed;

    background("grey");

    push();
    translate(-this.cameraOffset, 0);

    this.drawGrid();
    this.handleInput();
    this.handleInput2();
    this.drawSquare();
    this.drawSquare2();
    this.checkGridCollision();
    this.drawSquareAt2(25, 50, "red");
    this.drawSquareAt2(25, 51, "yellow");
    this.drawSquareAt2(25, 52, "green");
    this.drawSquareAt(15, 50);
    this.drawSquareAt(15, 51);
    this.drawSquareAt(15, 52);

    pop();
  }
  private checkGridCollision() {
    // Define obstacles with positions and colors
    const obstacles = [
      { row: 25, col: 50, color: "red" },
      { row: 25, col: 51, color: "yellow" },
      { row: 25, col: 52, color: "green" },
      { row: 15, col: 50, color: "bomb" },
      { row: 15, col: 51, color: "bomb" },
      { row: 15, col: 52, color: "bomb" },
    ];

    // Draw obstacles
    obstacles.forEach((obstacle) => {
      this.drawSquareAt(obstacle.row, obstacle.col);
      this.drawSquareAt2(obstacle.row, obstacle.col, obstacle.color);
    });

    // Direct position comparison
    obstacles.forEach((obstacle) => {
      if (
        (this.player1.row === obstacle.row &&
          this.player1.col === obstacle.col) ||
        (this.player2.row === obstacle.row && this.player2.col === obstacle.col)
      ) {
        alert(`Square hit a ${obstacle.color} obstacle!`);
        this.isGameOver = true;
      }
    });
  }

  private showGameOver() {
    background("black");
    push();
    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    pop();
  }

  private handleInput() {
    if (keyIsDown(87)) {
      this.player1.row--;
    }
    if (keyIsDown(83)) {
      this.player1.row++;
    }
    if (keyIsDown(65)) {
      this.player1.col--;
    }
    if (keyIsDown(68)) {
      this.player1.col++;
    }
  }

  private handleInput2() {
    if (keyIsDown(UP_ARROW)) {
      this.player2.row--;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.player2.row++;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.player2.col--;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.player2.col++;
    }
  }

  public drawSquare() {
    push();
    fill(255, 0, 0, 200);
    stroke("white");
    strokeWeight(width * 0.001);
    const x = this.player1.col * this.gridSize;
    const y = this.player1.row * this.gridSize;
    rectMode(CORNER);
    rect(x, y, this.gridSize, this.gridSize);
    pop();
  }
  public drawSquare2() {
    push();
    fill(0, 0, 255, 200);
    stroke("white");
    strokeWeight(width * 0.001);
    const x = this.player2.col * this.gridSize;
    const y = this.player2.row * this.gridSize;
    rectMode(CORNER);
    rect(x, y, this.gridSize, this.gridSize);
    pop();
  }

  private drawSquareAt2(row: number, col: number, color: string) {
    push();
    fill(color);
    stroke("white");
    strokeWeight(width * 0.001);
    const x = col * this.gridSize;
    const y = row * this.gridSize;
    rectMode(CORNER);
    rect(x, y, this.gridSize, this.gridSize);
    pop();
  }

  private drawSquareAt(row: number, col: number) {
    push();
    image(
      this.obstacleImage,
      col * this.gridSize,
      row * this.gridSize,
      this.gridSize,
      this.gridSize,
    );
    pop();
  }

  //debug grid
  private drawGrid() {
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
