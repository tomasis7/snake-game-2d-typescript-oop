import { GameScreen } from "./gamescreen";
import { StartMenu } from "./startmenu";
import { Button } from "./button";
import { GameBoard } from "./gameboard";

export class Game {
  private activeScreen: GameScreen[];

  constructor() {
    this.activeScreen = [
      new StartMenu(
        new Button(
          "Start Game",
          createVector(width / 2, height / 2 + 125),
          "#515151",
          createVector(350, 50),
          "#45FF8C"
        )
      ),
    ];
  }

  changeScreen(newScreen: GameScreen): void {
    this.activeScreen = [newScreen];
  }

  newGame(): void {
    const defaultLevel: number[][] = [[1]];
    this.changeScreen(new GameBoard(defaultLevel));
  }

  public update(): void {
    for (const screen of this.activeScreen) {
      screen.update();
    }
  }

  draw(): void {
    for (const screen of this.activeScreen) {
      screen.draw();
    }
  }

  end(): void {}
}
