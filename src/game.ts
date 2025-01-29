// Main Game Class
class Game {
  private activeScreen: GameScreen[];

  constructor() {
    this.activeScreen = [
      new StartMenu(
        new Button(
          "Start Game",
          createVector(width / 2, height / 2 +125), // button position
          "#515151", // button background color
          createVector(350, 50), // button size
          "#45FF8C" // button text color
        )
      ),
    ];
  }
  changeScreen(newScreen: GameScreen): void {
    this.activeScreen = [newScreen];
  }

  newGame(): void {
    // Logic to start a new game
    this.changeScreen(new GameBoard());
  }

  public update(): void {
    for (const screen of this.activeScreen) {
      screen.update();
    }
  }

  draw(): void {
    // Draw the current active screen
    for (const screen of this.activeScreen) {
      screen.draw();
    }
  }

  /**
   * Avslutar spelet.
   */
  end(): void {}
}
