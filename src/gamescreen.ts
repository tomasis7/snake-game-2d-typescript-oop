// Screen Base Class
abstract class GameScreen {
  constructor() {}
  abstract update(): void;
  abstract draw(): void;
}

// Main Game Class
class Game {
  private activeScreen: GameScreen[];
  private startButton: Button;

  constructor() {
    this.startButton = new Button(
      "Start Game",
      createVector(width / 2, height / 2),
      "blue",
      createVector(200, 50),
      "white",
    );

    this.activeScreen = [new StartMenu(this.startButton)];
  }

  public changeScreen(screen: GameScreen): void {
    this.activeScreen = [screen];
  }

  public draw(): void {
    for (const screen of this.activeScreen) {
      screen.update();
      screen.draw();
    }
  }
}
