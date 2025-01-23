/// <reference path="gamescreen.ts" />
/// <reference path="levelfactory.ts" />
/// <reference path="tetrisBlocks.ts" />
/// <reference path="player.ts" />

class GameBoard extends GameScreen {
  entities: Entity[];
  players: Player[];
  levelFactory: LevelFactory;
  public collisionManager: CollisionManager;
  // private cameraOffset: number = 0;
  // private scrollSpeed: number = 2;

  constructor() {
    super(); // Anropa basklassens konstruktor
    this.players = [
      new Player(createVector(100, height * 0.4), 1, "red", "green", {
        UP: UP_ARROW,
        DOWN: DOWN_ARROW,
        RIGHT: RIGHT_ARROW,
        LEFT: LEFT_ARROW,
      }),
      new Player(createVector(100, height * 0.5), 2, "blue", "orange", {
        UP: 87,
        DOWN: 83,
        RIGHT: 68,
        LEFT: 65,
      }),
    ];

    this.levelFactory = new LevelFactory();
    //initialize
    this.entities = [
      new Heart(),
      new Star(),
      new Ghost(),
      new Plant(),
      new TetrisBlock(),
    ];

    this.collisionManager = new CollisionManager(this.players, this.entities);
  }

  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
  }

  public update(): void {
    // this.cameraOffset += this.scrollSpeed;

    for (const player of this.players) {
      player.update();
      // this.collisionManager.checkCollision(player, this.cameraOffset);
    }

    //låt det stå kvar
    // for (const entity of this.entities) {
    //   entity.update();
    // }

    this.flyingGhost();
    this.collisionManager.checkCollision();
  }

  private flyingGhost(): void {
    for (const entity of this.entities) {
      if (entity instanceof Ghost) {
        entity.update();
      }
    }
  }

  draw(): void {
    background("#577BC1"); // Ange bakgrundsfärg

    // translate(this.cameraOffset)
    //console.log("Drawing GameBoard");
    for (const entity of this.entities) {
      entity.draw();
    }

    for (const player of this.players) {
      player.draw();

      // this.levelFactory.draw(this.cameraOffset);
      // this.collisionManager.draw(this.cameraOffset);
      //console.log("Drawing GameBoard");
      // for (const entity of this.entities) {
      //   if (entity instanceof TetrisBlock) {
      //     entity.draw(this.cameraOffset);
      //   } else {
      //     entity.draw(this.cameraOffset);
      //   }
      //   for (const player of this.players) {
      //     player.draw();
      //   }
      // }
    }
  }
}
