/// <reference path="entity.ts" />

interface KeyBindings {
  UP: number;
  DOWN: number;
  RIGHT: number;
  LEFT: number;
}

class Player extends Entity {
  public trail: p5.Vector[];
  public playerNumber: number;
  private trailFillColor: string;
  private trailStrokeColor: string;
  private moveTimer: number;
  private nextDirection: p5.Vector;
  private keyBindings: KeyBindings;

  public isMoving: boolean;
  public isColliding: boolean = false;

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
    const size = createVector(20, 20);
    super(position, size, images.head1, 0, 0, createVector(0, 500));
    this.trail = [
      createVector(this.position.x - size.x, this.position.y),
      createVector(this.position.x - size.x * 2, this.position.y),
      createVector(this.position.x - size.x * 3, this.position.y),
      createVector(this.position.x - size.x * 4, this.position.y),
      createVector(this.position.x - size.x * 5, this.position.y),
      createVector(this.position.x - size.x * 6, this.position.y),
      createVector(this.position.x - size.x * 7, this.position.y),
      createVector(this.position.x - size.x * 8, this.position.y),
    ];
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
    // Lyssnar på tangenttryckningar och sätter nästa riktning

    if (keyIsDown(this.keyBindings.UP) && this.direction.y === 0) {
      this.nextDirection = createVector(0, -20); // Upp
    } else if (keyIsDown(this.keyBindings.DOWN) && this.direction.y === 0) {
      this.nextDirection = createVector(0, 20); // Ner
    } else if (keyIsDown(this.keyBindings.LEFT) && this.direction.x === 0) {
      this.nextDirection = createVector(-20, 0); // Vänster
    } else if (keyIsDown(this.keyBindings.RIGHT) && this.direction.x === 0) {
      this.nextDirection = createVector(20, 0); // Höger
    }
  }

  // Update players state and position
  update(): void {
    if (!this.isMoving) {
      return;
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

    for (let i = 0; i < this.trail.length; i++) {
      const position = this.trail[i];

      if (i === 0) {
        stroke("blue");
        fill("orange");
      } else {
        stroke(this.trailStrokeColor);
        fill(this.trailFillColor);
      }

      let diameter = Math.max(this.size.x, this.size.y);
      ellipse(position.x, position.y, diameter, diameter);
    }

    // for (let position of this.trail) {
    //   ellipse(position.x + this.size.x / 2, position.y + this.size.y / 2, this.size.x, this.size.y)
    //   // let radius = Math.min(this.size.x, this.size.y) / 2;  // Calculate radius
    //   // rect(position.x, position.y, this.size.x, radius);    // Rounded corners making it a circle
    // }

    pop();

    imageMode("center");
    // super.draw(); // For the head image
  }
}
