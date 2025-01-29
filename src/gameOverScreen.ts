/**
 * Visar spelskärmen för Game Over.
 */
class GameOverScreen extends GameScreen {
  restartButton: Button;
  winnerMessage: string;

  /**
   * Skapar en ny GameOverScreen med ett vinnarmeddelande.
   * @param {string} winnerMessage - Meddelande om vem som vann.
   */
  constructor(winnerMessage: string) {
    super();
    this.winnerMessage = winnerMessage;
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
    // background(50);

    const rectWidth = width * 0.66;
    const rectHeight = height * 0.66;
    const x = (width - rectWidth) / 2;
    const y = (height - rectHeight) / 2;

    fill(0, 0, 0, 20);
    rect(x, y, rectWidth, rectHeight);

    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2 - 20);

    textSize(24);
    text(this.winnerMessage, width / 2, height / 2 + 120);

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
