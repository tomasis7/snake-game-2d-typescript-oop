"use strict";
class GameBoard extends GameScreen {
    constructor(level) {
        super();
        this.cameraOffset = 0;
        this.scrollSpeed = 1.5;
        this.players = [
            new Player(createVector(128, 192), 1, "#00FFFF", "green", {
                UP: UP_ARROW,
                DOWN: DOWN_ARROW,
                RIGHT: RIGHT_ARROW,
                LEFT: LEFT_ARROW,
            }),
            new Player(createVector(128, 576), 2, "#FF00FF", "orange", {
                UP: 87,
                DOWN: 83,
                RIGHT: 68,
                LEFT: 65,
            }),
        ];
        this.levelFactory = new LevelFactory();
        this.entities = this.levelFactory.createEntitiesForLevel(level);
        this.scoreManager = new ScoreManager(this.players);
        this.collisionManager = new CollisionManager(this.players, this.entities, this.scoreManager, this.removeEntity.bind(this));
    }
    addEntity(entity) {
        if (!(entity instanceof Heart)) {
            this.entities.push(entity);
            console.log(`Entity added:`, entity);
        }
        else {
            console.log(`Heart entity not added to prevent duplicates.`);
        }
    }
    removeEntity(entity) {
        this.entities = this.entities.filter((e) => e !== entity);
        console.log(`Entity removed:`, entity);
        console.log("Current entities after removal:", this.entities);
        console.log("Current entities after removal:", this.entities);
    }
    update() {
        this.cameraOffset += this.scrollSpeed;
        for (const player of this.players) {
            player.update();
        }
        for (const entity of this.entities) {
            entity.update();
        }
        this.flyingGhost();
        this.collisionManager.checkCollision();
        this.scoreManager.tickScore();
    }
    flyingGhost() {
        for (const entity of this.entities) {
            if (entity instanceof Ghost) {
                entity.update();
            }
        }
    }
    draw() {
        background(0);
        const numBackgrounds = Math.ceil((width + this.cameraOffset) / 1415) + 1;
        for (let i = 0; i < numBackgrounds; i++) {
            image(images.background, i * 1415 - this.cameraOffset, 0, 1415, 800);
        }
        push();
        translate(-this.cameraOffset, 0);
        for (const entity of this.entities) {
            entity.draw();
        }
        for (const player of this.players) {
            player.draw();
        }
        pop();
        this.scoreManager.draw();
    }
}
//# sourceMappingURL=gameboard.js.map