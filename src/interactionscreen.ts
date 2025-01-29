class InteractionScreen extends GameScreen {
    returnToStartMenu: Button;
    constructor() {
        super();
        this.returnToStartMenu = new Button(
            "Return",
            createVector(width / 2, height -250),
            "#515151",
            createVector(200, 50),
            "#FFFFFF"
        );
    }

    update(): void {
        if(this.returnToStartMenu.isClicked()) {
            game.changeScreen(new Game());
        }
    }

    draw(): void {
        push()
        background("black");

        // Title
        fill("#45FF8C");
        textAlign(CENTER, CENTER);
        textSize(32);
        textFont(customFont);
        text("HOW TO PLAY", width / 2, height / 4);
        
        // Info and players
        fill("#FFFFFF");
        textSize(24);
        text("Use the following keys on you keyboard", width / 2, height / 3);

        text("Player 1", width / 2 -200, height / 2 -50);
        text("Player 2", width / 2 +200, height / 2 -50);

        // Arrow Controls
        textSize(32);
        text("↑", width / 2 -200, height / 2);
        text("← ↓ →", width / 2 -200, height / 2 +50);

        // WASD Controls
        textSize(30);
        text("W", width / 2 +200, height / 2);
        text("A S D", width / 2 +200, height / 2 +50);
        noFill();
        strokeWeight(2);
        stroke(255);
        rectMode(CENTER);
        square(width / 2 +200, height / 2, 50);
        square(width / 2 +200, height / 2 +50, 50);
        square(width / 2 +140, height / 2 +50, 50);
        square(width / 2 +260, height / 2 +50, 50);
        
        noStroke();
        this.returnToStartMenu.draw();
        pop();
    }
}