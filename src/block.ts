class Block {
    position: p5.Vector;
    size: p5.Vector;
    color: string;
  
    constructor(x: number, y: number, color: string) {
      this.position = createVector(x, y);
      this.size = createVector(50, 50); // Standardstorlek
      this.color = color;
    }
  
    draw(): void {
      push();
      fill(this.color);
      noStroke();
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
      pop();
    }
  
    update(): void {
    }
  }
  