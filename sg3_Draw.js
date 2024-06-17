function drawAll() {

    canvasGridCTX.clearRect(0, 0, 775, 775);

    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            drawSquare(i * cellSize + 2, j * cellSize + 2, cellSize, cellSize, true, GRID_FILL_COLOR)
        }
    }


    //drawSquare(0,0,775, 775, false, "midnightblue");

}

function drawSquare (x, y, width, height, stroke, fillColor) {
    canvasGridCTX.fillStyle = fillColor;
    canvasGridCTX.strokeStyle = GRID_BORDER_COLOR;
    if (stroke) canvasGridCTX.strokeRect(x, y, width, height);
    canvasGridCTX.fillRect(x, y, width, height);
}