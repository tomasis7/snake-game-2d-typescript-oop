class Star extends Entity {
  constructor() {
    super(
      createVector(random(width), 50),
      createVector(50, 50),
      images.star,
      0,
      random(3, 5),
      createVector(0, 0)
    );
  }

  update(): void {
    this.position.add(this.velocity);
  }

  move(): void {
    // Move star entity
  }
}
