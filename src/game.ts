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

// IMovable Interface
interface IMovable {
  position: p5.Vector;
  direction: p5.Vector;
  move(): void;
}

// Entity Base Class
abstract class Entity implements IMovable {
  position: p5.Vector;
  size: p5.Vector;
  image: p5.Image;
  speed: number;
  direction: p5.Vector;

  constructor(
    position: p5.Vector,
    size: p5.Vector,
    image: p5.Image,
    speed: number,
    direction: p5.Vector
  ) {
    this.position = position;
    this.size = size;
    this.image = image;
    this.speed = speed;
    this.direction = direction;
  }

  draw(): void {
    image(
      this.image,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }
  move(): void {
    if (typeof this.speed === "number") {
      this.position.add(this.direction.mult(this.speed));
    } else {
      console.error("speed must be a number");
    }
  }
  abstract update(): void;
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

// Specific Entities
class Heart extends Entity {
  private pulseScale: number;
  private pulseSpeed: number;

  constructor(position: p5.Vector, size: p5.Vector) {
    super(position, size, heartImage, 0, p5.Vector.random2D());
    this.pulseScale = 1;
    this.pulseSpeed = 0.01;
  }
  draw(): void {
    push();
    translate(this.position.x, this.position.y);
    scale(this.pulseScale);
    image(heartImage, -this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    pop();
  }
  update(): void {
    // update 'pulse' animation on heart
    this.pulseScale = 1 + 0.2 * Math.sin(millis() * this.pulseSpeed);
    console.log(this.pulseScale);
  }
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

class Ghost extends Entity {
  constructor(
    position: p5.Vector,
    size: p5.Vector,
    speed: number,
    direction: p5.Vector
  ) {
    super(position, size, ghostImage, speed, direction);
  }

  draw(): void {
    if(!ghostImage) {
      console.error("Ghost image not loaded");
      return;
    }

    push();
    translate(this.position.x, this.position.y);
    image(ghostImage, -this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    pop();
  }

  update(): void {
    this.move();

    if (this.position.x < 0 || this.position.x > width) {
      this.direction.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.direction.y *= -1;
    }
  }

  move(): void {
    this.position.add(this.direction.copy().mult(this.speed));
  }
}

// class TetrisObstacle extends Entity {
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

// // meeteaterplant class
// class CarnivorusPlant extends Entity {
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
