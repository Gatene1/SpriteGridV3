function drawAll() {
    drawGrid();
    drawPreviewSquare(100);
    drawColorSquares();
    drawPreviewUpdate();
    if (spriteLittleWindow.style.visibility == "visible") {
        drawSpriteUpdate();
        if (spriteHeld) {
            spriteCellLocation();
            drawMouseSpriteUpdate();
        }
    }

}

function drawSquare (x, y, width, height, stroke, fillColor, whichCanvas = 0,
                     strokeColor = GRID_BORDER_COLOR) {
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
        case 4:
            canvasChoice = spriteCanvasCTX;
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

function drawText (whatToSay, x, y, fontSize, fontColor, whichCanvas = canvasGridCTX) {
    whichCanvas.font = fontSize + "px Trebuchet MS";
    whichCanvas.fillStyle = fontColor;
    whichCanvas.fillText(whatToSay, x, y);
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
            savedColorSquares[i].x2 = colorStoresBorderSize * 2 + colorStoresSquareSize;
            savedColorSquares[i].y1 = colorStoresSquareSize * i + colorStoresBorderSize + (i * colorStoresSquareGap);
            savedColorSquares[i].y2 = savedColorSquares[i].y1 + colorStoresSquareSize + colorStoresBorderSize;
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
    let localCurrCell, currCellColor;
    let prevGridSize = gridSize * gridSize;

    previewWindowCTX.clearRect(0, 0, 300, 300);
    //alert ("GridSize = " + gridSize);

    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            localCurrCell = (i * gridSize) + j;

            if (grid[localCurrCell] == "0") {
                currCellColor = "#ffffff";
            } else {
                currCellColor = grid[localCurrCell];
            }

            drawSquare(j * prevCellSize + 2, i * prevCellSize + 2, prevCellSize, prevCellSize, false,
                currCellColor, 3);
        }
    }
}

function drawSpriteUpdate() {
    let colCount = 0;
    let i;
    let x = 0;
    let y = 0;
    let cellFillColor = GRID_FILL_COLOR;
    let j, k;
    let localCurrCell, currCellColor;
    spriteCanvasCTX.clearRect(0, 0, spriteWindowWidth, spriteWindowHeight);
    for (i = 0; i < spriteGridSize; i++) {
        if (colCount >= numberOfSpritesPerRow - 1) {
            x = 0;
            y += spriteCellSize;
            colCount = 0;
        }

        if (i == spriteCellOn)
            cellFillColor = "#dee5ff";
        else
            cellFillColor = GRID_FILL_COLOR;

        if (spriteGrid[i] != null) {
            drawSquare(x, y, spriteCellSize, spriteCellSize, true, cellFillColor,
                4);
            for (j = 0; j < spriteGrid[i].mySize; j++) {
                for (k = 0; k < spriteGrid[i].mySize; k++) {
                    localCurrCell = (j * spriteGrid[i].mySize) + k;

                    if (spriteGrid[i] != null && spriteGrid[i].chart[localCurrCell] != "0") {
                        currCellColor = spriteGrid[i].chart[localCurrCell];
                        drawSquare(x + (k * spriteInCellSize + 2), y + (j * spriteInCellSize + 2),
                            spriteInCellSize, spriteInCellSize, false, currCellColor, 4);
                    }

                }
            }
        } else {
            drawSquare(x, y, spriteCellSize, spriteCellSize, true, cellFillColor, 4);
        }

        drawText(i, x + (spriteCellSize - 20), y + (spriteCellSize - 5), 12, "black",
            spriteCanvasCTX);
        colCount++;
        x += spriteCellSize;
    }

}

function drawMouseSpriteUpdate() {
    let i, j;
    let localCurrCell, currCellColor;
    let prevGridSize = spriteMouseGridSize * spriteMouseGridSize;

    //spriteCanvasCTX.clearRect(0, 0, spriteWindowWidth, spriteWindowHeight);
    //alert ("GridSize = " + gridSize);

    // drawText(spriteRowOn + ", " + spriteColOn, mouseXGrid, mouseYGrid, "12pt", "black", spriteCanvasCTX);
    // drawText(spriteCellOn, mouseXGrid, mouseYGrid, "12pt", "black", spriteCanvasCTX);

    for (i = 0; i < spriteMouseGridSize; i++) {
        for (j = 0; j < spriteMouseGridSize; j++) {
            localCurrCell = (i * spriteMouseGridSize) + j;

            if (spritePrint[localCurrCell] != "0") {
                currCellColor = spritePrint[localCurrCell];
                drawSquare(mouseXSpriteGrid + (j * mouseSpriteCellSize + 2), mouseYSpriteGrid + (i * mouseSpriteCellSize + 2),
                    mouseSpriteCellSize, mouseSpriteCellSize, false, currCellColor, 4);
            }

        }
    }
}