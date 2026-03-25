import { GameScreen } from "./gamescreen";
import { Button } from "./button";
import { ScoreManager } from "./scoreManager";
import { Game } from "./game";

export class GameOverScreen extends GameScreen {
  menyButton: Button;
  winnerMessage: string;
  private scoreManager: ScoreManager;

  constructor(winnerMessage: string, scoreManager: ScoreManager) {
    super();
    this.winnerMessage = winnerMessage;
    this.scoreManager = scoreManager;

    this.menyButton = new Button(
      "Meny",
      createVector(width / 2, height / 2 + 220),
      "#515151",
      createVector(250, 50),
      "#45FF8C"
    );
  }

  draw(): void {
    push();
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("WINNER" + this.winnerMessage, width / 2, height / 2 - 60);

    const score1 = this.scoreManager.getScore(1);
    const score2 = this.scoreManager.getScore(2);
    textSize(24);
    text(`Player 1 Score: ${score1}`, width / 2, height / 2 + 20);
    text(`Player 2 Score: ${score2}`, width / 2, height / 2 + 60);

    this.menyButton.draw();
    pop();
  }

  update(): void {
    if (this.menyButton.isClicked()) {
      game.changeScreen(new Game());
    }
  }
}
