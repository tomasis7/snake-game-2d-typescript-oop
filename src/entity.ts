abstract class Entity implements IMovable {
    position: p5.Vector;
    size: p5.Vector;
    image: p5.Image;
    velocity: p5.Vector;
    direction: p5.Vector;
  
    constructor(
      position: p5.Vector,
      size: p5.Vector,
      image: p5.Image,
      velocityX: number,
      velocityY: number,
      direction: p5.Vector
    ) {
      this.position = position;
      this.size = size;
      this.image = image;
      this.velocity = createVector(velocityX, velocityY);
      this.direction = direction;
    }
  
    draw(): void {
      image(
        this.image,
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y
      );
    }
    move(): void {
      if (typeof this.velocity === "number") {
        this.position.add(this.direction.mult(this.velocity));
      } else {
        console.error("speed must be a number");
      }
    }
    abstract update(): void;
  }