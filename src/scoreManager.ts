class ScoreManager {
    private scores: Map<number, number>; // Använder Map för att koppla playerNumber till poäng

    constructor(players: Player[]) {
        this.scores = new Map();
        for (const player of players) {
            this.scores.set(player.getPlayerNumber(), 0); // Initiera poäng för varje spelare
        }
    }

    // Uppdatera poängen för en specifik spelare
    updateScore(playerNumber: number, points: number): void {
        if (this.scores.has(playerNumber)) {
            const currentScore = this.scores.get(playerNumber) || 0;
            this.scores.set(playerNumber, currentScore + points);
            console.log(`Player ${playerNumber}'s score updated: ${this.scores.get(playerNumber)}`);
        }
    }

    // Rita upp poängen på skärmen
    draw(): void {
        push();
        textSize(24);
        fill("white");

        for (const [playerNumber, score] of this.scores.entries()) {
            if (playerNumber === 1) {
                // Player 1: Top of the screen
                text(`Player ${playerNumber}: ${score}`, 250, 15);
            } else if (playerNumber === 2) {
                // Player 2: Bottom of the screen
                text(`Player ${playerNumber}: ${score}`, 250, height);
            }
        }

        pop();
    }

    // Hämta poäng för en specifik spelare (om behövs)
    getScore(playerNumber: number): number {
        return this.scores.get(playerNumber) || 0;
    }
}
