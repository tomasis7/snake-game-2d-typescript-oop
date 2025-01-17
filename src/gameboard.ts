/// <reference path="gamescreen.ts" />

class GameBoard extends GameScreen {
  entities: Entity[];

  constructor() {
    super(); // Anropa basklassens konstruktor
    this.entities = [new Star()];
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
