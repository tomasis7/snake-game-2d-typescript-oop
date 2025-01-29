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

    // Deduct life
    player.lives -= 1;
    if (player.lives < 0) {
      player.lives = 0;
    }

<<<<<<< HEAD
    // Deduct score on collision
    this.scoreManager.updateScore(player.getPlayerNumber(), -10);

    // Only trigger Game Over if the player has no lives left
    if (player.lives === 0) {
      this.showGameOver(player.playerNumber);
    }
  }

  private handleStarCollision(player: Player): void {
    sounds.starPickUp.play();
    player.isColliding = true;

    player.doubleLives();
    player.scoreMultiplier = 2;

    setTimeout(() => {
      player.scoreMultiplier = 1;
      console.log(`Player ${player.playerNumber}'s score multiplier reset.`);
    }, 10000);

    player.enableObstaclePassing(10000);
    this.showPopupMessage(
      `Player ${player.playerNumber} can pass through obstacles for 10 seconds!`
    );

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

<<<<<<< HEAD
    if (player.lives === 0) {
      this.showGameOver(player.playerNumber);
=======


    private handleStarCollision(player: Player): void {
        sounds.starPickUp.play();
=======
    private handleTetrisCollision(player: Player): void {
        sounds.blockCollision.play();
        player.isColliding = true;
        player.isMoving = false;
        console.log(`Player ${player.playerNumber} collided with a TetrisBlock.`);

        this.showGameOver(player.playerNumber);

    }

    private handleHeartCollision(player: Player, heart: Entity): void {
        if (player.isColliding) return; // Prevent multiple triggers per frame

        sounds.gainheart.play();
        console.log(`Player ${player.playerNumber} collected a Heart!`);

        player.isColliding = true; // Prevent further collisions until the next frame

        if (player.lives < player.maxLives) {
            player.lives += 1;
        }

        // Remove heart immediately
        if (this.removeEntityCallback) {
            this.removeEntityCallback(heart);
        }
    }

    private handleStarCollision(player: Player, star: Entity): void {
>>>>>>> f570770 (update collision, collision happens on the edge of the block now)
        player.isColliding = true;
        sounds.starPickUp.play();

        player.doubleLives();
        player.scoreMultiplier = 2;

        setTimeout(() => {
            player.scoreMultiplier = 1;
            console.log(`Player ${player.playerNumber}'s score multiplier reset.`);
        }, 10000);

        player.enableObstaclePassing(10000);
        this.showPopupMessage(
            `Player ${player.playerNumber} can pass through obstacles for 10 seconds!`
        );

        this.scoreManager.updateScore(player.getPlayerNumber(), 100); // Ge poäng vid att samla stjärna
    }

<<<<<<< HEAD
    private handleHeartCollision(player: Player, heart: Entity): void {
        if (player.isColliding) return; // 🚨 Prevent multiple triggers per frame

        sounds.gainheart.play();
        console.log(`Player ${player.playerNumber} collected a Heart!`);

        player.isColliding = true; // 🚨 Prevent further collisions until the next frame

        if (player.lives < player.maxLives) {
            player.lives += 1;
        }

        // Remove heart immediately
        if (this.removeEntityCallback) {
            this.removeEntityCallback(heart);
        }
    }
=======
>>>>>>> f570770 (update collision, collision happens on the edge of the block now)



    private handlePlantCollision(player: Player): void {
        player.isColliding = true;
        sounds.blockCollision.play();

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

<<<<<<< HEAD
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
=======
    private handleHeartCollision(player: Player, heart: Entity): void {
        if (player.isColliding) return; // 🚨 Prevent multiple triggers per frame

        sounds.gainheart.play();
        console.log(`Player ${player.playerNumber} collected a Heart!`);

        player.isColliding = true; // 🚨 Prevent further collisions until the next frame

        if (player.lives < player.maxLives) {
            player.lives += 1;
        }

        // Remove heart immediately
        if (this.removeEntityCallback) {
            this.removeEntityCallback(heart);
        }
>>>>>>> 6b17802 (update the heart collision logic)
    }
  }

<<<<<<< HEAD
  private showGameOver(losingPlayer: number): void {
    const winnerMessage =
      losingPlayer === 1
        ? "Player 1 lost. Player 2 wins!"
        : losingPlayer === 2
        ? "Player 2 lost. Player 1 wins!"
        : "Game Over!";
=======


    private handlePlantCollision(player: Player): void {
        sounds.blockCollision.play();
        player.isColliding = true;
>>>>>>> 6b17802 (update the heart collision logic)

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
                            this.handleStarCollision(player);
                        } else if (entity instanceof Heart) {
                            this.handleHeartCollision(player, entity);
                        } else if (entity instanceof Plant) {
                            this.handlePlantCollision(player);
                        } else if (entity instanceof Ghost) {
                            this.handleGhostCollision(player, entity);
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
