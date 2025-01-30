class InteractionScreen extends GameScreen {
    returnToStartMenu: Button;
    constructor() {
        super();
        this.returnToStartMenu = new Button(
            "← Back",
            createVector(150, 75),
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
        background("black");
        
        // Title
        push();
        fill("#45FF8C");
        imageMode(CENTER);
        textAlign(CENTER, CENTER);
        textSize(32);
        textFont(customFont);
        text("HOW TO PLAY", width / 2, height / 2 -300);

        // Info about the entities
        fill("#FFFFFF");
        textSize(28);
        text("What to eat and what to avoid", width / 2, height / 2 -250);

        // Power-ups
        textSize(24);
        textAlign(LEFT, CENTER);
        fill("#45FF8C");
        text("Power-ups", width / 2 -300, height / 2 -200);
        fill("#CCCCCC");
        image(images.heart, width / 2 -330, height / 2 -160, 25, 25);
        text("= +1 Life", width / 2 -300, height / 2 -160);
        image(images.star, width / 2 -330, height / 2 -110, 25, 25);
        text("= x2 Points", width / 2 -300, height / 2 -110);

        // Obstacles / Power-downs
        textSize(24);
        textAlign(LEFT, CENTER);
        fill("#45FF8C");
        text("Obstacles", width / 2 +100, height / 2 -200);
        fill("#CCCCCC");
        image(images.Plant, width / 2 +70, height / 2 -160, 21, 40);
        text("= -2 Life", width / 2 +100, height / 2 -160);
        image(images.ghost, width / 2 +70, height / 2 -110, 35, 35);
        text("= -1 Life, -5 Points", width / 2 +100, height / 2 -110);
        image(images.tetrisBlock, width / 2 +70, height / 2 -60, 25, 25);
        text("= Game Over", width / 2 +100, height / 2 -60);
        image(images.wallBlock, width / 2 +70, height / 2 -10, 25, 25);
        text("= Game Over", width / 2 +100, height / 2 -10);
        pop();

        // Info about navigation
        push();
        textAlign(CENTER, CENTER);
        fill("#FFFFFF");
        textSize(28);
        text("Use the following keys on you keyboard\nto navigate your snake in the game", width / 2, height / 2 +80);
        
        // Players
        fill("#00FFFF");
        text("Player 1", width / 2 -200, height / 2 +160);
        fill("#FF00FF");
        text("Player 2", width / 2 +200, height / 2 +160);

        // Arrow Controls
        fill("#FFFFFF");
        textSize(28);
        text("↑", width / 2 -200, height / 2 +220);
        text("← ↓ →", width / 2 -200, height / 2 +280);
        noFill();
        strokeWeight(2);
        stroke(255);
        rectMode(CENTER);
        square(width / 2 -200, height / 2 +180, 50);
        square(width / 2 -200, height / 2 +240, 50);
        square(width / 2 -140, height / 2 +240, 50);
        square(width / 2 -260, height / 2 +240, 50);

        // WASD Controls
        fill("#FFFFFF");
        textSize(28);
        text("W", width / 2 +200, height / 2 +220);
        text("A S D", width / 2 +200, height / 2 +280);
        noFill();
        strokeWeight(2);
        stroke(255);
        rectMode(CENTER);
        square(width / 2 +200, height / 2 +180, 50);
        square(width / 2 +200, height / 2 +240, 50);
        square(width / 2 +140, height / 2 +240, 50);
        square(width / 2 +260, height / 2 +240, 50);
        
        noStroke();
        this.returnToStartMenu.draw();
        pop();
    }
}