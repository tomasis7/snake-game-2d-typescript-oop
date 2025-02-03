import { LevelFactory } from "./levelfactory";
let showGrid: boolean = false;

const levelFactory = new LevelFactory();
(window as any).levelFactory = levelFactory;

let game: Game;
let images: {
  star: p5.Image;
  heart: p5.Image;
  ghost: p5.Image;
  Plant: p5.Image;
  tetrisBlock: p5.Image;
  wallBlock: p5.Image;
  WinBlock: p5.Image;
  background: p5.Image;
} = {} as any;
(window as any).images = images;

let music: {
  backgroundMusic: p5.SoundFile;
};

let sounds: {
  gainheart: p5.SoundFile;
  lostheart: p5.SoundFile;
  gameover: p5.SoundFile;
  ghost: p5.SoundFile;
  starPickUp: p5.SoundFile;
  winner: p5.SoundFile;
  blockCollision: p5.SoundFile;
  wallCollision: p5.SoundFile;
  goalline: p5.SoundFile;
} = {} as any;
(window as any).sounds = sounds;

let customFont: p5.Font;
let gridSize = levelFactory.gridSize;

const sketch = (p: p5) => {
  p.preload = () => {
    music = {
      backgroundMusic: p.loadSound("/assets/music/background-theme.mp3"),
    };

    sounds = {
      gainheart: p.loadSound("/assets/sounds/gain-heart.mp3"),
      lostheart: p.loadSound("/assets/sounds/lost-heart.mp3"),
      gameover: p.loadSound("/assets/sounds/game-over.mp3"),
      ghost: p.loadSound("/assets/sounds/ghost.mp3"),
      starPickUp: p.loadSound("/assets/sounds/star.mp3"),
      winner: p.loadSound("/assets/sounds/winner.mp3"),
      blockCollision: p.loadSound("/assets/sounds/error.mp3"),
      wallCollision: p.loadSound("/assets/sounds/shutdown-sound.mp3"),
      goalline: p.loadSound("/assets/sounds/goal-line.mp3"),
    };

    images = {
      star: p.loadImage("/assets/images/star.webp"),
      heart: p.loadImage("/assets/images/heart.webp"),
      ghost: p.loadImage("assets/images/ghost.png"),
      Plant: p.loadImage("/assets/images/plant.gif"),
      tetrisBlock: p.loadImage("/assets/images/tetrisBlock.gif"),
      wallBlock: p.loadImage("/assets/images/wallblock.gif"),
      WinBlock: p.loadImage("/assets/images/winBlock.gif"),
      background: p.loadImage("/assets/images/bakgrund.gif"),
    };

    customFont = p.loadFont("/assets/fonts/PressStart2P-Regular.ttf");
  };

  p.setup = () => {
    const canvasSize = p.min(p.windowWidth, p.windowHeight);
    p.createCanvas(canvasSize, canvasSize);
    p.frameRate(60);
    p.textFont(customFont);
    game = new Game();
    music.backgroundMusic.loop();
  };

  p.draw = () => {
    p.background(0);

    game.update();
    game.draw();

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
