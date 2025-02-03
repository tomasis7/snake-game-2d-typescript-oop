"use strict";
class Button {
    constructor(text, position, backgroundColor, size, color) {
        this.text = text;
        this.position = position;
        this.backgroundColor = backgroundColor;
        this.size = size;
        this.color = color;
    }
    draw() {
        push();
        fill(this.backgroundColor);
        rectMode(CENTER);
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
        fill(this.color);
        textAlign(CENTER, CENTER);
        text(this.text, this.position.x, this.position.y);
        pop();
    }
    isClicked() {
        return (mouseIsPressed &&
            mouseX > this.position.x - this.size.x / 2 &&
            mouseX < this.position.x + this.size.x / 2 &&
            mouseY > this.position.y - this.size.y / 2 &&
            mouseY < this.position.y + this.size.y / 2);
    }
}
//# sourceMappingURL=button.js.map