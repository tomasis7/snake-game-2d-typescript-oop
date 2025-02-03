"use strict";
class Entity {
    constructor(position, size, velocityX, velocityY, direction, image) {
        this.isRemoved = false;
        this.isSoundPlaying = false;
        this.position = createVector(position.x, position.y);
        this.size = createVector(size.x, size.y);
        this.velocity = createVector(velocityX, velocityY);
        this.direction = createVector(direction.x, direction.y);
        this.image = image;
    }
    draw() {
        if (this.isRemoved)
            return;
        push();
        if (this.image) {
            image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        }
        pop();
    }
    update() {
        if (this.isRemoved)
            return;
    }
}
//# sourceMappingURL=entity.js.map