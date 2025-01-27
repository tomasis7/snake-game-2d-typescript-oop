class Block {
    position: p5.Vector;
    size: p5.Vector;
    fillColor: string;
    strokeColor: string;
  
    constructor(x: number, y: number, fillColor: string, strokeColor: string) {
      this.position = createVector(x, y);
      this.size = createVector(32, 32);
      this.fillColor = fillColor;
      this.strokeColor = strokeColor;
    }
  
    draw(): void {
      push();
      fill(this.fillColor);
      stroke(this.strokeColor);
      strokeWeight(2);
      rect(this.position.x, this.position.y, this.size.x, this.size.y);
      pop();
    }
  
    update(): void {
    }
  }
  