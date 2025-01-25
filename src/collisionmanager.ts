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

    constructor(players: Player[], entities: Entity[]) {
        this.players = players;
        this.entities = entities;
    }

    private handleTetrisCollision(player: Player): void {
        music.tetrisCollision.play();
        player.isColliding = true;
        player.isMoving = false;
        console.log(`Player ${player.playerNumber} collided with a TetrisBlock.`);
    }

    private handleStarCollision(player: Player): void {
        music.starCollision.play();
        player.isColliding = true;

        // Uppdatera spelarens tillstånd via Player-metoder
        player.doubleLives(); // Dubblar liv
        player.scoreMultiplier = 2; // 2x poängmultiplikator

        // Återställ multiplikatorn efter 10 sekunder
        setTimeout(() => {
            player.scoreMultiplier = 1;
            console.log(`Player ${player.playerNumber}'s score multiplier reset.`);
        }, 10000);

        // Aktivera hinderpassering i 10 sekunder
        player.enableObstaclePassing(10000);

        this.showPopupMessage(`Player ${player.playerNumber} can pass through obstacles for 10 seconds!`);

        console.log(`Player ${player.playerNumber} collected a Star!`);

    }

    private handleHeartCollision(player: Player): void {
        music.starCollision.play();
        player.isColliding = true;
        // player.score += 100; // Lägg till poäng
        console.log(`Player ${player.playerNumber} collected a Star!`);
    }

    private handlePlantCollision(player: Player): void {
        music.starCollision.play();
        player.isColliding = true;
        // player.score += 100; // Lägg till poäng
        console.log(`Player ${player.playerNumber} collected a Star!`);
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
                const entityLeft = entity.position.x - entity.size.x / 2;
                const entityRight = entity.position.x + entity.size.x / 2;
                const entityTop = entity.position.y - entity.size.y / 2;
                const entityBottom = entity.position.y + entity.size.y / 2;

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
                            this.handleStarCollision(player);
                        } else if (entity instanceof AnotherEntityType) {
                            handleAnotherEntityCollision(player);
                        } else {
                            handleDefaultCollision(player);
                        }
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

//   private showGameOver() {
//     background("black");
//     push();
//     fill("white");
//     textSize(32);
//     textAlign(CENTER, CENTER);
//     text("GAME OVER", width / 2, height / 2);
//     pop();
