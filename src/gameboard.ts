// Game Board
class GameBoard extends GameScreen {
  size: p5.Vector;
  entities: Entity[];

  constructor(size: p5.Vector) {
    super(); // Anropa basklassens konstruktor
    this.size = size;
    this.entities = [];
  }

  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }

  removeEntity(entity: Entity): void {
    this.entities = this.entities.filter((e) => e !== entity);
  }

  update(): void {
    // Lägg till logik för att uppdatera spelet här
    console.log("Updating GameBoard");
  }

  draw(): void {
    background("white"); // Ange bakgrundsfärg
    console.log("Drawing GameBoard");
    for (const entity of this.entities) {
      entity.draw();
    }
  }
}
