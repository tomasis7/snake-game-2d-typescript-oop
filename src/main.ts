import { LevelFactory } from "./levelfactory";
import { Game } from "./game";

let showGrid: boolean = false;
const levelFactory = new LevelFactory();
const base = import.meta.env.BASE_URL;

// p5 global mode: p5 detects these window functions at DOMContentLoaded
// and makes all p5 functions (createVector, width, etc.) available globally.
(window as any).preload = function () {
  (window as any).music = {
    backgroundMusic: loadSound(`${base}assets/music/background-theme.mp3`),
  };

  (window as any).sounds = {
    gainheart: loadSound(`${base}assets/sounds/gain-heart.mp3`),
    lostheart: loadSound(`${base}assets/sounds/lost-heart.mp3`),
    gameover: loadSound(`${base}assets/sounds/game-over.mp3`),
    ghost: loadSound(`${base}assets/sounds/ghost.mp3`),
    starPickUp: loadSound(`${base}assets/sounds/star.mp3`),
    winner: loadSound(`${base}assets/sounds/winner.mp3`),
    blockCollision: loadSound(`${base}assets/sounds/error.mp3`),
    wallCollision: loadSound(`${base}assets/sounds/shutdown-sound.mp3`),
    goalline: loadSound(`${base}assets/sounds/goal-line.mp3`),
  };

  (window as any).images = {
    star: loadImage(`${base}assets/images/star.webp`),
    heart: loadImage(`${base}assets/images/heart.webp`),
    ghost: loadImage(`${base}assets/images/ghost.png`),
    Plant: loadImage(`${base}assets/images/plant.gif`),
    tetrisBlock: loadImage(`${base}assets/images/tetrisBlock.gif`),
    wallBlock: loadImage(`${base}assets/images/wallblock.gif`),
    WinBlock: loadImage(`${base}assets/images/winBlock.gif`),
    background: loadImage(`${base}assets/images/bakgrund.gif`),
  };

  (window as any).customFont = loadFont(
    `${base}assets/fonts/PressStart2P-Regular.ttf`
  );
};

(window as any).setup = function () {
  const canvasSize = min(windowWidth, windowHeight);
  createCanvas(canvasSize, canvasSize);
  frameRate(60);
  textFont((window as any).customFont);
  (window as any).game = new Game();
  (window as any).music.backgroundMusic.loop();
};

(window as any).draw = function () {
  background(0);
  (window as any).game.update();
  (window as any).game.draw();
  if (showGrid) {
    drawDebugGrid();
  }
};

(window as any).keyPressed = function () {
  if (key === "G" || key === "g") {
    showGrid = !showGrid;
  }
};

(window as any).windowResized = function () {
  const newSize = min(windowWidth, windowHeight);
  resizeCanvas(newSize, newSize);
};

function drawDebugGrid(): void {
  stroke(200, 0, 0, 100);
  strokeWeight(1);
  const gridSize = levelFactory.gridSize;
  for (let x = 0; x <= width; x += gridSize) {
    line(x, 0, x, height);
  }
  for (let y = 0; y <= height; y += gridSize) {
    line(0, y, width, y);
  }
}
