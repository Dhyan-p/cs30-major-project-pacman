// Source code for fixed grid of 21x19.

// Identifiers
const IDENTIFIERS = {
  EMPTY: 0,
  PILL: 1,
  WALL: 2,
  PACMAN_SPAWN: 3,
  BLINKY_SPAWN: 4,
  PINKY_SPAWN: 5,
  INKY_SPAWN: 6,
  CLYDE_SPAWN: 7,
  POWERPILL: 8,
  CHERRY: 9,
};

class MazeGrid {
  constructor() {
    // Grid configuration 
    this.gridConfig = {
      totalRows: 21,
      totalCols: 19,
      cellSize: 0,
    };

    // Fixed grid matrix
    this.matrix = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2],
      [2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 2],
      [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
      [2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2],
      [0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0],
      [2, 2, 2, 2, 1, 2, 1, 2, 2, 4, 2, 2, 1, 2, 1, 2, 2, 2, 2],
      [0, 1, 1, 1, 1, 1, 1, 0, 6, 5, 7, 0, 1, 1, 1, 1, 1, 1, 0],
      [2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2],
      [0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0],
      [2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2],
      [2, 8, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 2, 1, 8, 2],
      [2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2],
      [2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
      [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];

    // Setup Pills
    this.setupPills();
  }

  // Scan the matrix and make pill array
  setupPills() {
    this.pills = [];

    for (let row = 0; row < this.gridConfig.totalRows; row++) {
      for (let col = 0; col < this.gridConfig.totalCols; col++) {
        if (this.matrix[row][col] === IDENTIFIERS.PILL) {
          this.pills.push(new Pill(row, col, "pacpill"));
        }
        else if (this.matrix[row][col] === IDENTIFIERS.POWERPILL) {
          this.pills.push(new Pill(row, col, "powerpill"));
        }
        else if (this.matrix[row][col] === IDENTIFIERS.CHERRY) {
          this.pills.push(new Pill(row, col, "cherry"));
        }
      }
    }
  }

  // Draw pills
  drawPills() {
    for (let pill of this.pills) {
      pill.draw(this.gridConfig.cellSize);
    }
  }

  // Calculate cell size and canvas size
  calculateDimensions() {
    let maxCellWidth = Math.floor(windowWidth * 0.90 / this.gridConfig.totalCols);
    let maxCellHeight = Math.floor(windowHeight * 0.90 / this.gridConfig.totalRows);
    this.gridConfig.cellSize = Math.min(maxCellWidth, maxCellHeight);

    return {
      width: this.gridConfig.cellSize * this.gridConfig.totalCols,
      height: this.gridConfig.cellSize * this.gridConfig.totalRows,
    };
  }

  // Draw maze walls
  drawWalls() {
    push();
    stroke("blue");
    fill("blue");

    for (let row = 0; row < this.gridConfig.totalRows; row++) {
      for (let col = 0; col < this.gridConfig.totalCols; col++) {
        if (this.matrix[row][col] === IDENTIFIERS.WALL) {
          let x = col * this.gridConfig.cellSize;
          let y = row * this.gridConfig.cellSize;
          square(x, y, this.gridConfig.cellSize);
        }
      }
    }
    pop();
  }
}