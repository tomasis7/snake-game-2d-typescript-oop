//---- GLOBAL VARIABLES ----//

/**
 * TODO: Lägg till JSDoc för setup- och draw-funktioner i denna huvudskiss.
 */

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

const levelFactory = new LevelFactory();
const gridSize = levelFactory.gridSize; // Access gridSize directly since it's now public

let showGrid: boolean = false; // Toggle for grid visibility

/**
 * Förladdar ljud och bilder.
 */
function preload() {
  // Load assets here
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

/**
 * Inställningar för canvas, bildfrekvens och spelobjekt.
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  const canvasWidth = 1600; // Set canvas width
  const canvasHeight = 800; // Set canvas height
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);
  textFont(customFont);
  game = new Game();

  music.backgroundMusic.loop();
}

/**
 * Uppdaterar och ritar huvudskärmen i spelet.
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  background(0);

  game.update();
  game.draw();

  if (showGrid) {
    drawDebugGrid();
  }
}

/**
 * Built in keyPressed listener function in P5
 */

// Function to draw the debug grid
function drawDebugGrid(): void {
  stroke(200, 0, 0, 100); // Red color with transparency
  strokeWeight(1);

  // Draw vertical lines
  for (let x = 0; x <= width; x += gridSize) {
    line(x, 0, x, height);
  }

  // Draw horizontal lines
  for (let y = 0; y <= height; y += gridSize) {
    line(0, y, width, y);
  }
}

// Optional: Toggle grid visibility with the 'G' key
function keyPressed() {
  if (key === "G" || key === "g") {
    showGrid = !showGrid;
  }
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  const newSize = min(windowWidth, windowHeight); // Choose the smaller dimension to maintain a square
  resizeCanvas(newSize, newSize);
}
