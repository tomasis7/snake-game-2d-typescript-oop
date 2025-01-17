//---- GLOBAL VARIABLES ----//

let game: Game;

let images: {
  player: p5.Image;
  star: p5.Image;
  heart: p5.Image;
  ghost: p5.Image;
  carnivorusPlant: p5.Image;
  tetrisObstacle: p5.Image;
};

let music: {};
let levelFactory: LevelFactory;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  // Load assets here
  game = new Game();

  music = {
    mystery: loadSound("/assets/music/mystery.mp3"),
  };

  images = {
    player: loadImage("assets/player.png"),
    star: loadImage("assets/star.png"),
    heart: loadImage("assets/heart.png"),
    ghost: loadImage("assets/ghost.png"),
    carnivorusPlant: loadImage("assets/carnivorusPlant.png"),
    tetrisObstacle: loadImage("assets/tetrisObstacle.png"),
  };
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

  game = new Game();
  levelFactory = new LevelFactory();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  //game.draw();
  // game.update();
  background(220);
  levelFactory.draw();
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
// function keyPressed() {
//   game.keyPressed();
// }
