function drawAll() {
    drawGrid();
    drawPreviewSquare(100);
    drawColorSquares();
    drawPreviewUpdate();
    if (spriteLittleWindow.style.visibility) drawSpriteCanvasUpdate();
    if (levelLittleWindow.style.visibility) {
        drawLevelCanvasUpdate();
        drawLevelExtendIcon();
    }
}

function whichCanvas(canvasToFigureOut) {
    let canvasChoice;
    switch (canvasToFigureOut) {
        case 0:
            canvasChoice = canvasGridCTX;
            break;
        case 1:
            canvasChoice = colorCanvasCTX;
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
        case 5:
            canvasChoice = levelCanvasCTX;
            break;
    }

    return canvasChoice;

}

function drawSquare (x, y, width, height, stroke, fillColor, whichCanvas = 0,
                     strokeColor = GRID_BORDER_COLOR, fill = true) {
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
        case 5:
            canvasChoice = levelCanvasCTX;
            break;
    }
    canvasChoice.strokeStyle = strokeColor;
    canvasChoice.lineWidth = 1;
    if (stroke) canvasChoice.strokeRect(x, y, width, height);
    if (fill) {
        canvasChoice.fillStyle = fillColor;
    }
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
                if (showTheGrid) {
                    currCellColor = GRID_FILL_COLOR;
                    drawSquare(j * cellSize + 2, i * cellSize + 2, cellSize, cellSize, showTheGrid, currCellColor);
                }
            } else {
                currCellColor = grid[currCell];
                drawSquare(j * cellSize + 2, i * cellSize + 2, cellSize, cellSize, showTheGrid, currCellColor);
            }

        }
    }
}

function drawPreviewSquare(dimensions) {
    drawSquare(2, 2, dimensions, dimensions, true, currColor, 1);
}

function drawText (whatToSay, x, y, fontSize, fontColor, canvasChoice = canvasGridCTX) {
    let drawCanvas;
    if (canvasChoice != canvasGridCTX) drawCanvas = whichCanvas(canvasChoice);
    drawCanvas.font = fontSize + "px Trebuchet MS";
    drawCanvas.fillStyle = fontColor;
    drawCanvas.fillText(whatToSay, x, y);
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

function drawSpriteCanvasUpdate() {
    let i, j;
    let spriteColNum = 0;
    let x = 0;
    let y = 0;
    let a, b;
    let spriteGridFillColor;
    let gridColumn = 0;
    let spriteColumn = 0;

    spriteCanvasCTX.clearRect(0, 0, spriteWindowWidth, spriteWindowHeight);

    for (i = 0; i < spriteGridSize; i++) {
        // Determines the fill color of the individual cell. If the cell being drawn is the same the user is hovering over, it will be the highlighted, else, will be the normal color.
        if (i == spriteChosen)
            spriteGridFillColor = SPRITE_GRID_CHOSEN_CELL_FILL_COLOR;
        else if (i == spriteCellOn)
            spriteGridFillColor = SPRITE_GRID_HOVER_FILL_COLOR;
        else
            spriteGridFillColor = SPRITE_GRID_FILL_COLOR;
        // Draw the individual cell of the spriteGrid.
        drawSquare (x, y, spriteCellSize, spriteCellSize, true, spriteGridFillColor, 4);
        // Draws the # of the individual cell in the lower right hand corner of the cell.
        drawText(i, x + spriteCellSize - 20, y + spriteCellSize - 5, 12, "black", 4)

        // If there is a sprite in the spriteGrid array for the cell being drawn, then draw the sprite.
        if (spriteGrid[i] != null) {
            // Center the icon in the cell.
            a = Math.floor((spriteCellSize - (spriteGrid[i].size * spriteInCellSize)) / 2);
            b = Math.floor((spriteCellSize - (spriteGrid[i].size * spriteInCellSize)) / 2);
            for (j = 0; j < spriteGrid[i].size * spriteGrid[i].size; j++) {
                if (spriteGrid[i].grid[j] != "0")
                    drawSquare(x + a, y + b, spriteInCellSize, spriteInCellSize, false, spriteGrid[i].grid[j], 4);
                spriteColumn++;
                if (spriteColumn >= spriteGrid[i].size) {
                    spriteColumn = 0;
                    a = Math.floor((spriteCellSize - (spriteGrid[i].size * spriteInCellSize)) / 2);
                    b += spriteInCellSize;
                } else {
                    a += spriteInCellSize;
                }

            }
        }

        // if the max number of cells has been drawn for a single row, restart the spriteColNum count, and the X-axis count, but increase the Y, if not, continue drawing on the same row.
        if (spriteColNum == numberOfSpritesPerRow - 1) {
            spriteColNum = 0;
            x = 0;
            y += spriteCellSize;
        } else {
            spriteColNum++;
            x += spriteCellSize;
        }
    }
    x = 0;
    y = 0;

    // if a sprite should be on the mouse cursor, then draw it.
    if (spriteHeld) {
        for (i = 0; i < mouseSprite.size * mouseSprite.size; i++) {
            if (mouseSprite.grid[i] != "0")
                drawSquare(mouseXSpriteCanvas + x, mouseYSpriteCanvas + y, mouseSpriteCellSize, mouseSpriteCellSize, false, mouseSprite.grid[i], 4);
            gridColumn++;
            if (gridColumn >= mouseSprite.size) {
                gridColumn = 0;
                x = 0;
                y += mouseSpriteCellSize;
            } else {
                x += mouseSpriteCellSize;
            }
        }
    }

}

function drawLevelCanvasUpdate() {
    let i, k;
    let x = 0;
    let y = levelCanvasHeight - levelGridCellSize;
    let gridColumn = 0;
    let cellCount = 0;

    // Clear the canvas, and then redraw the chosen background color.
    levelCanvasCTX.clearRect(0, 0, levelCanvasWidth, levelCanvasHeight);
    drawSquare(0, 0, levelCanvasWidth, levelCanvasHeight, false, bgColorChoose, 5);

    // Take the length of the canvas (levelCanvasWidth) and divide it / 17 (17 * 32 = 544 pixels wide for one screen)
    // Take the height of the canvas (levelCanvasHeight) and divide it / 15 (15 * 32 = 480 pixels tall for one screen)
    // Those equations above will tell how many squares to create (length/17 + height/15).
    // 17 x 13 pixels for one screen, each of these

    squaresForLevelGridWidth = Math.floor(levelCanvasWidth / levelGridCellSize); // Should be 17 initially
    squaresForLevelGridHeight = Math.floor(levelCanvasHeight / levelGridCellSize); // should be 15 initially
    levelGridSize = squaresForLevelGridWidth * squaresForLevelGridHeight;

    for (k = 0; k < levelGridSize; k++) {
        if (levelCellOn == k)
            drawSquare(x, y, levelGridCellSize, levelGridCellSize, true, "Green", 5, "black", true);
        else
            drawSquare(x, y, levelGridCellSize, levelGridCellSize, true, "Green", 5, "black", false);
        cellCount++;
        if (cellCount >= squaresForLevelGridWidth) {
            cellCount = 0;
            y -= levelGridCellSize;
            x = 0;
        } else {
            x += levelGridCellSize;
        }
    }

    // Need to reset the x and y coords to draw the mouse cursor of the sprite from either Sprite Sheet or Working Grid.
    x = 0;
    y = 0;

    // if a sprite should be on the mouse cursor, then draw it.
    if (levelSpriteHeld) {
        for (i = 0; i < levelMouseSprite.size * levelMouseSprite.size; i++) {
            if (levelMouseSprite.grid[i] != "0")
                drawSquare(mouseXLevelCanvas + x, mouseYLevelCanvas + y, mouseSpriteCellSize, mouseSpriteCellSize, false, levelMouseSprite.grid[i], 5, GRID_BORDER_COLOR, true);
                //drawText("Hello World!", mouseXLevelCanvas, mouseYLevelCanvas, 32, "white", 5);
            gridColumn++;
            if (gridColumn >= levelMouseSprite.size) {
                gridColumn = 0;
                x = 0;
                y += mouseSpriteCellSize;
            } else {
                x += mouseSpriteCellSize;
            }
        }
    }
}

function changeLevelBG() {
    bgColorChoose = currColor;
}

function turnGridOnOff() {
    showTheGrid = showGridCheckbox.checked;
}

function drawLevelExtendIcon() {
    //let logo { x, y };
}

function drawLevelGrid() {

}