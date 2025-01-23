//---- GLOBAL VARIABLES ----//

let game: Game;

let images: {
  head1: p5.Image;
  trail1: p5.Image;
  head2: p5.Image;
  trail2: p5.Image;
  star: p5.Image;
  heart: p5.Image;
  ghost: p5.Image;
  Plant: p5.Image;
  tetrisZ: p5.Image;
  tetrisCube: p5.Image;
  // tetrisJ: p5.Image;
  // tetrisT: p5.Image;
  // tetrisHero: p5.Image;
};

let music: {
  mystery: p5.SoundFile;
  background: p5.SoundFile;
  gainheart: p5.SoundFile;
  lostheart: p5.SoundFile;
  gameover: p5.SoundFile;
  ghost: p5.SoundFile;
  starCollision: p5.SoundFile;
  winner: p5.SoundFile;
  tetrisCollision: p5.SoundFile;
};

let customFont: p5.Font;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // Load assets here
  music = {
    mystery: loadSound("/assets/music/mystery.mp3"),
    background: loadSound(
      "/assets/music/mario-walking-through-dream-sequence.mp3"
    ),
    gainheart: loadSound("/assets/music/gain-heart.mp3"),
    lostheart: loadSound("/assets/music/lost-heart.mp3"),
    gameover: loadSound("/assets/music/game-over.mp3"),
    ghost: loadSound("/assets/music/ghost.mp3"),
    starCollision: loadSound("/assets/music/star.mp3"),
    winner: loadSound("/assets/music/winner.mp3"),
    tetrisCollision: loadSound("/assets/sounds/error.mp3"),
  };

  images = {
    head1: loadImage("/assets/images/snake-head-blue.png"),
    trail1: loadImage("/assets/images/snake-trail-blue.png"),
    head2: loadImage("/assets/images/snake-head-pink.png"),
    trail2: loadImage("/assets/images/snake-trail-pink.png"),
    star: loadImage("/assets/images/star.webp"),
    heart: loadImage("/assets/images/heart.webp"),
    ghost: loadImage("assets/images/ghost.png"),
    Plant: loadImage("/assets/images/plant.gif"),
    tetrisZ: loadImage("/assets/images/tetrisZ.png"),
    tetrisCube: loadImage("/assets/images/tetrisCube.webp"),
    // tetrisJ: loadImage("/assets/images/tetris.png"),
    // tetrisT: loadImage("/assets/images/tetris.png"),
    // tetrisHero: loadImage("/assets/images/tetris.png"),
    
  };

  customFont = loadFont("/assets/fonts/PressStart2P-Regular.ttf");
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  textFont(customFont);
  game = new Game();
  
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/**
 * Built in keyPressed listener function in P5
 */
