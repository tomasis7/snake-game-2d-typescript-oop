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

// Start Menu
class StartMenu extends GameScreen {
  startGameButton: Button;
  selectEasyMode: Button;
  selectMediumMode: Button;
  selectHardMode: Button;
  levelFactory: LevelFactory;

  constructor(button: Button) {
    super();
    this.startGameButton = button;

    this.selectEasyMode = new Button(
      "Easy",
      createVector(width / 2, height / 2 - 100),
      "green",
      createVector(200, 50),
      "white",
    );

    this.selectMediumMode = new Button(
      "Medium",
      createVector(width / 2, height / 2),
      "yellow",
      createVector(200, 50),
      "black",
    );

    this.selectHardMode = new Button(
      "Hard",
      createVector(width / 2, height / 2 + 100),
      "red",
      createVector(200, 50),
      "white",
    );

    this.levelFactory = new LevelFactory();
  }

  update(): void {
    if (this.startGameButton.isClicked()) {
      game.changeScreen(new GameBoard(createVector(800, 600)));
    }

    if (this.selectEasyMode.isClicked()) {
      console.log("Easy mode selected");
    }

    if (this.selectMediumMode.isClicked()) {
      console.log("Medium mode selected");
    }

    if (this.selectHardMode.isClicked()) {
      console.log("Hard mode selected");
    }
  }

  draw(): void {
    background("black");
    fill("green");
    textAlign(CENTER, CENTER);
    textSize(32);
    text("SELECT DIFFICULTY", width / 2, height / 4);

    this.startGameButton.draw();
    this.selectEasyMode.draw();
    this.selectMediumMode.draw();
    this.selectHardMode.draw();
  }

  newGame(): void {
    console.log("Starting a new game...");
    game.changeScreen(new StartMenu(this.startGameButton));
  }
}

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
    direction: p5.Vector,
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
      this.size.y,
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

class Ghost extends Entity {
  constructor(
    position: p5.Vector,
    size: p5.Vector,
    image: p5.Image,
    speed: number,
  ) {
    super(position, size, image, speed);
  }

  draw(): void {
    // Draw ghost entity
  }

  update(): void {
    // Update ghost entity
  }

  move(): void {
    // Move ghost entity
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

// Button Class
class Button {
  text: string;
  position: p5.Vector;
  backgroundColor: string;
  size: p5.Vector;
  color: string;

  constructor(
    text: string,
    position: p5.Vector,
    backgroundColor: string,
    size: p5.Vector,
    color: string,
  ) {
    this.text = text;
    this.position = position;
    this.backgroundColor = backgroundColor;
    this.size = size;
    this.color = color;
  }

  draw(): void {
    fill(this.backgroundColor);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    fill(this.color);
    textAlign(CENTER, CENTER);
    text(this.text, this.position.x, this.position.y);
  }

  isClicked(): boolean {
    return (
      mouseIsPressed &&
      mouseX > this.position.x - this.size.x / 2 &&
      mouseX < this.position.x + this.size.x / 2 &&
      mouseY > this.position.y - this.size.y / 2 &&
      mouseY < this.position.y + this.size.y / 2
    );
  }
}
