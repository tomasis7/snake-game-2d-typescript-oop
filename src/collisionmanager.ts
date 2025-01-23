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

  checkCollision(): void {
    for (const player of this.players) {
      const head = player.trail[0];
      const headLeft = head.x;
      const headRight = head.x + player.size.x;
      const headTop = head.y;
      const headBottom = head.y + player.size.y;

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
          if (entity instanceof TetrisBlock) {
            if (!player.isColliding) {
              music.error.play();
              player.isColliding = true;
              player.isMoving = false;
              console.log(
                `Player ${player.playerNumber} collided with TetrisBlock`
              );
            }
          }
          if (entity instanceof Star) {
          }
          return; // Avsluta loopen om kollision har skett
        }
      }
      player.isColliding = false;
    }

    // Om ingen kollision upptäcks, återställ flaggor
  }
}

// class CollisionManager {
//     players: Player[];
//     entities: Entity[];

//     constructor(players: Player[], entities: Entity[]) {
//       this.players = players;
//       this.entities = entities;
//     }

//     checkCollision(player: Player, gameBoard: GameBoard): void {
//         const head = player.trail[0]; // Ormens huvud

//         for (const entity of gameBoard.entities) {
//           if (
//             head.x < entity.position.x + entity.size.x &&
//             head.x + player.size.x > entity.position.x &&
//             head.y < entity.position.y + entity.size.y &&
//             head.y + player.size.y > entity.position.y
//           ) {
//             if (entity instanceof Heart) {
//               console.log("Heart collided with snake head!");
//               gameBoard.removeEntity(entity);
//             }
//           }
//         }
//       }
// }

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
