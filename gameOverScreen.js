"use strict";
class GameOverScreen extends GameScreen {
    constructor(winnerMessage, scoreManager) {
        super();
        this.winnerMessage = winnerMessage;
        this.scoreManager = scoreManager;
        this.menyButton = new Button("Meny", createVector(width / 2, height / 2 + 220), "#515151", createVector(250, 50), "#45FF8C");
    }
    draw() {
        push();
        fill(0, 0, 0, 150);
        rect(0, 0, width, height);
        fill("white");
        textSize(32);
        textAlign(CENTER, CENTER);
        text("WINNER" + this.winnerMessage, width / 2, height / 2 - 60);
        const score1 = this.scoreManager.getScore(1);
        const score2 = this.scoreManager.getScore(2);
        textSize(24);
        text(`Player 1 Score: ${score1}`, width / 2, height / 2 + 20);
        text(`Player 2 Score: ${score2}`, width / 2, height / 2 + 60);
        this.menyButton.draw();
        pop();
    }
    update() {
        if (this.menyButton.isClicked()) {
            game.changeScreen(new Game());
        }
    }
}
//# sourceMappingURL=gameOverScreen.js.map