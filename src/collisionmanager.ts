class CollisionManager {
  players: Player[];
  entities: Entity[];

  constructor(players: Player[], entities: Entity[]) {
    this.players = players;
    this.entities = entities;
  }

  checkCollision(player: Player, gameBoard: GameBoard): void {
    const head = player.trail[0];
    const headLeft = head.x;
    const headRight = head.x + player.size.x;
    const headTop = head.y;
    const headBottom = head.y + player.size.y;

    for (const entity of gameBoard.entities) {
      if (entity instanceof TetrisBlock) {

        const blockLeft = entity.position.x - entity.size.x / 2;
        const blockRight = entity.position.x + entity.size.x / 2;
        const blockTop = entity.position.y - entity.size.y / 2;
        const blockBottom = entity.position.y + entity.size.y / 2;

        // Kontrollera om ormens huvud överlappar blockets kant
        const isColliding =
          headRight > blockLeft &&
          headLeft < blockRight &&
          headBottom > blockTop &&
          headTop < blockBottom;

        if (isColliding) {
          if (!player.isColliding) {
            music.error.play();
            player.isColliding = true;
            player.isMoving = false;
            console.log(
              `Player ${player.playerNumber} collided with TetrisBlock`
            );
          }
          return; // Avsluta loopen om kollision har skett
        }
      }
    }

    // Om ingen kollision upptäcks, återställ flaggor
    player.isColliding = false;
  }
}

// class CollisionManager {
//     constructor() {}
//     checkCollision(player: Player, gameBoard: GameBoard): boolean
//     // Insert collision logic here
//     return false;
//   }

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
//   }
