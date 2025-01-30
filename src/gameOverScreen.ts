/// <reference path="scoreManager.ts" />
/// <reference path="player.ts" />
/**
 * Visar spelskärmen för Game Over.
 */
class GameOverScreen extends GameScreen {
  menyButton: Button;
  restartButton: Button;
  winnerMessage: string;
  // Add a reference to ScoreManager
  private scoreManager: ScoreManager;

  /**
   * Skapar en ny GameOverScreen med ett vinnarmeddelande.
   * @param {string} winnerMessage - Meddelande om vem som vann.
   * @param {ScoreManager} scoreManager - Instans av ScoreManager.
   */
  constructor(winnerMessage: string, scoreManager: ScoreManager) {
    super();
    this.winnerMessage = winnerMessage;
    this.scoreManager = scoreManager;
    this.restartButton = new Button(
      "Restart",
      createVector(width / 2, height / 2 + 150),
      "white",
      createVector(250, 50),
      "red"
    );
    this.menyButton = new Button(
      "Meny",
      createVector(width / 2, height / 2 + 220),
      "#515151",
      createVector(250, 50),
      "#45FF8C"
    );
  }

  /**
   * Ritar upp Game Over-skärmen.
   */
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

    this.restartButton.draw();
    this.menyButton.draw();
    pop();
  }

  /**
   * Uppdaterar Game Over-skärmen och hanterar klick på knappar.
   */
  update(): void {
    // Här kan du lägga till logik om du vill uppdatera något under Game Over
    if (this.restartButton.isClicked()) {
      game.changeScreen(new CountDown());
    }
    if (this.menyButton.isClicked()) {
      game.changeScreen(new Game());
    }
  }
}
