class GameOverScreen extends GameScreen {
  constructor() {
    super();
  }

  update(): void {
    // Här kan du lägga till logik om du vill uppdatera något under Game Over
  }
  draw(): void {
    push();

    // Draw background color
    background(50); // Example background color (dark gray)

    fill(0, 0, 0, 150); // Transparent svart bakgrund
    // Ritar bakgrunden med rätt dimensioner, så att den täcker texten
    rect(width / 2 - 0, height / 2 - 0, 300, 200, 10);

    fill("white"); // Textfärg vit
    textSize(32);
    textAlign(CENTER, CENTER);
    // Ritar texten på exakt samma plats som bakgrunden
    text("GAME OVER", width / 2, height / 2);
    pop();
  }
}
