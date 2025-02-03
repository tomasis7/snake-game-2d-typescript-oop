"use strict";
class CountDown extends GameScreen {
    constructor(level, callback) {
        super();
        this.countdownDuration = 3;
        this.countdownValue = this.countdownDuration;
        this.lastUpdateTime = Date.now();
        this.isComplete = false;
        this.callback = callback;
        this.level = level;
    }
    update() {
        const currentTime = Date.now();
        const deltaTime = (currentTime - this.lastUpdateTime) / 1000;
        if (this.countdownValue > 0) {
            this.countdownValue -= deltaTime;
            if (this.countdownValue <= 0) {
                this.countdownValue = 0;
                this.isComplete = true;
                this.callback();
                game.changeScreen(new GameBoard(this.level));
            }
        }
        this.lastUpdateTime = currentTime;
    }
    draw() {
        push();
        background("black");
        fill("#45FF8C");
        textSize(32);
        textAlign(CENTER, CENTER);
        textFont(customFont);
        text("GET READY", width / 2, height / 4);
        fill("#FFFFFF");
        textSize(84);
        const displayNumber = Math.ceil(this.countdownValue);
        if (displayNumber > 0) {
            text(displayNumber.toString(), width / 2, height / 3);
        }
        pop();
    }
    isCountdownComplete() {
        return this.isComplete;
    }
}
//# sourceMappingURL=countdown.js.map