/// <reference path="gamescreen.ts" />
/// <reference path="levelfactory.ts" />
/// <reference path="tetrisBlocks.ts" />
/// <reference path="player.ts" />

class GameBoard extends GameScreen {
  private entities: Entity[];
  private players: Player[];
  private levelFactory: LevelFactory;
  private collisionManager: CollisionManager;
  private scoreManager: ScoreManager;

  private cameraOffset: number = 0;
  private scrollSpeed: number = 1;

  constructor() {
    super(); // Anropa basklassens konstruktor
    this.players = [
      new Player(createVector(128, 192), 1, "red", "green", {
        UP: UP_ARROW,
        DOWN: DOWN_ARROW,
        RIGHT: RIGHT_ARROW,
        LEFT: LEFT_ARROW,
      }),
      new Player(createVector(128, 576), 2, "blue", "orange", {
        UP: 87,
        DOWN: 83,
        RIGHT: 68,
        LEFT: 65,
      }),
    ];

    this.levelFactory = new LevelFactory();
    //initialize
    // this.entities = [
    // new Heart(),
    // new Star(), // For test to get levelfactory in place.
    // new Ghost(),
    // new Plant(), // For test to get levelfactory in place.
    // new TetrisBlock(),
    // ];

    this.entities = this.levelFactory.createEntitiesForLevel(
      this.levelFactory.level1
    );

    this.scoreManager = new ScoreManager(this.players); // Initiera ScoreManager
    this.collisionManager = new CollisionManager(
      this.players,
      this.entities,
      this.scoreManager,
<<<<<<< HEAD
<<<<<<< HEAD
      this.removeEntity.bind(this) // Pass removeEntity as callback
    ); // Skicka ScoreManager till CollisionManager
=======
      (entity) => this.removeEntity(entity) // Skicka removeEntity som callback

    );
>>>>>>> 905ed65 (add call to remove entity callback function)
=======
      (entity) => this.removeEntity(entity) // Skicka removeEntity som callback

    );
>>>>>>> cff86a216f233f9b9aef4773cd5b5b9bb04f0168
  }

  addEntity(entity: Entity): void {
    if (!(entity instanceof Heart)) {
      // Prevent adding multiple hearts
      this.entities.push(entity);
      console.log(`Entity added:`, entity); // Optional logging
    } else {
      console.log(`Heart entity not added to prevent duplicates.`);
    }
  }

  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(`Entity removed:`, entity); // Added logging
=======

    console.log("Current entities after removal:", this.entities);

>>>>>>> 629dbc6 (update the draw method for each entity to locate the entity correctly.)
=======

    console.log("Current entities after removal:", this.entities);

>>>>>>> cff86a216f233f9b9aef4773cd5b5b9bb04f0168
  }

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
    this.scoreManager.tickScore();
  }

  /**
   * Uppdaterar alla Ghost-objekt i spelet.
   */
  private flyingGhost(): void {
    for (const entity of this.entities) {
      if (entity instanceof Ghost) {
        entity.update();
      }
    }
  }

  draw(): void {
    background("#000000"); // Ange bakgrundsfärg
    push();
    translate(-this.cameraOffset, 0);

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

    pop();
    this.scoreManager.draw(); // Rita poängen för båda spelarna
  }
}
