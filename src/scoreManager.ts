class ScoreManager {
    private scores: Map<number, number>;
    private players: Player[];
    private scoreIncrementInterval: number = 500; // Öka poängen varje hav-sekund (500 ms)
    private lastTickTime: number = 0;

    constructor(players: Player[]) {
        this.scores = new Map();
        this.players = players;
        for (const player of players) {
            this.scores.set(player.getPlayerNumber(), 0); // Initiera poäng för varje spelare
        }
        this.lastTickTime = millis(); // Sätt starttiden
    }

    // Uppdatera poängen för en specifik spelare
    updateScore(playerNumber: number, points: number): void {
        if (this.scores.has(playerNumber)) {
            const currentScore = this.scores.get(playerNumber) || 0;
            this.scores.set(playerNumber, currentScore + points);
            console.log(`Player ${playerNumber}'s score updated: ${this.scores.get(playerNumber)}`);
        }
    }

    // Öka poängen över tid
    tickScore(): void {
        const currentTime = millis();
        if (currentTime - this.lastTickTime >= this.scoreIncrementInterval) {
            for (const [playerNumber] of this.scores.entries()) {
                this.updateScore(playerNumber, 1); // Öka poängen med 1 varje sekund
            }
            this.lastTickTime = currentTime; 
        }
    }

    draw(): void {
        push();
        textSize(24);
        fill("white");
        textAlign(CENTER, CENTER); // Center text horizontally and vertically

        for (const [playerNumber, score] of this.scores.entries()) {
            const player = this.players.find(p => p.getPlayerNumber() === playerNumber);
            if (player) {
                const textContent = `Player: ${playerNumber} Score: ${score} | Lives: ${player.lives}`;
                if (playerNumber === 1) {
                    // Player 1: Top of the screen
                    text(textContent, width / 2, 40); // Centered horizontally at the top
                } else if (playerNumber === 2) {
                    // Player 2: Bottom of the screen
                    text(textContent, width / 2, height - 40); // Centered horizontally at the bottom
                }
            }
        }

        pop();
    }


    // Hämta poäng för en specifik spelare (om behövs)
    getScore(playerNumber: number): number {
        return this.scores.get(playerNumber) || 0;
    }
}