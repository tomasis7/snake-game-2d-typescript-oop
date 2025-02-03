"use strict";
class Star extends Entity {
    constructor(x, y) {
        super(createVector(x, y), createVector(32, 32), 0, 0, createVector(0, 0), images.star);
    }
    draw() {
        push();
        imageMode(CENTER);
        translate(this.position.x, this.position.y);
        if (this.image) {
            image(this.image, 0, 0, this.size.x, this.size.y);
        }
        else {
            console.warn("Star entity has no image to draw.");
        }
        pop();
    }
}
//# sourceMappingURL=star.js.map