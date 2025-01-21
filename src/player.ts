/// <reference path="entity.ts" />

class Player extends Entity {
  private trail: p5.Vector[];
  private playerNumber: number;
  private trailFillColor: string;
  private trailStrokeColor: string;
  private moveTimer: number;

  constructor(
    position: p5.Vector,
    image: p5.Image,
    playerNumber: number,
    trailFillColor: string,
    trailStrokeColor: string
  ) {
    const size = createVector(50, 50);
    super(position, size, image, 0, 0, createVector(0, 500));
    this.trail = [
      createVector(this.position.x - size.x, this.position.y),
      createVector(this.position.x - size.x * 2, this.position.y),
      createVector(this.position.x - size.x * 3, this.position.y),
    ];
    this.image = image;
    this.playerNumber = playerNumber;
    this.trailFillColor = trailFillColor;
    this.trailStrokeColor = trailStrokeColor;
    this.moveTimer = 0;
  }

  move(): void {
    // Change direction based on valid key presses
    if (keyIsPressed) {
      // Player 1 controls: Arrow keys
      if (this.playerNumber === 1) {
        if (keyCode === LEFT_ARROW && this.direction.x !== 1) {
          this.direction = new p5.Vector(-1, 0);
        }
        if (keyCode === RIGHT_ARROW && this.direction.x !== -1) {
          this.direction = new p5.Vector(1, 0);
        }
        if (keyCode === UP_ARROW && this.direction.y !== 1) {
          this.direction = new p5.Vector(0, -1);
        }
        if (keyCode === DOWN_ARROW && this.direction.y !== -1) {
          this.direction = new p5.Vector(0, 1);
        }
      }
      // Player 2 controls: WASD keys
      if (this.playerNumber === 2) {
        if (keyCode === 65 && this.direction.x !== 1) {
          // 'A'
          this.direction = new p5.Vector(-1, 0);
        }
        if (keyCode === 68 && this.direction.x !== -1) {
          // 'D'
          this.direction = new p5.Vector(1, 0);
        }
        if (keyCode === 87 && this.direction.y !== 1) {
          // 'W'
          this.direction = new p5.Vector(0, -1);
        }
        if (keyCode === 83 && this.direction.y !== -1) {
          // 'S'
          this.direction = new p5.Vector(0, 1);
        }
      }
    }

    // Keeps moving in current direction without having to keep holding the key down.
    // copy() creates a new vector so original direction vector is not modified
    // mult() applies current speed to the movement
    this.position.add(this.direction.copy().mult(this.velocity));
  }

  // Update players state and position
  update(): void {
    this.moveTimer += deltaTime;
    if (this.moveTimer >= this.direction.y) {
      this.moveTimer = 0;
      this.trail.pop();
      const head = this.trail[0];
      this.trail.unshift(createVector(head.x, head.y + 50));
    }
    return;

    this.move();
    // Store current position in trail array
    this.trail.unshift(createVector(this.position.x, this.position.y));

    // Check if trail is too long, max 10.
    if (this.trail.length > this.trailLength) {
      this.trail.pop(); // Remove the last element
    }

    // Update position with add
    this.position.add(this.direction);
  }

  draw(): void {
    push();
    stroke(this.trailStrokeColor);
    strokeWeight(2);
    fill(this.trailFillColor);

    let diameter = Math.max(this.size.x, this.size.y);

    for (let position of this.trail) {
      ellipse(position.x, position.y, diameter, diameter);
    }

    // for (let position of this.trail) {
    //   ellipse(position.x + this.size.x / 2, position.y + this.size.y / 2, this.size.x, this.size.y)
    //   // let radius = Math.min(this.size.x, this.size.y) / 2;  // Calculate radius
    //   // rect(position.x, position.y, this.size.x, radius);    // Rounded corners making it a circle
    // }

    pop();

    imageMode("center");
    super.draw(); // For the head image
  }
}
