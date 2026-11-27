// Source code for Pac-Man

class PacMan {
  constructor() {
    this.row = 0;
    this.col = 0;
    this.pacmanX = 0;
    this.pacmanY = 0;
    this.startX = 0;
    this.startY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.targetRow = 0;
    this.targetCol = 0;
    this.progress = 0; // O at start 1 when reached the target
    this.pacmanSpeed = 0.08; // How much progress increases per frame
    this.isMoving = false;
    this.currentDirection = "left"; // Default direction
    this.nextDirection = "left"; // Player queue direction
    this.arrowDirection = "arrowLeft";
    this.curentPacmanFrame = 1;
  }

  // Draw Pac-Man
  drawPacman(maze) {
    push();
    let pacmanImg = pacmanAssets[this.currentDirection];

    // Common variables that does not change for image
    let dx = this.pacmanX;
    let dy = this.pacmanY;
    let size = maze.gridConfig.cellSize;

    // Start position, width, and height
    let sy = 0;
    let sx = null;
    let sWidth = pacmanImg.width / pacmanAssets.numsFrame;
    let sHeight = pacmanImg.height;

    // Set sx variables depending on the frame; also 1, 2, 3, and 4 is the frame number inside the image
    if (this.curentPacmanFrame === 1) {
      sx = 0;
    }
    if (this.curentPacmanFrame === 2) {
      sx = sWidth;
    }
    if (this.curentPacmanFrame === 3) {
      sx = 2*sWidth;
    }
    if (this.curentPacmanFrame === 4) {
      sx = 3*sWidth;
    }

    imageMode(CENTER);
    image(pacmanImg, dx, dy, size, size, sx, sy, sWidth, sHeight);
    pop();
  }
}