//   end(): void {
//     // Logic to end the game
//   }
// }
// // Collision Manager
// class CollisionManager {
//   players: Player[];
//   entities: Entity[];
//   constructor() {
//     this.players = [];
//     this.entities = [];
//   }
//   checkCollision(player: Player, gameBoard: GameBoard): boolean {
//     // Check for collisions between players and entities
//     return false;
//   }
//   draw(): void {
//     // Visual representation of collisions, if needed
//   }

// // Score Manager
// class ScoreManager {
//   scores: Map<Player, number>;

//   constructor() {
//     this.scores = new Map();
//   }

//   addScore(player: Player, score: number): void {
//     const currentScore = this.scores.get(player) || 0;
//     this.scores.set(player, currentScore + score);
//   }

//   draw(): void {
//     // Draw the score UI
//   }
// }

// // Game Over Screen
// class GameOver extends Screen {
//   restartButton: Button;

//   constructor(button: Button) {
//     super();
//     this.restartButton = button;
//   }

//   update(): void {
//     // Update game over logic
//   }

//   drawTitle(): void {
//     // Draw the "Game Over" title
//   }

//   draw(): void {
//     this.restartButton.draw();
//   }
// }

// // Count Down
// class CountDown extends Screen {
//   draw(): void {
//     // Draw countdown screen
//   }

//   update(): void {
//     // Update countdown logic
//   }
// }

// // Player Class
// class Player implements IMovable {
//   position: p5.Vector;
//   direction: p5.Vector;
//   trail: p5.Vector[];

//   constructor(position: p5.Vector, direction: p5.Vector) {
//     this.position = position;
//     this.direction = direction;
//     this.trail = [];
//   }

//   move(): void {
//     // Move the player
//   }

//   update(): void {
//     // Update the player's position and state
//   }
// }

// IMovable Interface
interface IMovable {
  position: p5.Vector;
  // direction: p5.Vector;
  move(): void;
}

// Entity Base Class
abstract class Entity implements IMovable {
  position: p5.Vector;
  size: p5.Vector;
  image: p5.Image;
  speed: number;

  constructor(
    position: p5.Vector,
    size: p5.Vector,
    image: p5.Image,
    speed: number,
  ) {
    this.position = position;
    this.size = size;
    this.image = image;
    this.speed = speed;
  }

  abstract draw(): void;
  abstract update(): void;
  abstract move(): void;
}

// Specific Entities
// class Heart extends Entity {
//   constructor(
//     position: p5.Vector,
//     size: p5.Vector,
//     image: p5.Image,
//     speed: number
//   ) {
//     super(position, size, image, speed);
//   }
//   draw(): void {
//     // Draw heart entity
//   }
//   update(): void {
//     // Update heart entity
//   }
//   move(): void {
//     // Move heart entity
//   }

// class Star extends Entity {
//   constructor(
//     position: p5.Vector,
//     size: p5.Vector,
//     image: p5.Image,
//     speed: number
//   ) {
//     super(position, size, image, speed);
//   }

//   draw(): void {
//     // Draw star entity
//   }

//   update(): void {
//     // Update star entity
//   }

//   move(): void {
//     // Move star entity
//   }
// }

// class Ghost extends Entity {
//   constructor(
//     position: p5.Vector,
//     size: p5.Vector,
//     image: p5.Image,
//     speed: number
//   ) {
//     super(position, size, image, speed);
//   }

//   draw(): void {
//     // Draw ghost entity
//   }

//   update(): void {
//     // Update ghost entity
//   }

//   move(): void {
//     // Move ghost entity
//   }
// }

// class TetrisHinder extends Entity {
//   constructor(
//     position: p5.Vector,
//     size: p5.Vector,
//     image: p5.Image,
//     speed: number
//   ) {
//     super(position, size, image, speed);
//   }

//   draw(): void {
//     // Draw Tetris hinder entity
//   }

//   update(): void {
//     // Update Tetris hinder entity
//   }

//   move(): void {
//     // Move Tetris hinder entity
//   }
// }

// class MeatEaterPlant extends Entity {
//   constructor(
//     position: p5.Vector,
//     size: p5.Vector,
//     image: p5.Image,
//     speed: number
//   ) {
//     super(position, size, image, speed);
//   }

//   draw(): void {
//     // Draw MeatEaterPlant entity
//   }

//   update(): void {
//     // Update MeatEaterPlant entity
//   }

//   move(): void {
//     // Move MeatEaterPlant entity
//   }
// }
