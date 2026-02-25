// Screen Base Class
export abstract class GameScreen {
  constructor() {}
  abstract update(): void;
  abstract draw(): void;
}
