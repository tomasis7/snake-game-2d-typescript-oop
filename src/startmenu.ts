// Start Menu
class StartMenu extends GameScreen {
  startGameButton: Button;
  selectEasyMode: Button;
  selectMediumMode: Button;
  selectHardMode: Button;
  interactionScreen: Button;
  levelFactory: LevelFactory;

  constructor(button: Button) {
    super();
    this.startGameButton = button;

    this.selectEasyMode = new Button(
      "Easy",
      createVector(width / 2, height / 2 - 125),
      "#515151",
      createVector(220, 50),
      "#45FF8C"
    );

    this.selectMediumMode = new Button(
      "Medium",
      createVector(width / 2, height / 2 -50),
      "#515151",
      createVector(220, 50),
      "#FDD03C"
    );

    this.selectHardMode = new Button(
      "Hard",
      createVector(width / 2, height / 2 +25),
      "#515151",
      createVector(220, 50),
      "#FF5F62"
    );

    this.interactionScreen = new Button(
      "How to play",
      createVector(width / 2, height / 2 +200),
      "#515151",
      createVector(400, 50),
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
    }

    if (this.selectMediumMode.isClicked()) {
      console.log("Medium mode selected");
    }

    if (this.selectHardMode.isClicked()) {
      console.log("Hard mode selected");
    }
    if (this.interactionScreen.isClicked()) {
      console.log("Interaction selected");
      game.changeScreen(new InteractionScreen());
    }
  }

  draw(): void {
    push();
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
    this.interactionScreen.draw();
    pop();
  }

  newGame(): void {
    console.log("Starting a new game...");
    game.changeScreen(new StartMenu(this.startGameButton));
  }
}
