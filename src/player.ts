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
      // Change direction based on valid key presses
      if(keyIsPressed) {
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
          if (keyCode === 65 && this.direction.x !== 1) {   // 'A'
            this.direction = new p5.Vector(-1, 0);
          }
          if (keyCode === 68 && this.direction.x !== -1) {  // 'D'
            this.direction = new p5.Vector(1, 0);
          }
          if (keyCode === 87 && this.direction.y !== 1) {   // 'W'
            this.direction = new p5.Vector(0, -1);
          }
          if (keyCode === 83 && this.direction.y !== -1) {  // 'S'
            this.direction = new p5.Vector(0, 1);
          }
        }
      }
  
      // Keeps moving in current direction without having to keep holding the key down.
      // copy() creates a new vector so original direction vector is not modified
      // mult() applies current speed to the movement
      this.position.add(this.direction.copy().mult(this.speed));
    }
  
    // Update players state and position
    update(): void {
      // Store current position in trail array
      this.trail.push(new p5.Vector(this.position.x, this.position.y));
      
      // Update position with add
      this.position.add(this.direction);
    }
  }