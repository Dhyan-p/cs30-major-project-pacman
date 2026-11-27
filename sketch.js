// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let maze;

// Character Assets Objects
// For all the assets keep this in mind: when you see numsFrame it is the base number of images in a spike sheet and when you see something added to numsFrame that refers to the specific image for example; numsFrameDeathNError in pacmanAssets refer to death and error image frames not the other images and the numsFrame in pacmanAssets refer to all other image that has been left.
// Pickups Assets
let pickups = {
  cherry: null,
  pacpill: null,
  powerpill: null,
};

// Eye Assets
let eyeAssets = {
  down: null,
  left: null,
  right: null,
  up: null,
  numsFrame: 2,
};

// Scared Assets
let scaredAssets = {
  blue: null,
  white: null,
  numsFrame: 2,
};

// Pac-Man Assets
let pacmanAssets = {
  arrowDown: null,
  arrowLeft: null,
  arrowRight: null,
  arrowUp: null,
  death: null,
  down: null,
  error: null,
  left: null,
  right: null,
  up: null,
  numsFrameDeathNError: 11,
  numsFrame: 4,
};

// Ghosts
// Blinky Assets
let blinkyAssets = {
  downAngry: null,
  downAnnoyed: null,
  down: null,
  leftAngry: null,
  leftAnnoyed: null,
  left: null,
  rightAngry: null,
  rightAnnoyed: null,
  right: null,
  upAngry: null,
  upAnnoyed: null,
  up: null,
  numsFrame: 2,
};

// Clyde Assets
let clydeAssets = {
  down: null,
  left: null,
  right: null,
  up: null,
  numsFrame: 2,
};

// Inky Assets
let inkyAssets = {
  down: null,
  left: null,
  right: null,
  up: null,
  numsFrame: 2,
};

// Pinky Assets
let pinkyAssets = {
  down: null,
  left: null,
  right: null,
  up: null,
  numsFrame: 2,
};

// Preload Images
async function preLoadImages() {
  pickups.cherry = await loadImage("assets/pickups/cherry.png");
  pickups.pacpill = await loadImage("assets/pickups/pacpill.png");
  pickups.powerpill = await loadImage("assets/pickups/powerpill.png");

  eyeAssets.down = await loadImage("assets/character/ghosts/eyes_down.png");
  eyeAssets.left = await loadImage("assets/character/ghosts/eyes_left.png");
  eyeAssets.right = await loadImage("assets/character/ghosts/eyes_right.png");
  eyeAssets.up = await loadImage("assets/character/ghosts/eyes_up.png");

  scaredAssets.blue = await loadImage("assets/character/ghosts/scared_blue.png");
  scaredAssets.white = await loadImage("assets/character/ghosts/scared_white.png");

  // Character
  pacmanAssets.arrowDown = await loadImage("assets/character/pac-man/arrow_down.png");
  pacmanAssets.arrowLeft = await loadImage("assets/character/pac-man/arrow_left.png");
  pacmanAssets.arrowRight = await loadImage("assets/character/pac-man/arrow_right.png");
  pacmanAssets.arrowUp = await loadImage("assets/character/pac-man/arrow_up.png");
  pacmanAssets.death = await loadImage("assets/character/pac-man/pacman_death.png");
  pacmanAssets.down = await loadImage("assets/character/pac-man/pacman_down.png");
  pacmanAssets.error = await loadImage("assets/character/pac-man/pacman_error.png");
  pacmanAssets.left = await loadImage("assets/character/pac-man/pacman_left.png");
  pacmanAssets.right = await loadImage("assets/character/pac-man/pacman_right.png");
  pacmanAssets.up = await loadImage("assets/character/pac-man/pacman_up.png");

  // Ghosts
  // Blinky
  blinkyAssets.downAngry = await loadImage("assets/character/ghosts/blinky/blinky_down_angry.png");
  blinkyAssets.downAnnoyed = await loadImage("assets/character/ghosts/blinky/blinky_down_annoyed.png");
  blinkyAssets.down = await loadImage("assets/character/ghosts/blinky/blinky_down.png");
  blinkyAssets.leftAngry = await loadImage("assets/character/ghosts/blinky/blinky_left_angry.png");
  blinkyAssets.leftAnnoyed = await loadImage("assets/character/ghosts/blinky/blinky_left_annoyed.png");
  blinkyAssets.left = await loadImage("assets/character/ghosts/blinky/blinky_left.png");
  blinkyAssets.rightAngry = await loadImage("assets/character/ghosts/blinky/blinky_right_angry.png");
  blinkyAssets.rightAnnoyed = await loadImage("assets/character/ghosts/blinky/blinky_right_annoyed.png");
  blinkyAssets.right = await loadImage("assets/character/ghosts/blinky/blinky_right.png");
  blinkyAssets.upAngry = await loadImage("assets/character/ghosts/blinky/blinky_up_angry.png");
  blinkyAssets.upAnnoyed = await loadImage("assets/character/ghosts/blinky/blinky_up_annoyed.png");
  blinkyAssets.up = await loadImage("assets/character/ghosts/blinky/blinky_up.png");

  // Clyde
  clydeAssets.down = await loadImage("assets/character/ghosts/clyde/clyde_down.png");
  clydeAssets.left = await loadImage("assets/character/ghosts/clyde/clyde_left.png");
  clydeAssets.right = await loadImage("assets/character/ghosts/clyde/clyde_right.png");
  clydeAssets.up = await loadImage("assets/character/ghosts/clyde/clyde_up.png");

  // Inky
  inkyAssets.down = await loadImage("assets/character/ghosts/inky/inky_down.png");
  inkyAssets.left = await loadImage("assets/character/ghosts/inky/inky_left.png");
  inkyAssets.right = await loadImage("assets/character/ghosts/inky/inky_right.png");
  inkyAssets.up = await loadImage("assets/character/ghosts/inky/inky_up.png");

  // Pinky
  pinkyAssets.down = await loadImage("assets/character/ghosts/pinky/pinky_down.png");
  pinkyAssets.left = await loadImage("assets/character/ghosts/pinky/pinky_left.png");
  pinkyAssets.right = await loadImage("assets/character/ghosts/pinky/pinky_right.png");
  pinkyAssets.up = await loadImage("assets/character/ghosts/pinky/pinky_up.png");
}

async function setup() {
  await preLoadImages();
  maze = new MazeGrid();
  let dimensions = maze.calculateDimensions();
  let canvas = createCanvas(dimensions.width, dimensions.height);
  canvas.parent('canvas-container');
}

function draw() {
  background("black");
  maze.drawWalls();
  maze.drawPills();
}

function windowResized() {
  let dimensions = maze.calculateDimensions();
  resizeCanvas(dimensions.width, dimensions.height);
}