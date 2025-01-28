/// <reference path="gamescreen.ts" />
class CountDown extends GameScreen {
  private countdownValue: number;
  private lastUpdateTime: number;
  private readonly countdownDuration: number = 3; // X second countdown until game starts
  private isComplete: boolean;

  constructor() {
    super();
    this.countdownValue = this.countdownDuration;
    this.lastUpdateTime = Date.now();
    this.isComplete = false;
  }

  update(): void {
    const currentTime = Date.now();
    const deltaTime = (currentTime - this.lastUpdateTime) / 1000; // Convert to seconds

    if (this.countdownValue > 0) {
      this.countdownValue -= deltaTime;
      if (this.countdownValue <= 0) {
        this.countdownValue = 0;
        this.isComplete = true;

        // When countdownValue is zero create new GameBoard
        game.changeScreen(new GameBoard());
      }
    }
    this.lastUpdateTime = currentTime;
  }

  draw(): void {
    push();
    background("black");
    fill("#45FF8C"); // Green text
    textSize(32); // Size for title
    textAlign(CENTER, CENTER);
    textFont(customFont);
    text("GET READY", width / 2, height / 4);

    // Show countdown
    fill("#FFFFFF"); // White text
    textSize(84); // Size for title

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
