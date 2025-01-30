// Start Menu
class StartMenu extends GameScreen {
  startGameButton: Button;
  selectEasyMode: Button;
  selectMediumMode: Button;
  selectHardMode: Button;
  selectedButton: Button | null = null;
  levelFactory: LevelFactory;
  selectedLevel: number[][] | null = null;

  constructor(button: Button) {
    super();
    this.startGameButton = button;

    this.selectEasyMode = new Button(
      "Easy",
      createVector(width / 2, height / 2 - 100),
      "#515151",
      createVector(200, 50),
      "#45FF8C"
    );

    this.selectMediumMode = new Button(
      "Medium",
      createVector(width / 2, height / 2),
      "#515151",
      createVector(200, 50),
      "#FDD03C"
    );

    this.selectHardMode = new Button(
      "Hard",
      createVector(width / 2, height / 2 + 100),
      "#515151",
      createVector(200, 50),
      "#FF5F62"
    );

    this.levelFactory = new LevelFactory();
  }

  update(): void {
    if (this.startGameButton.isClicked()) {
      game.changeScreen(new CountDown());
    }

    if (this.selectEasyMode.isClicked()) {
      console.log("Easy mode selected");
      this.selectedButton = this.selectEasyMode;
    }

    if (this.selectMediumMode.isClicked()) {
      console.log("Medium mode selected");
      this.selectedButton = this.selectMediumMode;
    }

    if (this.selectHardMode.isClicked()) {
      console.log("Hard mode selected");
      this.selectedButton = this.selectHardMode;
    }
  }

  draw(): void {
    background("black");
    fill("#45FF8C");
    textAlign(CENTER, CENTER);
    textSize(32);
    textFont(customFont);
    text("SELECT DIFFICULTY", width / 2, height / 4);

    // Ändra färg om knappen är vald
    this.selectEasyMode.backgroundColor =
      this.selectedButton === this.selectEasyMode ? "white" : "#515151";

    this.selectMediumMode.backgroundColor =
      this.selectedButton === this.selectMediumMode ? "white" : "#515151";

    this.selectHardMode.backgroundColor =
      this.selectedButton === this.selectHardMode ? "white" : "#515151";

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
