class Player extends Entity {
  private direction: p5.Vector;
  private trail: p5.Vector[];
  private playerNumber: number;

  constructor(
    position: p5.Vector,
    size: p5.Vector,
    speed: number,
    image: p5.Image,
    playerNumber: number
  ) {
    super(position, size, speed, image);
    this.direction = new p5.Vector(1, 0); // Start moving right by default
    this.trail = [];
    this.playerNumber = playerNumber;
  }

  move(): void {
    // Keep moving in current direction if no key is pressed
    if(!keyIsPressed) {
      this.position.add(this.direction.copy().mult(this.speed));
      return;
    }
  }

  // Update players state and position
  update(): void {
    // Store current position in trail array
    this.trail.push(new p5.Vector(this.position.x, this.position.y));
    
    // Update position with add
    this.position.add(this.direction);
  }
}