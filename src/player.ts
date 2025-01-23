/// <reference path="entity.ts" />

interface KeyBindings {
  UP: number;
  DOWN: number;
  RIGHT: number;
  LEFT: number;
}

interface GridPosition {
  row: number;
  col: number;
}

class Player extends Entity {
  
  // private gridSize: number = 32;
  // private gridPosition: GridPosition;
  protected trail: p5.Vector[];
  private playerNumber: number;
  private trailFillColor: string;
  private trailStrokeColor: string;
  private moveTimer: number;
  private nextDirection: p5.Vector;
  private keyBindings: KeyBindings;

  public isMoving: boolean;
  isColliding: boolean = false;

  getPlayerNumber(): number {
    return this.playerNumber;
  }

  constructor(
    position: p5.Vector,
    playerNumber: number,
    trailFillColor: string,
    trailStrokeColor: string,
    keyBindings: KeyBindings
  ) {
    const gridSize = 32;
    const size = createVector(gridSize, gridSize);

    //set position player nr
    const startPosition =
      playerNumber === 1
        ? createVector(
            Math.floor((width * 0.1) / gridSize) * gridSize,
            Math.floor((height * 0.3) / gridSize) * gridSize
          )
        : createVector(
            Math.floor((width * 0.1) / gridSize) * gridSize,
            Math.floor((height * 0.7) / gridSize) * gridSize
          );

    super(startPosition, size, images.head1, 0, 0, createVector(0, 500));

    //calc grid position
    this.gridPosition = {
      row: Math.floor(startPosition.y / this.gridSize),
      col: Math.floor(startPosition.x / this.gridSize),
    };

    this.trail = [
      // createVector(this.position.x - size.x, this.position.y),
      // createVector(this.position.x - size.x * 2, this.position.y),
      // createVector(this.position.x - size.x * 3, this.position.y),
      // createVector(this.position.x - size.x * 4, this.position.y),
      // createVector(this.position.x - size.x * 5, this.position.y),
      // createVector(this.position.x - size.x * 6, this.position.y),
      // createVector(this.position.x - size.x * 7, this.position.y),
      // createVector(this.position.x - size.x * 8, this.position.y),
    ];
    for (let i = 1; i <= 8; i++) {
      this.trail.push(
        createVector(startPosition.x - size.x * i, startPosition.y)
      );
    }
    this.playerNumber = playerNumber;
    this.trailFillColor = trailFillColor;
    this.trailStrokeColor = trailStrokeColor;
    this.moveTimer = 0;
    this.direction = createVector(20, 0);
    this.nextDirection = this.direction.copy();
    this.keyBindings = keyBindings;

    this.isMoving = true;
  }

  private handleInput(): void {
    if (
      !this.isMoving &&
      (keyIsDown(this.keyBindings.UP) ||
        keyIsDown(this.keyBindings.DOWN) ||
        keyIsDown(this.keyBindings.LEFT) ||
        keyIsDown(this.keyBindings.RIGHT))
    ) {
      this.isMoving = true;
      this.isColliding = false;
    }

    // Listen for key presses and set next direction
    if (keyIsDown(this.keyBindings.UP) && this.direction.y === 0) {
      this.nextDirection = createVector(0, -this.gridSize); // Up
    } else if (keyIsDown(this.keyBindings.DOWN) && this.direction.y === 0) {
      this.nextDirection = createVector(0, this.gridSize); // Down
    } else if (keyIsDown(this.keyBindings.LEFT) && this.direction.x === 0) {
      this.nextDirection = createVector(-this.gridSize, 0); // Left
    } else if (keyIsDown(this.keyBindings.RIGHT) && this.direction.x === 0) {
      this.nextDirection = createVector(this.gridSize, 0); // Right
    }
  }

  update(): void {
    if (!this.isMoving) {
      this.handleInput();
      return; // Skip updating the position if the player is not moving
    }

    this.moveTimer += deltaTime;
    if (this.moveTimer >= 200) {
      this.moveTimer = 0;

      this.direction = this.nextDirection.copy();
      const head = this.trail[0];
      const newHead = createVector(
        head.x + this.direction.x,
        head.y + this.direction.y
      );
      this.trail.unshift(newHead);
      this.trail.pop();
    }

    this.handleInput();
  }

  draw(): void {
    push();
    strokeWeight(2);

    // Convert grid position to pixel coordinates

    for (let i = 0; i < this.trail.length; i++) {
      const position = this.trail[i];
      {
        stroke(this.trailStrokeColor);
        fill(this.trailFillColor);
        ellipse(
          position.x + this.gridSize / 2,
          position.y + this.gridSize / 2,
          this.gridSize,
          this.gridSize
        );
      }

      //let diameter = Math.max(this.size.x, this.size.y);
      //ellipse(position.x, position.y, diameter, diameter);
      //ellipse(position.x, position.y, this.gridSize, this.gridSize);
    }
    pop();

    imageMode("center");
    // super.draw(); // For the head image
  }
}
