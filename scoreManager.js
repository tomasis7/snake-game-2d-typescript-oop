"use strict";
class ScoreManager {
    constructor(players) {
        this.scoreIncrementInterval = 500;
        this.lastTickTime = 0;
        this.scores = new Map();
        this.players = players;
        for (const player of players) {
            this.scores.set(player.getPlayerNumber(), 0);
        }
        this.lastTickTime = millis();
    }
    updateScore(playerNumber, points) {
        if (this.scores.has(playerNumber)) {
            const currentScore = this.scores.get(playerNumber) || 0;
            this.scores.set(playerNumber, currentScore + points);
            console.log(`Player ${playerNumber}'s score updated: ${this.scores.get(playerNumber)}`);
        }
    }
    tickScore() {
        const currentTime = millis();
        if (currentTime - this.lastTickTime >= this.scoreIncrementInterval) {
            for (const [playerNumber] of this.scores.entries()) {
                this.updateScore(playerNumber, 1);
            }
            this.lastTickTime = currentTime;
        }
    }
    draw() {
        push();
        textSize(24);
        fill("white");
        textAlign(CENTER, CENTER);
        for (const [playerNumber, score] of this.scores.entries()) {
            const player = this.players.find((p) => p.getPlayerNumber() === playerNumber);
            if (player) {
                const textContent = `Player: ${playerNumber} Score: ${score} | Lives: ${player.lives}`;
                if (playerNumber === 1) {
                    text(textContent, width / 2, 50);
                }
                else if (playerNumber === 2) {
                    text(textContent, width / 2, height - 40);
                }
            }
        }
        pop();
    }
    getScore(playerNumber) {
        return this.scores.get(playerNumber) || 0;
    }
}
//# sourceMappingURL=scoreManager.js.map