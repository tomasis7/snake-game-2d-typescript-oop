"use strict";
class Game {
    constructor() {
        this.activeScreen = [
            new StartMenu(new Button("Start Game", createVector(width / 2, height / 2 + 125), "#515151", createVector(350, 50), "#45FF8C")),
        ];
    }
    changeScreen(newScreen) {
        this.activeScreen = [newScreen];
    }
    newGame() {
        const defaultLevel = [[1]];
        this.changeScreen(new GameBoard(defaultLevel));
    }
    update() {
        for (const screen of this.activeScreen) {
            screen.update();
        }
    }
    draw() {
        for (const screen of this.activeScreen) {
            screen.draw();
        }
    }
    end() { }
}
//# sourceMappingURL=game.js.map