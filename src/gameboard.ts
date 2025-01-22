/// <reference path="gamescreen.ts" />

class GameBoard extends GameScreen {
  entities: Entity[];
  players: Player[];
  collisionManager: CollisionManager;

  constructor() {
    super(); // Anropa basklassens konstruktor
    this.entities = [
      new Heart(),
      new Star(),
      new Ghost(),
      new Plant(),
      new TetrisBlock(),
    ];
    this.players = [
      new Player(createVector(100, height * 0.5), 1, "red", "green", {
        UP: UP_ARROW,
        DOWN: DOWN_ARROW,
        RIGHT: RIGHT_ARROW,
        LEFT: LEFT_ARROW,
      }),
      new Player(createVector(100, height * 0.4), 2, "blue", "orange", {
        UP: 87,
        DOWN: 83,
        RIGHT: 68,
        LEFT: 65,
      }),
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
    for (const entity of this.entities) {
      entity.update();
    }
    for (const player of this.players) {
      player.update();

      this.collisionManager.checkCollision(player, this);
    }

    this.flyingGhost();
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
    console.log("Drawing GameBoard");
    for (const entity of this.entities) {
      entity.draw();
    }
    for (const player of this.players) {
      player.draw();
    }
  }
}
