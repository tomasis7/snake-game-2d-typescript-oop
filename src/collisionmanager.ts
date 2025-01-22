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
  private players: Player[];
  private isGameOver: boolean = false;
  private gridSize: number = 32;
  private cameraOffset: number = 0;
  private obstacles: Obstacle[] = [
    { row: 15, col: 20, color: "red" },
    { row: 15, col: 21, color: "red" },
    { row: 15, col: 22, color: "red" },
  ];

  constructor(players: Player[]) {
    this.players = players;
  }

  updateOffset(offset: number): void {
    this.cameraOffset = offset;
  }

  checkCollision(player: Player, gameBoard: GameBoard): boolean {
    if (this.isGameOver) {
      this.showGameOver();
      return true;
    }
    this.checkGridCollision(player);
    return false;
  }

  private showGameOver(): void {
    background("black");
    push();
    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    pop();
  }

  draw(): void {
    this.obstacles.forEach((obstacle) => {
      push();
      fill(obstacle.color);
      stroke("green");
      strokeWeight(2);
      const x = obstacle.col * this.gridSize - this.cameraOffset;
      const y = obstacle.row * this.gridSize;
      //rectMode(CORNER);
      rect(x, y, this.gridSize, this.gridSize);
      pop();
    });

    if (this.isGameOver) {
      this.showGameOver();
    }
  }

  private checkGridCollision(player: Player): void {
    const playerPos = {
      row: Math.floor(player.position.y / this.gridSize),
      col: Math.floor((player.position.x + this.cameraOffset) / this.gridSize),
    };

    this.obstacles.forEach((obstacle) => {
      if (playerPos.row === obstacle.row && playerPos.col === obstacle.col) {
        console.log("Collision detected!");
        this.isGameOver = true;
      }
    });
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
