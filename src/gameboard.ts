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
  //justera hastigheten på scrollningen
  private scrollSpeed: number = 1.5;

  constructor(level: number[][]) {
    super(); // Anropa basklassens konstruktor
    this.players = [
      new Player(createVector(128, 192), 1, "#00FFFF", "green", {
        UP: UP_ARROW,
        DOWN: DOWN_ARROW,
        RIGHT: RIGHT_ARROW,
        LEFT: LEFT_ARROW,
      }),
      new Player(createVector(128, 576), 2, "#FF00FF", "orange", {
        UP: 87,
        DOWN: 83,
        RIGHT: 68,
        LEFT: 65,
      }),
    ];

    this.levelFactory = new LevelFactory();
    this.entities = this.levelFactory.createEntitiesForLevel(level);

    this.scoreManager = new ScoreManager(this.players); // Initiera ScoreManager
    this.collisionManager = new CollisionManager(
      this.players,
      this.entities,
      this.scoreManager,

      this.removeEntity.bind(this) // Pass removeEntity as callback
    ); // Skicka ScoreManager till CollisionManager
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
    console.log(`Entity removed:`, entity); // Added logging

    console.log("Current entities after removal:", this.entities);

    console.log("Current entities after removal:", this.entities);
  }

  public update(): void {
    this.cameraOffset += this.scrollSpeed; // Enable canvas scrolling

    for (const player of this.players) {
      player.update();
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
    background(0); // Ange bakgrundsfärg
    // Calculate how many background images we need based on canvas width plus some buffer
    const numBackgrounds = Math.ceil((width + this.cameraOffset) / 1415) + 1;
    // Draw multiple background images side by side, offset by cameraOffset
    for (let i = 0; i < numBackgrounds; i++) {
      image(images.background, i * 1415 - this.cameraOffset, 0, 1415, 800);
    }
    push();
    translate(-this.cameraOffset, 0); // Apply camera offset for scrolling

    // translate(this.cameraOffset)
    //console.log("Drawing GameBoard");
    for (const entity of this.entities) {
      entity.draw();
    }

    for (const player of this.players) {
      player.draw();
    }

    pop();
    this.scoreManager.draw(); // Rita poängen för båda spelarna
  }
}
