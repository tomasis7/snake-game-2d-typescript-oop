class GameOverScreen extends GameScreen {
  restartButton: Button;

  constructor() {
    super();
    this.restartButton = new Button(
      "Restart",
      createVector(width / 2, height / 2 + 50),
      "white",
      createVector(250, 50),
      "red"
    );
  }

  update(): void {
    // Här kan du lägga till logik om du vill uppdatera något under Game Over
    if (this.restartButton.isClicked()) {
      game.changeScreen(new GameBoard());
    }
  }

  draw(): void {
    push();

    // Draw background color
    background(50); // Example background color (dark gray)

    fill(0, 0, 0, 150); // Transparent svart bakgrund
    // Ritar bakgrunden med rätt dimensioner, så att den täcker texten
    rect(width / 2 - 175, height / 2 - 50, 350, 200, 10);
    // rect(width / 2 - 0, height / 2 - 0, 350, 200, 10);

    fill("white"); // Textfärg vit
    textSize(32);
    textAlign(CENTER, CENTER);
    // Ritar texten på exakt samma plats som bakgrunden
    text("GAME OVER", width / 2, height / 2);

    // Draw restart button
    this.restartButton.draw();

    pop();
  }
}
