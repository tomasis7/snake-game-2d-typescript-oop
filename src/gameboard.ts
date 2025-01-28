/// <reference path="gamescreen.ts" />
/// <reference path="levelfactory.ts" />
/// <reference path="tetrisBlocks.ts" />
/// <reference path="player.ts" />

/**
 * Hanterar spelets entiteter, spelare och kollisioner på en nivå.
 */
class GameBoard extends GameScreen {
  entities: Entity[];
  players: Player[];
  levelFactory: LevelFactory;
  public collisionManager: CollisionManager;
  // private cameraOffset: number = 0;
  // private scrollSpeed: number = 2;

  /**
   * Initierar spelare, laddar entiteter och ställer in kollisioner.
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

    // this.entities = this.levelFactory.createEntitiesForLevel(
    //   this.levelFactory.level1
    // );

    this.collisionManager = new CollisionManager(this.players, this.entities);
  }

  /**
   * Lägger till en ny entitet i spelet.
   * @param {Entity} entity - Entiteten att lägga till
   */
  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  /**
   * Tar bort en entitet från spelet.
   * @param {Entity} entity - Entiteten att ta bort
   */
  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
  }

  /**
   * Uppdaterar alla spelare och entiteter i spelet.
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
   * Flyttar eventuella spöken eller andra flygande entiteter.
   */
  private flyingGhost(): void {
    for (const entity of this.entities) {
      if (entity instanceof Ghost) {
        entity.update();
      }
    }
  }

  /**
   * Ritar alla entiteter och spelare på skärmen.
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
