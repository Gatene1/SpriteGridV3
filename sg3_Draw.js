function drawAll() {
    drawGrid();
    drawPreviewSquare(100);
    drawColorSquares();
    drawPreviewUpdate();

}

function drawSquare (x, y, width, height, stroke, fillColor, whichCanvas = 0, strokeColor = GRID_BORDER_COLOR) {
    let canvasChoice = canvasGridCTX;

    switch (whichCanvas) {
        case 0:
            canvasChoice = canvasGridCTX;
            strokeColor = GRID_BORDER_COLOR;
            break;
        case 1:
            canvasChoice = colorCanvasCTX;
            strokeColor = "#000000";
            break;
        case 2:
            canvasChoice = colorChooseRow1CTX;
            break;
        case 3:
            canvasChoice = previewWindowCTX;
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

function drawColorSquares() {
    let i, j;

    if (!alreadyDeclaredSavedColorClasses) {
        for (i = 0; i <= savedColorSquare.count; i++) {

            if (savedColorSquares[i].num === colorStoresSelected)
                savedColorSquares[i].borderColor = GRID_BORDER_COLOR;
            else
                savedColorSquares[i].borderColor = "#000000";

            savedColorSquares[i].x1 = colorStoresBorderSize;
            savedColorSquares[i].x2 = colorStoresBorderSize * 2 + colorStoresSquareSize; // *2 on the border for clearance of both left and right border + the size of the actual square.
            savedColorSquares[i].y1 = colorStoresSquareSize * i + colorStoresBorderSize + (i * colorStoresSquareGap); // 0 = 10  1 = 34
            savedColorSquares[i].y2 = savedColorSquares[i].y1 + colorStoresSquareSize + colorStoresBorderSize;  // 0 = 36
            savedColorSquares[i].colorHeld = colorStores[i];
            drawSquare(
                savedColorSquares[i].x1,
                savedColorSquares[i].y1,
                colorStoresSquareSize, colorStoresSquareSize, true,
                savedColorSquares[i].colorHeld, 2,
                savedColorSquares[i].borderColor
            );
        }
    } else {
        for (j = 0; j <= savedColorSquare.count; j++) {
            drawSquare(
                savedColorSquares[j].x1,
                savedColorSquares[j].y1,
                colorStoresSquareSize, colorStoresSquareSize, true,
                savedColorSquares[j].colorHeld, 2,
                savedColorSquares[j].borderColor
            );
        }
    }
    alreadyDeclaredSavedColorClasses = true;
}

function drawPreviewUpdate() {
    let i, j;
    let currCell, currCellColor;
    let prevGridSize = gridSize * gridSize;

    previewWindowCTX.clearRect(0, 0, 300, 300);
    //alert ("GridSize = " + gridSize);

    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            currCell = (i * gridSize) + j;

            if (grid[currCell] == "0") {
                currCellColor = "#ffffff";
            } else {
                currCellColor = grid[currCell];
            }

            drawSquare(j * prevCellSize + 2, i * prevCellSize + 2, prevCellSize, prevCellSize, false, currCellColor, 3);
        }
    }
}