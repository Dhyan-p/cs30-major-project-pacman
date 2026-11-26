// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let maze;

async function setup() {
  maze = new MazeGrid();
  let dimensions = maze.calculateDimensions();
  let canvas = createCanvas(dimensions.width, dimensions.height);
  canvas.parent('canvas-container');
}

function draw() {
  // background(220);

  maze.drawWalls();
}
