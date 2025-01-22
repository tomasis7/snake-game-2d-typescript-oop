class CollisionManager {
  players: Player[];
  entities: Entity[];

  constructor(players: Player[], entities: Entity[]) {
    this.players = players;
    this.entities = entities;
  }

  checkCollision(player: Player, gameBoard: GameBoard): void {
    const head = player.trail[0]; // Ormens huvud
    const headCenter = createVector(
      head.x + player.size.x / 2,
      head.y + player.size.y / 2
    );

    for (const entity of gameBoard.entities) {
      if (
        headCenter.x >= entity.position.x &&
        headCenter.x <= entity.position.x + entity.size.x &&
        headCenter.y >= entity.position.y &&
        headCenter.y <= entity.position.y + entity.size.y
      ) {
        if (entity instanceof TetrisBlock) {
          if (!player.isColliding) {
            music.error.play();
            player.isColliding = true;
            player.isMoving = false; // Stop the snake completely
            console.log(
              `Player ${player.playerNumber} collided with TetrisBlock`
            );
          }
          return;
        }
      }
    }
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
