class Player extends Entity {
  private direction: p5.Vector;
  private trail: p5.Vector[];

  constructor(position: p5.Vector, direction: p5.Vector, size: p5.Vector, speed: number) {
    super(position, size, speed);
    this.direction = direction;
    this.trail = [];  
  }

  // Update players state and posistion
  update(): void {
    // Store current position in trail array
    this.trail.push(new p5.Vector(this.position.x, this.position.y));
    
    // Update position with add
    this.position.add(this.direction);
  }
}