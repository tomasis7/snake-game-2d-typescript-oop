// Level Factory
class LevelFactory {
  private gridSize: number = 32;
  private level1: number[][];
  // private level2: number[][];

  constructor() {
    // 0 = inget
    // 1 = block
    // 2 = star
    // 3 = heart
    // 4 = plant
    this.level1 = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 16 * 32
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      // 10 * 32
    ];
  }

  public createEntitiesForLevel(level: number[][]): Entity[] {
    const entities: Entity[] = [];

    // Mappning av siffror till entiteter
    const ENTITY_MAP: { [key: number]: (x: number, y: number) => Entity } = {
      2: (x, y) => new Star(),
    };

    // loopa över level och skapa alla entiteter
    for (let row = 0; row < level.length; row++) {
      for (let col = 0; col < level[row].length; col++) {
        const entityType = level[row][col];
        const x = col * this.gridSize; // Beräkna x-position
        const y = row * this.gridSize; // Beräkna y-position

        // Skapa entitet om den finns i mappningen
        if (ENTITY_MAP[entityType]) {
          entities.push(ENTITY_MAP[entityType](x, y));
        }
      }
    }

    return entities;
  }
}
