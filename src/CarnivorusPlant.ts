class CarnivorusPlant extends Entity {
    constructor(position: p5.Vector, size: p5.Vector, image: p5.Image) {
      super(position, size, image, 0, p5.Vector.random2D());
    }
  
    update(): void {
      // can be some kind of animation if the plant eats the player
    }
  }