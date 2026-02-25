import { GameScreen } from "./gamescreen";
import { GameBoard } from "./gameboard";

export class CountDown extends GameScreen {
  private countdownValue: number;
  private lastUpdateTime: number;
  private readonly countdownDuration: number = 3;
  private isComplete: boolean;
  private callback: () => void;
  private level: number[][];

  constructor(level: number[][], callback: () => void) {
    super();
    this.countdownValue = this.countdownDuration;
    this.lastUpdateTime = Date.now();
    this.isComplete = false;
    this.callback = callback;
    this.level = level;
  }

  update(): void {
    const currentTime = Date.now();
    const deltaTime = (currentTime - this.lastUpdateTime) / 1000;

    if (this.countdownValue > 0) {
      this.countdownValue -= deltaTime;
      if (this.countdownValue <= 0) {
        this.countdownValue = 0;
        this.isComplete = true;
        this.callback();

        game.changeScreen(new GameBoard(this.level));
      }
    }
    this.lastUpdateTime = currentTime;
  }

  draw(): void {
    push();
    background("black");
    fill("#45FF8C");
    textSize(32);
    textAlign(CENTER, CENTER);
    textFont(customFont);
    text("GET READY", width / 2, height / 4);

    fill("#FFFFFF");
    textSize(84);

    const displayNumber = Math.ceil(this.countdownValue);
    if (displayNumber > 0) {
      text(displayNumber.toString(), width / 2, height / 3);
    }
    pop();
  }

  isCountdownComplete(): boolean {
    return this.isComplete;
  }
}
