function drawAll() {
    let i, j;
    let currCell, currCellColor;
    canvasGridCTX.clearRect(0, 0, 775, 775);

    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            currCell = (i * gridSize) + j;

            if (grid[currCell] == "0") {
                currCellColor = GRID_FILL_COLOR;
            } else {
                currCellColor = grid[currCell];
            }

            drawSquare(j * cellSize + 2, i * cellSize + 2, cellSize, cellSize, true, currCellColor);
        }
    }


    // drawSquare(0,0,775, 775, false, "midnightblue");

}

function drawSquare (x, y, width, height, stroke, fillColor) {
    canvasGridCTX.fillStyle = fillColor;
    canvasGridCTX.strokeStyle = GRID_BORDER_COLOR;
    if (stroke) canvasGridCTX.strokeRect(x, y, width, height);
    canvasGridCTX.fillRect(x, y, width, height);
}

function drawText (whatToSay, x, y, fontSize, fontColor) {
    canvasGridCTX.font = fontSize + "px Trebuchet MS";
    canvasGridCTX.fillStyle = fontColor;
    canvasGridCTX.fillText(whatToSay, x, y);
}