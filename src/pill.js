// Source code for pills

class Pill {
    constructor(row, col, type) {
        this.row = row;
        this.col = col;
        this.type = type; // pacpill or powerpill or cherry
        this.isEaten = false;

        // Points based on type
        if (this.type === "pacpill") this.points = 10;
        else if (this.type === "powerpill") this.points = 50;
        else if (this.type === "cherry") this.points = 100;
        else this.points = 0;
    }

    // Draw pill image at the center of the cell
    draw(cellSize) {
        if (this.isEaten) return;

        push();
        imageMode(CENTER);
        let x = (this.col * cellSize) + cellSize/2;
        let y = (this.row * cellSize) + cellSize/2;

        let img = pickups[this.type];
        if (img) {
            let size;
            if (this.type === "pacpill") size = cellSize * 0.2;
            else if (this.type === "powerpill") size = cellSize * 0.5;
            else if (this.type === "cherry") size = cellSize * 0.9;

            image(img, x, y, size, size);
        }
        pop();
    }
}