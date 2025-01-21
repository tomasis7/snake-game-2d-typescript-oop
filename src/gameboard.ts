/// <reference path="gamescreen.ts" />

class GameBoard extends GameScreen {
  entities: Entity[];

  constructor() {
    super(); // Anropa basklassens konstruktor
    this.entities = [
      new Heart(),
      new Star(),
      new Ghost(),
      new Plant(),
      new TetrisBlock(),
      new Player(
        createVector(100, height * 0.5),
        images.head1,
        1,
        "red",
        "green"
      ),
    ];
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
  }
}
