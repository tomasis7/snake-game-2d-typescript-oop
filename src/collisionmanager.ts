interface Obstacle {
    row: number;
    col: number;
    color: string;
}

interface GridPosition {
    row: number;
    col: number;
}

class CollisionManager {
    players: Player[];
    entities: Entity[];
    scoreManager: ScoreManager;
    private removeEntityCallback: (entity: Entity) => void; // Callback-funktion

    constructor(
        players: Player[],
        entities: Entity[],
        scoreManager: ScoreManager,
        removeEntityCallback: (entity: Entity) => void // Add this parameter
    ) {
        this.players = players;
        this.entities = entities;
        this.scoreManager = scoreManager;
        this.removeEntityCallback = removeEntityCallback; // Spara callback
    }

    private handleTetrisCollision(player: Player): void {
        sounds.blockCollision.play();
        player.isColliding = true;
        player.isMoving = false;
        console.log(`Player ${player.playerNumber} collided with a TetrisBlock.`);

        // Trigger Game Over immediately
        this.showGameOver(player.playerNumber);
    }


    private handleWinBlockCollision(player: Player): void {
        sounds.blockCollision.play();
        player.isColliding = true;
        player.isMoving = false;
        console.log(`Player ${player.playerNumber} won!`);
        const otherPlayerNumber = player.playerNumber === 1 ? 2 : 1;
        this.showGameOver(otherPlayerNumber);
    }

    private handleStarCollision(player: Player, star: Entity): void {
        if (star.isRemoved) return; // Prevent multiple collections
        sounds.starPickUp.play();
        player.isColliding = true;

        player.doubleLives();
        player.scoreMultiplier = 2;

        setTimeout(() => {
            player.scoreMultiplier = 1;
            console.log(`Player ${player.playerNumber}'s score multiplier reset.`);
        }, 10000);

        star.isRemoved = true; // Mark heart as removed
        this.removeEntityCallback(star);
        console.log(`Heart entity removed:`, star); // Added logging
        this.scoreManager.updateScore(player.getPlayerNumber(), 50); // Ge poäng vid att samla stjärna
    }

    private handleHeartCollision(player: Player, heart: Entity): void {
        if (heart.isRemoved) return; // Prevent multiple collections
        sounds.gainheart.play();
        player.isColliding = true;
        console.log(`Player ${player.playerNumber} collected a Heart!`);

        if (player.lives < player.maxLives) {
            player.lives += 1;
        }
        heart.isRemoved = true; // Mark heart as removed
        this.removeEntityCallback(heart);
        console.log(`Heart entity removed:`, heart); // Added logging
        this.scoreManager.updateScore(player.getPlayerNumber(), 100); // Ge poäng vid att samla hjärta
    }

    private handlePlantCollision(player: Player): void {
        sounds.blockCollision.play();
        player.isColliding = true;

        player.lives -= 2;

        // Se till att liv inte går under 0
        if (player.lives < 0) {
            player.lives = 0;
        }

        if (player.lives === 0) {
            this.showGameOver(player.playerNumber);
        }
        this.scoreManager.updateScore(player.getPlayerNumber(), -20); // Ta bort poäng vid växtkollision
    }

    private isGhostSoundPlaying: boolean = false;

    private handleGhostCollision(player: Player, ghost: Entity): void {
        const distance = dist(
            player.position.x,
            player.position.y,
            ghost.position.x,
            ghost.position.y
        );

        console.log("Distance to ghost:", distance);

        if (distance < 900) {
            console.log("Ghost is near, playing sound...");

            if (!this.isGhostSoundPlaying) {
                sounds.ghost.play();
                this.isGhostSoundPlaying = true;
                console.log("Ghost sound started");
            }
            player.isColliding = true;
            player.lives -= 1;

            if (player.lives < 0) {
                player.lives = 0;
            }

            if (player.lives === 0) {
                this.showGameOver(player.playerNumber);
            }
        } else {
            if (this.isGhostSoundPlaying) {
                sounds.ghost.stop();
                this.isGhostSoundPlaying = false;
                console.log("Ghost sound stopped");
            }

            this.scoreManager.updateScore(player.getPlayerNumber(), -5); // Ta bort poäng vid spökkollision
        }
    }

    private showGameOver(losingPlayer: number): void {
        const winnerMessage =
            losingPlayer === 1
                ? "Player 1 lost. Player 2 wins!"
                : losingPlayer === 2
                    ? "Player 2 lost. Player 1 wins!"
                    : "Game Over!";

        game.changeScreen(new GameOverScreen(winnerMessage));
        console.log(winnerMessage);
    }

    checkCollision(): void {
        for (const player of this.players) {
            const head = player.trail[0];
            const headLeft = head.x;
            const headRight = head.x + player.size.x;
            const headTop = head.y;
            const headBottom = head.y + player.size.y;

            // Flagga för att spåra om en kollision upptäcks
            let hasCollision = false;

            for (const entity of this.entities) {
                const entityLeft = entity.position.x;
                const entityRight = entity.position.x + entity.size.x;
                const entityTop = entity.position.y;
                const entityBottom = entity.position.y + entity.size.y;

                // Kontrollera om ormens huvud överlappar blockets kant
                const isColliding =
                    headRight > entityLeft &&
                    headLeft < entityRight &&
                    headBottom > entityTop &&
                    headTop < entityBottom;

                if (isColliding) {
                    hasCollision = true; // Markera att en kollision upptäckts

                    if (!player.isColliding) {
                        // Hantera kollision baserat på entitetstyp
                        if (entity instanceof TetrisBlock) {
                            this.handleTetrisCollision(player);
                        } else if (entity instanceof Star) {
                            this.handleStarCollision(player, entity);
                        } else if (entity instanceof Heart) {
                            this.handleHeartCollision(player, entity);
                        } else if (entity instanceof Plant) {
                            this.handlePlantCollision(player);
                        } else if (entity instanceof Ghost) {
                            this.handleGhostCollision(player, entity);
                        } else if (entity instanceof WinBlock) {
                            this.handleWinBlockCollision(player);
                        }

                        // Avsluta loopen för entiteter eftersom kollision upptäcktes
                        break;
                    }
                }

                // Återställ kollisionen om ingen upptäcktes
                if (!hasCollision) {
                    player.isColliding = false;
                }
            }
        }
    }

    showPopupMessage(message: string, duration: number = 3000): void {
        const popup = document.createElement("div");
        popup.innerText = message;
        popup.style.position = "absolute";
        popup.style.top = "10px"; // Placera det var du vill
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        popup.style.color = "white";
        popup.style.padding = "10px 20px";
        popup.style.borderRadius = "8px";
        popup.style.zIndex = "1000";
        document.body.appendChild(popup);

        setTimeout(() => {
            document.body.removeChild(popup);
        }, duration);
    }
}

// Om ingen kollision upptäcks, återställ flaggor

//   private checkGridCollision() {
//     // Define obstacles with positions and colors
//     const obstacles = [
//       { row: 25, col: 50, color: "red" },
//       { row: 25, col: 51, color: "yellow" },
//       { row: 25, col: 52, color: "green" },
//       { row: 15, col: 50, color: "bomb" },
//       { row: 15, col: 51, color: "bomb" },
//       { row: 15, col: 52, color: "bomb" },
//     ];

//     // Draw obstacles
//     obstacles.forEach((obstacle) => {
//       this.drawSquareAt(obstacle.row, obstacle.col);
//       this.drawSquareAt2(obstacle.row, obstacle.col, obstacle.color);
//     });

//     // Direct position comparison
//     obstacles.forEach((obstacle) => {
//       if (
//         (this.player1.row === obstacle.row &&
//           this.player1.col === obstacle.col) ||
//         (this.player2.row === obstacle.row && this.player2.col === obstacle.col)
//       ) {
//         alert(`Square hit a ${obstacle.color} obstacle!`);
//         this.isGameOver = true;
//       }
//     });
//   }
