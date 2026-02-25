import { LevelFactory } from "./levelfactory";
import { Game } from "./game";

let showGrid: boolean = false;

const levelFactory = new LevelFactory();
(window as any).levelFactory = levelFactory;

let gridSize = levelFactory.gridSize;

const base = import.meta.env.BASE_URL;

const sketch = (p: p5) => {
  p.preload = () => {
    (window as any).music = {
      backgroundMusic: p.loadSound(`${base}assets/music/background-theme.mp3`),
    };

    (window as any).sounds = {
      gainheart: p.loadSound(`${base}assets/sounds/gain-heart.mp3`),
      lostheart: p.loadSound(`${base}assets/sounds/lost-heart.mp3`),
      gameover: p.loadSound(`${base}assets/sounds/game-over.mp3`),
      ghost: p.loadSound(`${base}assets/sounds/ghost.mp3`),
      starPickUp: p.loadSound(`${base}assets/sounds/star.mp3`),
      winner: p.loadSound(`${base}assets/sounds/winner.mp3`),
      blockCollision: p.loadSound(`${base}assets/sounds/error.mp3`),
      wallCollision: p.loadSound(`${base}assets/sounds/shutdown-sound.mp3`),
      goalline: p.loadSound(`${base}assets/sounds/goal-line.mp3`),
    };

    (window as any).images = {
      star: p.loadImage(`${base}assets/images/star.webp`),
      heart: p.loadImage(`${base}assets/images/heart.webp`),
      ghost: p.loadImage(`${base}assets/images/ghost.png`),
      Plant: p.loadImage(`${base}assets/images/plant.gif`),
      tetrisBlock: p.loadImage(`${base}assets/images/tetrisBlock.gif`),
      wallBlock: p.loadImage(`${base}assets/images/wallblock.gif`),
      WinBlock: p.loadImage(`${base}assets/images/winBlock.gif`),
      background: p.loadImage(`${base}assets/images/bakgrund.gif`),
    };

    (window as any).customFont = p.loadFont(
      `${base}assets/fonts/PressStart2P-Regular.ttf`
    );
  };

  p.setup = () => {
    const canvasSize = p.min(p.windowWidth, p.windowHeight);
    p.createCanvas(canvasSize, canvasSize);
    p.frameRate(60);
    p.textFont((window as any).customFont);
    const gameInstance = new Game();
    (window as any).game = gameInstance;
    (window as any).music.backgroundMusic.loop();
  };

  p.draw = () => {
    p.background(0);

    (window as any).game.update();
    (window as any).game.draw();

    if (showGrid) {
      drawDebugGrid(p);
    }
  };

  p.keyPressed = () => {
    if (p.key === "G" || p.key === "g") {
      showGrid = !showGrid;
    }
  };

  p.windowResized = () => {
    const newSize = p.min(p.windowWidth, p.windowHeight);
    p.resizeCanvas(newSize, newSize);
  };
};

new p5(sketch);

function drawDebugGrid(p: p5): void {
  p.stroke(200, 0, 0, 100);
  p.strokeWeight(1);

  for (let x = 0; x <= p.width; x += gridSize) {
    p.line(x, 0, x, p.height);
  }

  for (let y = 0; y <= p.height; y += gridSize) {
    p.line(0, y, p.width, y);
  }
}
