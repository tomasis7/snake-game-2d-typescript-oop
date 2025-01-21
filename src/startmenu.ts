// Start Menu
class StartMenu extends GameScreen {
  startGameButton: Button;
  selectEasyMode: Button;
  selectMediumMode: Button;
  selectHardMode: Button;
  levelFactory: LevelFactory;

  constructor(button: Button) {
    super();
    this.startGameButton = button;

    this.selectEasyMode = new Button(
      "Easy",
      createVector(width / 2, height / 2 - 100),
      "#515151",
      createVector(200, 50),
      "#45FF8C",
    );

    this.selectMediumMode = new Button(
      "Medium",
      createVector(width / 2, height / 2),
      "#515151",
      createVector(200, 50),
      "#FDD03C",
    );

    this.selectHardMode = new Button(
      "Hard",
      createVector(width / 2, height / 2 + 100),
      "#515151",
      createVector(200, 50),
      "#FF5F62",
    );

    this.levelFactory = new LevelFactory();
  }

  update(): void {
    if (this.startGameButton.isClicked()) {
      game.changeScreen(new GameBoard(createVector(800, 600)));
    }

    if (this.selectEasyMode.isClicked()) {
      console.log("Easy mode selected");
    }

    if (this.selectMediumMode.isClicked()) {
      console.log("Medium mode selected");
    }

    if (this.selectHardMode.isClicked()) {
      console.log("Hard mode selected");
    }
  }

  draw(): void {
    background("black");
    fill("#45FF8C");
    textAlign(CENTER, CENTER);
    textSize(32);
    textFont(customFont);
    text("SELECT DIFFICULTY", width / 2, height / 4);

    this.startGameButton.draw();
    this.selectEasyMode.draw();
    this.selectMediumMode.draw();
    this.selectHardMode.draw();
  }

  newGame(): void {
    console.log("Starting a new game...");
    game.changeScreen(new StartMenu(this.startGameButton));
  }
}
