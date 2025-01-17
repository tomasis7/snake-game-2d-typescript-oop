class Heart extends Entity {
    private pulseScale: number;
    private pulseSpeed: number;
  
    constructor(position: p5.Vector, size: p5.Vector) {
      super(position, size, heartImage, 0, 0, p5.Vector.random2D());
      this.pulseScale = 1;
      this.pulseSpeed = 0.01;
    }
    draw(): void {
      push();
      translate(this.position.x, this.position.y);
      scale(this.pulseScale);
      image(
        heartImage,
        -this.size.x / 2,
        -this.size.y / 2,
        this.size.x,
        this.size.y
      );
      pop();
    }
    update(): void {
      // update 'pulse' animation on heart
      this.pulseScale = 1 + 0.2 * Math.sin(millis() * this.pulseSpeed);
      console.log(this.pulseScale);
    }
  }
  