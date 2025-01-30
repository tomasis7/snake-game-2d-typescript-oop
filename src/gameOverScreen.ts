/// <reference path="scoreManager.ts" />
/**
 * Visar spelskärmen för Game Over.
 */
class GameOverScreen extends GameScreen {
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
      createVector(width / 2, height / 2 + 50),
      "white",
      createVector(250, 50),
      "red"
    );
  }

  /**
   * Ritar upp Game Over-skärmen.
   */
  draw(): void {
    push();
    background(0, 0, 0, 200);

    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("WINNER" + this.winnerMessage, width / 2, height / 2 - 60);
    // Display scores from ScoreManager
    const score1 = this.scoreManager.getScore(PlayerNumber.One);
    const score2 = this.scoreManager.getScore(PlayerNumber.Two);
    text(`Player 1 Score: ${score1}`, width / 2, height / 2);
    text(`Player 2 Score: ${score2}`, width / 2, height / 2 + 40);

    this.restartButton.draw();
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
  }
}
