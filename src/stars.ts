class Star extends Entity {
  constructor() {
    // super(random(width), -50, 50, 50, 0, random(3, 5), images.star);
    super(
      new p5.Vector(random(width), -50),
      new p5.Vector(50, 50),
      images.star,
      0,
      random(3, 5),
      new p5.Vector(0, 0)
    );
  }

  update(): void {
    this.position.add(this.velocity);
  }

  move(): void {
    // Move star entity
  }
}
