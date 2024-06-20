function drawAll() {
    drawGrid();
    drawPreviewSquare(100);

}

function drawSquare (x, y, width, height, stroke, fillColor, whichCanvas = 0) {
    let canvasChoice = canvasGridCTX;
    let strokeColor = GRID_BORDER_COLOR;

    switch (whichCanvas) {
        case 0:
            canvasChoice = canvasGridCTX;
            strokeColor = GRID_BORDER_COLOR;
            break;
        case 1:
            canvasChoice = colorCanvasCTX;
            strokeColor = "#000000";
            break;
    }
    canvasChoice.strokeStyle = strokeColor;
    canvasChoice.lineWidth = 1;
    if (stroke) canvasChoice.strokeRect(x, y, width, height);
    canvasChoice.fillStyle = fillColor;
    canvasChoice.fillRect(x, y, width, height);
}

function drawGrid() {
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
}

function drawPreviewSquare(dimensions) {
    drawSquare(2, 2, dimensions, dimensions, true, currColor, 1);
}

function drawText (whatToSay, x, y, fontSize, fontColor) {
    canvasGridCTX.font = fontSize + "px Trebuchet MS";
    canvasGridCTX.fillStyle = fontColor;
    canvasGridCTX.fillText(whatToSay, x, y);
}

