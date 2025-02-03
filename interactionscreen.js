"use strict";
class InteractionScreen extends GameScreen {
    constructor() {
        super();
        this.returnToStartMenu = new Button("← Back", createVector(150, 75), "#515151", createVector(200, 50), "#FFFFFF");
    }
    update() {
        if (this.returnToStartMenu.isClicked()) {
            game.changeScreen(new Game());
        }
    }
    draw() {
        background("black");
        push();
        fill("#45FF8C");
        imageMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(32);
        textFont(customFont);
        text("HOW TO PLAY", width / 2, height / 2 - 300);
        fill("#FFFFFF");
        textSize(28);
        text("What to eat and what to avoid", width / 2, height / 2 - 250);
        fill("#515151");
        rectMode(CENTER);
        rect(width / 2, height / 2 - 100, 1200, 250);
        textSize(24);
        textAlign(LEFT, CENTER);
        stroke("#000000");
        strokeWeight(2);
        fill("#45FF8C");
        text("Power-ups", width / 2 - 300, height / 2 - 200);
        fill("#FFFFFF");
        image(images.heart, width / 2 - 330, height / 2 - 160, 25, 25);
        text("= +1 Life", width / 2 - 300, height / 2 - 160);
        image(images.star, width / 2 - 330, height / 2 - 110, 25, 25);
        text("= x2 Points", width / 2 - 300, height / 2 - 110);
        textSize(24);
        textAlign(LEFT, CENTER);
        stroke("#000000");
        strokeWeight(2);
        fill("#45FF8C");
        text("Obstacles", width / 2 + 100, height / 2 - 200);
        fill("#FFFFFF");
        image(images.Plant, width / 2 + 70, height / 2 - 160, 21, 40);
        text("= -2 Life", width / 2 + 100, height / 2 - 160);
        image(images.ghost, width / 2 + 70, height / 2 - 110, 35, 35);
        text("= -1 Life, -5 Points", width / 2 + 100, height / 2 - 110);
        image(images.tetrisBlock, width / 2 + 70, height / 2 - 60, 25, 25);
        text("= Game Over", width / 2 + 100, height / 2 - 60);
        image(images.wallBlock, width / 2 + 70, height / 2 - 10, 25, 25);
        text("= Game Over", width / 2 + 100, height / 2 - 10);
        pop();
        push();
        textAlign(CENTER, CENTER);
        noStroke();
        fill("#FFFFFF");
        textSize(28);
        text("Use the following keys on you keyboard\nto navigate your snake in the game", width / 2, height / 2 + 80);
        fill("#00FFFF");
        text("Player 1", width / 2 - 200, height / 2 + 160);
        fill("#FF00FF");
        text("Player 2", width / 2 + 200, height / 2 + 160);
        fill("#FFFFFF");
        textSize(28);
        text("↑", width / 2 - 200, height / 2 + 220);
        text("← ↓ →", width / 2 - 200, height / 2 + 280);
        noFill();
        strokeWeight(2);
        stroke(255);
        rectMode(CENTER);
        square(width / 2 - 200, height / 2 + 220, 50);
        square(width / 2 - 200, height / 2 + 280, 50);
        square(width / 2 - 140, height / 2 + 280, 50);
        square(width / 2 - 260, height / 2 + 280, 50);
        fill("#FFFFFF");
        textSize(28);
        text("W", width / 2 + 200, height / 2 + 220);
        text("A S D", width / 2 + 200, height / 2 + 280);
        noFill();
        strokeWeight(2);
        stroke(255);
        rectMode(CENTER);
        square(width / 2 + 200, height / 2 + 220, 50);
        square(width / 2 + 200, height / 2 + 280, 50);
        square(width / 2 + 140, height / 2 + 280, 50);
        square(width / 2 + 260, height / 2 + 280, 50);
        noStroke();
        this.returnToStartMenu.draw();
        pop();
    }
}
//# sourceMappingURL=interactionscreen.js.map