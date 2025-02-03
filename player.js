"use strict";
class Player extends Entity {
    getPlayerNumber() {
        return this.playerNumber;
    }
    constructor(position, playerNumber, trailFillColor, trailStrokeColor, keyBindings) {
        const size = createVector(32, 32);
        position.x = position.x + 16;
        position.y = position.y + 16;
        super(position, size, 0, 0, createVector(0, 500), undefined);
        this.isColliding = false;
        this.trail = [
            createVector(this.position.x - size.x, this.position.y),
            createVector(this.position.x - size.x * 2, this.position.y),
            createVector(this.position.x - size.x * 3, this.position.y),
            createVector(this.position.x - size.x * 4, this.position.y),
            createVector(this.position.x - size.x * 5, this.position.y),
            createVector(this.position.x - size.x * 6, this.position.y),
            createVector(this.position.x - size.x * 7, this.position.y),
            createVector(this.position.x - size.x * 8, this.position.y),
        ];
        this.playerNumber = playerNumber;
        this.trailFillColor = trailFillColor;
        this.trailStrokeColor = trailStrokeColor;
        this.moveTimer = 0;
        this.direction = createVector(32, 0);
        this.nextDirection = this.direction.copy();
        this.keyBindings = keyBindings;
        this.isMoving = true;
        this.lives = 3;
        this.maxLives = 10;
        this.lastCollisionTime = 0;
        this.collisionCooldown = 1000;
        this.scoreMultiplier = 1;
        this.canPassThroughObstacles = false;
    }
    handleInput() {
        if (keyIsDown(this.keyBindings.UP) && this.direction.y === 0) {
            this.nextDirection = createVector(0, -32);
        }
        else if (keyIsDown(this.keyBindings.DOWN) && this.direction.y === 0) {
            this.nextDirection = createVector(0, 32);
        }
        else if (keyIsDown(this.keyBindings.LEFT) && this.direction.x === 0) {
            this.nextDirection = createVector(-32, 0);
        }
        else if (keyIsDown(this.keyBindings.RIGHT) && this.direction.x === 0) {
            this.nextDirection = createVector(32, 0);
        }
    }
    update() {
        if (!this.isMoving) {
            return;
        }
        this.moveTimer += deltaTime;
        if (this.moveTimer >= 200) {
            this.moveTimer = -100;
            this.direction = this.nextDirection.copy();
            const head = this.trail[0];
            const newHead = createVector(head.x + this.direction.x, head.y + this.direction.y);
            this.trail.unshift(newHead);
            this.trail.pop();
        }
        this.handleInput();
    }
    draw() {
        push();
        strokeWeight(0);
        for (let i = 0; i < this.trail.length; i++) {
            const position = this.trail[i];
            let diameter = Math.max(this.size.x, this.size.y);
            drawingContext.shadowBlur = 15;
            drawingContext.shadowColor = "rgba(0, 0, 0, 0.3)";
            drawingContext.shadowOffsetX = 5;
            drawingContext.shadowOffsetY = 5;
            let ctx = drawingContext;
            let gradient = ctx.createRadialGradient(position.x - diameter * 0.3, position.y - diameter * 0.3, diameter * 0.1, position.x, position.y, diameter * 0.8);
            if (i === 0) {
                gradient.addColorStop(0, "#FFE5CC");
                gradient.addColorStop(0.3, "#FFA500");
                gradient.addColorStop(1, "#804600");
            }
            else {
                gradient.addColorStop(0, lerpColor(color(this.trailFillColor), color("#ffffff"), 0.2).toString());
                gradient.addColorStop(0.3, this.trailFillColor);
                gradient.addColorStop(1, lerpColor(color(this.trailStrokeColor), color(0), 0.7).toString());
            }
            ctx.fillStyle = gradient;
            noStroke();
            ellipse(position.x, position.y, diameter, diameter);
            drawingContext.shadowBlur = 0;
            drawingContext.shadowOffsetX = 0;
            drawingContext.shadowOffsetY = 0;
        }
        pop();
    }
    addScore(points) {
        const totalPoints = points * this.scoreMultiplier;
        console.log(`Player ${this.playerNumber} gained ${totalPoints} points!`);
    }
    enableObstaclePassing(duration) {
        this.canPassThroughObstacles = true;
        console.log(`Player ${this.playerNumber} can now pass through obstacles`);
        setTimeout(() => {
            this.canPassThroughObstacles = false;
            console.log(`Player ${this.playerNumber} can no longer pass through obstacles`);
        }, duration);
    }
    doubleLives() {
        this.lives = Math.min(this.lives * 2, this.maxLives);
        console.log(`Player ${this.playerNumber} now has ${this.lives} lives.`);
    }
}
//# sourceMappingURL=player.js.map