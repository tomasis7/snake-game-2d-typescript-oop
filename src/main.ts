// import { LevelFactory } from "./levelfactory";
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
};

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
};

let customFont: p5.Font;
let gridSize = levelFactory.gridSize;

function preload() {
  music = {
    backgroundMusic: loadSound("/assets/music/background-theme.mp3"),
  };

  sounds = {
    gainheart: loadSound("/assets/sounds/gain-heart.mp3"),
    lostheart: loadSound("/assets/sounds/lost-heart.mp3"),
    gameover: loadSound("/assets/sounds/game-over.mp3"),
    ghost: loadSound("/assets/sounds/ghost.mp3"),
    starPickUp: loadSound("/assets/sounds/star.mp3"),
    winner: loadSound("/assets/sounds/winner.mp3"),
    blockCollision: loadSound("/assets/sounds/error.mp3"),
    wallCollision: loadSound("/assets/sounds/shutdown-sound.mp3"),
    goalline: loadSound("/assets/sounds/goal-line.mp3"),
  };

  images = {
    star: loadImage("/assets/images/star.webp"),
    heart: loadImage("/assets/images/heart.webp"),
    ghost: loadImage("assets/images/ghost.png"),
    Plant: loadImage("/assets/images/plant.gif"),
    tetrisBlock: loadImage("/assets/images/tetrisBlock.gif"),
    wallBlock: loadImage("/assets/images/wallblock.gif"),
    WinBlock: loadImage("/assets/images/winBlock.gif"),
    background: loadImage("/assets/images/bakgrund.gif"),
  };

  customFont = loadFont("/assets/fonts/PressStart2P-Regular.ttf");
}

function setup() {
  const canvasSize = min(windowWidth, windowHeight);
  createCanvas(canvasSize, canvasSize);
  frameRate(60);
  textFont(customFont);
  game = new Game();
  music.backgroundMusic.loop();
}

function draw() {
  background(0);

  game.update();
  game.draw();

  if (showGrid) {
    drawDebugGrid();
  }
}

function drawDebugGrid(): void {
  stroke(200, 0, 0, 100);
  strokeWeight(1);

  for (let x = 0; x <= width; x += gridSize) {
    line(x, 0, x, height);
  }

  for (let y = 0; y <= height; y += gridSize) {
    line(0, y, width, y);
  }
}

function keyPressed() {
  if (key === "G" || key === "g") {
    showGrid = !showGrid;
  }
}

function windowResized() {
  const newSize = min(windowWidth, windowHeight);
  resizeCanvas(newSize, newSize);
}
