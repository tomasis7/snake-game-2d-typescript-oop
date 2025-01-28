/// <reference path="gamescreen.ts" />
/// <reference path="levelfactory.ts" />
/// <reference path="tetrisBlocks.ts" />
/// <reference path="player.ts" />

/**
 * Manages game entities, players, and collision logic on a level.
 */
class GameBoard extends GameScreen {
  entities: Entity[];
  players: Player[];
  levelFactory: LevelFactory;
  public collisionManager: CollisionManager;
  // private cameraOffset: number = 0;
  // private scrollSpeed: number = 2;

  /**
   * Sets up players, loads entities, and initializes collisions.
   */
  constructor() {
    super(); // Anropa basklassens konstruktor
    this.players = [
      new Player(createVector(0, 192), 1, "red", "green", {
        UP: UP_ARROW,
        DOWN: DOWN_ARROW,
        RIGHT: RIGHT_ARROW,
        LEFT: LEFT_ARROW,
      }),
      new Player(createVector(0, 576), 2, "blue", "orange", {
        UP: 87,
        DOWN: 83,
        RIGHT: 68,
        LEFT: 65,
      }),
    ];

    this.levelFactory = new LevelFactory();
    //initialize
    this.entities = [
      // new Heart(),
      // new Star(), // For test to get levelfactory in place.
      // new Ghost(),
      // new Plant(), // For test to get levelfactory in place.
      // new TetrisBlock(),
    ];

    this.entities = this.levelFactory.createEntitiesForLevel(
      this.levelFactory.level1
    );

    this.collisionManager = new CollisionManager(this.players, this.entities);
  }

  /**
   * Adds a new entity to the game.
   * @param {Entity} entity - The entity to add
   */
  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  /**
   * Removes an entity from the game.
   * @param {Entity} entity - The entity to remove
   */
  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
  }

  /**
   * Updates all players and entities in the game world.
   */
  public update(): void {
    // this.cameraOffset += this.scrollSpeed;

    for (const player of this.players) {
      player.update();
      // this.collisionManager.checkCollision(player, this.cameraOffset);
    }

    //låt det stå kvar
    for (const entity of this.entities) {
      entity.update();
    }

    this.flyingGhost();
    this.collisionManager.checkCollision();
  }

  /**
   * Moves ghosts or other flying entities.
   */
  private flyingGhost(): void {
    for (const entity of this.entities) {
      if (entity instanceof Ghost) {
        entity.update();
      }
    }
  }

  /**
   * Draws all entities and players to the screen.
   */
  draw(): void {
    background("#000000"); // Ange bakgrundsfärg

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
