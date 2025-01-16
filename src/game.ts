class Player extends Entity {
  private direction: p5.Vector;
  private trail: p5.Vector[];
  private playerNumber: number;

  constructor(
    position: p5.Vector,
    size: p5.Vector,
    speed: number,
    image: p5.Image,
    playerNumber: number
  ) {
    super(position, size, speed, image);
    this.direction = new p5.Vector(1, 0); // Start moving right by default
    this.trail = [];
    this.playerNumber = playerNumber;
  }

  move(): void {
    // Change direction based on valid key presses
    if(keyIsPressed) {
      // Player 1 controls: Arrow keys
      if (this.playerNumber === 1) {
        if (keyCode === LEFT_ARROW && this.direction.x !== 1) {
          this.direction = new p5.Vector(-1, 0);
        }
        if (keyCode === RIGHT_ARROW && this.direction.x !== -1) {
          this.direction = new p5.Vector(1, 0);
        }
        if (keyCode === UP_ARROW && this.direction.y !== 1) {
          this.direction = new p5.Vector(0, -1);
        }
        if (keyCode === DOWN_ARROW && this.direction.y !== -1) {
          this.direction = new p5.Vector(0, 1);
        }
      }
      // Player 2 controls: WASD keys
      if (this.playerNumber === 2) {
        if (keyCode === 65 && this.direction.x !== 1) {   // 'A'
          this.direction = new p5.Vector(-1, 0);
        }
        if (keyCode === 68 && this.direction.x !== -1) {  // 'D'
          this.direction = new p5.Vector(1, 0);
        }
        if (keyCode === 87 && this.direction.y !== 1) {   // 'W'
          this.direction = new p5.Vector(0, -1);
        }
        if (keyCode === 83 && this.direction.y !== -1) {  // 'S'
          this.direction = new p5.Vector(0, 1);
        }
      }
    }

    // Keeps moving in current direction without having to keep holding the key down.
    // copy() creates a new vector so original direction vector is not modified
    // mult() applies current speed to the movement
    this.position.add(this.direction.copy().mult(this.speed));
  }

  // Update players state and position
  update(): void {
    // Store current position in trail array
    this.trail.push(new p5.Vector(this.position.x, this.position.y));
    
    // Update position with add
    this.position.add(this.direction);
  }
}

// Main Game Class
class Game {
  //    private activeScreen: Screen[];
  //    constructor() {
  //      this.activeScreen = [];
  //    }
  //   changeScreen(): void {
  //     // Logic to change the screen
  //   }
  //   newGame(): void {
  //     // Logic to start a new game
  //   }
  //  draw(): void {
  //    // Draw the current active screen
  //    for (const screen of this.activeScreen) {
  //      screen.draw();
  //    }
  //  }
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
}

// Game Board
class GameBoard {
  size: p5.Vector;
  entities: Entity[];
  //collision: CollisionManager;
  //score: ScoreManager[];

  constructor(size: p5.Vector) {
    this.size = size;
    this.entities = [];
    //this.collision = new CollisionManager();
    //this.score = [];
  }

  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
  }

  draw(): void {
    for (const entity of this.entities) {
      entity.draw();
    }
  }
}

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

// Screen Base Class
// abstract class Screen {
//   abstract update(): void;
//   abstract draw(): void;
// }

// // Start Menu
// class StartMenu extends Screen {
//   startGameButton: Button;

//   constructor(button: Button) {
//     super();
//     this.startGameButton = button;
//   }

//   update(): void {
//     // Update start menu logic
//   }

//   draw(): void {
//     this.startGameButton.draw();
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

// Level Factory
class LevelFactory {
  private gridSize: number = 32;

  draw(): void {
    // Draw level creation elements
    push();
    stroke(150, 150, 150);
    strokeWeight(2);
    for (let x = 0; x < width * 2; x += this.gridSize) {
      line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += this.gridSize) {
      line(0, y, width * 2, y);
    }
    pop();
  }
}

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
    speed: number
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
class Heart extends Entity {
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
}

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

// // Button Class
// class Button {
//   text: string;
//   position: p5.Vector;
//   backgroundColor: string;
//   size: p5.Vector;
//   color: string;

//   constructor(
//     text: string,
//     position: p5.Vector,
//     backgroundColor: string,
//     size: p5.Vector,
//     color: string
//   ) {
//     this.text = text;
//     this.position = position;
//     this.backgroundColor = backgroundColor;
//     this.size = size;
//     this.color = color;
//   }

//   draw(): void {
//     // Draw button UI
//   }
// }
