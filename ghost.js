"use strict";
class Ghost extends Entity {
    constructor(x, y) {
        super(createVector(x, y), createVector(50, 50), 0.3, 0.3, createVector(0, 0), images.ghost);
    }
    draw() {
        push();
        imageMode(CENTER);
        translate(this.position.x, this.position.y);
        if (this.image) {
            image(this.image, 0, 0, this.size.x, this.size.y);
        }
        else {
            console.warn("Ghost entity has no image to draw.");
        }
        pop();
    }
    update() {
        this.position.add(this.velocity);
        if (this.position.x < 0 || this.position.x > width) {
            this.velocity.x *= -1;
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.velocity.y *= -1;
        }
    }
}
//# sourceMappingURL=ghost.js.map