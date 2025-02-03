"use strict";
class StartMenu extends GameScreen {
    constructor(button) {
        super();
        this.selectedButton = null;
        this.selectedDifficulty = null;
        this.startGameButton = button;
        this.selectEasyMode = new Button("Easy", createVector(width / 2, height / 2 - 125), "#515151", createVector(220, 50), "#45FF8C");
        this.selectMediumMode = new Button("Medium", createVector(width / 2, height / 2 - 50), "#515151", createVector(220, 50), "#FDD03C");
        this.selectHardMode = new Button("Hard", createVector(width / 2, height / 2 + 25), "#515151", createVector(220, 50), "#FF5F62");
        this.interactionScreen = new Button("How to play", createVector(width / 2, height - 100), "#515151", createVector(380, 50), "#FFFFFF");
        this.levelFactory = new LevelFactory();
    }
    update() {
        if (this.startGameButton.isClicked()) {
            let selectedLevel;
            switch (this.selectedDifficulty || "easy") {
                case "easy":
                    selectedLevel = this.levelFactory.level1;
                    break;
                case "medium":
                    selectedLevel = this.levelFactory.level2;
                    break;
                case "hard":
                    selectedLevel = this.levelFactory.level3;
                    break;
                default:
                    selectedLevel = this.levelFactory.level1;
            }
            userStartAudio();
            if (!music.backgroundMusic.isPlaying()) {
                music.backgroundMusic.loop();
            }
            game.changeScreen(new CountDown(selectedLevel, () => {
                game.changeScreen(new GameBoard(selectedLevel));
            }));
        }
        if (this.selectEasyMode.isClicked()) {
            console.log("Easy mode selected");
            this.selectedButton = this.selectEasyMode;
            this.selectedDifficulty = "easy";
        }
        if (this.selectMediumMode.isClicked()) {
            console.log("Medium mode selected");
            this.selectedButton = this.selectMediumMode;
            this.selectedDifficulty = "medium";
        }
        if (this.selectHardMode.isClicked()) {
            console.log("Hard mode selected");
            this.selectedButton = this.selectHardMode;
            this.selectedDifficulty = "hard";
        }
        if (this.interactionScreen.isClicked()) {
            console.log("Interaction selected");
            game.changeScreen(new InteractionScreen());
        }
    }
    draw() {
        background("black");
        push();
        fill("#45FF8C");
        textAlign(CENTER, CENTER);
        textFont(customFont);
        textSize(42);
        text("Furious Snake", width / 2, height / 4 - 100);
        this.selectEasyMode.backgroundColor =
            this.selectedButton === this.selectEasyMode ? "white" : "#515151";
        this.selectMediumMode.backgroundColor =
            this.selectedButton === this.selectMediumMode ? "white" : "#515151";
        this.selectHardMode.backgroundColor =
            this.selectedButton === this.selectHardMode ? "white" : "#515151";
        fill("#45FF8C");
        textSize(32);
        text("SELECT DIFFICULTY", width / 2, height / 4);
        this.startGameButton.draw();
        this.selectEasyMode.draw();
        this.selectMediumMode.draw();
        this.selectHardMode.draw();
        this.interactionScreen.draw();
        pop();
    }
    newGame() {
        console.log("Starting a new game...");
        game.changeScreen(new StartMenu(this.startGameButton));
    }
}
//# sourceMappingURL=startmenu.js.map