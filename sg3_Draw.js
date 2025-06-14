function drawAll() {
    // Each if-statement will check to see if this is the initial drawing of WebApp or if the Window is active and
    // the Window is visible, then draw its contents.
    if (isWindowActive(0, true)) {
        drawGrid();
        drawPreviewUpdate();
    }
    if (isWindowActive(2, true)){
        drawColorSquares();
        drawPreviewSquare(100);
    }
    if (isWindowActive(5, false)) drawSpriteCanvasUpdate();
    if (isWindowActive(6, false)) {
        drawLevelCanvasUpdate();
        drawLevelExtendIcon();
    }
    if (firstDraw) firstDraw = false;
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

            if (grid[currCell] == 0) {
                if (showTheGrid) {
                    currCellColor = "rgb(245, 245, 245)";
                    drawSquare(j * cellSize + 2, i * cellSize + 2, cellSize, cellSize, showTheGrid, currCellColor);
                }
            } else {
                currCellColor = uIntToRgbString(grid[currCell]);
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
    let a, b, i, j;
    let spriteColNum = 0;
    let spriteGridFillColor;
    let gridColumn = 0;
    let spriteColumn = 0;
    let startingNumViewable = (Math.floor(divForSpriteGrid.scrollTop / spriteCellSize) * numberOfSpritesPerRow );
    let endingNumViewable = spriteGridViewableHeight * numberOfSpritesPerRow + startingNumViewable - 1;
    let startingLineViewable = startingNumViewable / numberOfSpritesPerRow * spriteCellSize;
    let x = 0;
    let y = startingLineViewable;



    // spriteCellSize = 64;
    // numberOfSpritesPerRow = 10
    // scrollTop will show me, basically, the Y value of what is visible...
    // So, at 133.03572082519, 20-79 is visible  (Floor(scrollTop / spriteCellSize)) * numberOfSpritesRow = starting #
    // then starting# + (numberOfSpritesRow - 1) will be the last # of the first row.
    // spriteGridViewableHeight * numberOfSpritesPerRow + starting# - 1 = ending #

    //gridSizeRangeText.value = startingNumViewable + " - " + (spriteGridViewableHeight * numberOfSpritesPerRow + startingNum - 1);

    spriteCanvasCTX.clearRect(0, 0, spriteWindowWidth, spriteWindowHeight);

    if (endingNumViewable >= spriteGridSize) endingNumViewable = spriteGridSize - 1;

    if (startingNumViewable < endingNumViewable) {
        for (i = startingNumViewable; i <= endingNumViewable; i++) {
            // Determines the fill color of the individual cell. If the cell being drawn is the same the user is hovering over, it will be the highlighted, else, will be the normal color.
            if (i == spriteChosen)
                spriteGridFillColor = SPRITE_GRID_CHOSEN_CELL_FILL_COLOR;
            else if (i == spriteCellOn)
                spriteGridFillColor = SPRITE_GRID_HOVER_FILL_COLOR;
            else
                spriteGridFillColor = SPRITE_GRID_FILL_COLOR;
            // Draw the individual cell of the spriteGrid.
            drawSquare(x, y, spriteCellSize, spriteCellSize, true, spriteGridFillColor, 4);
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
        gridSizeRangeText.value = startingNumViewable + " - " + endingNumViewable;
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
// This function exists so the LMB can be held to draw the sprites in multiple cells under 1 LMB press, instead
// of one at a time like in the Sprite Sheet.
function drawLevelSprite(cellOn, x, y) {
    let k = cellOn;
    let a = 0;
    let b = 0;
    let j;
    let spriteColumn = 0;

    // If there is a sprite in the LevelGrid array for the cell being drawn, then draw the sprite.
    if (levelGrid[k] != null) {
        // Center the icon in the cell.
        //a = Math.floor((levelGridCellSize - (levelGrid[k].size * levelSpriteInCellSize)) / 2);
        //b = Math.floor((levelGridCellSize - (levelGrid[k].size * levelSpriteInCellSize)) / 2);
        for (j = 0; j < spriteGrid[levelGrid[k]].size * spriteGrid[levelGrid[k]].size; j++) {
            if (spriteGrid[levelGrid[k]].grid[j] != "0")
            //if (spriteGrid[levelGrid[k].grid[j]] != "0")
                //drawSquare(x, y, levelSpriteInCellSize, levelSpriteInCellSize, false, levelGrid[k].grid[j], 5);
                //drawSquare(x + a, y + b, levelSpriteInCellSize, levelSpriteInCellSize, false, levelGrid[k].grid[j], 5);
                drawSquare(x + a, y + b, levelSpriteInCellSize, levelSpriteInCellSize, false, spriteGrid[levelGrid[k]].grid[j], 5);
            spriteColumn++;
            if (spriteColumn >= spriteGrid[levelGrid[k]].size) {
                spriteColumn = 0;
                a = Math.floor((levelGridCellSize - (spriteGrid[levelGrid[k]].size * levelSpriteInCellSize)) / 2);
                b += levelSpriteInCellSize;
            } else {
                a += levelSpriteInCellSize;
            }

        }
    }
}

function drawLevelCanvasUpdate() {
    let a, b, i, j, k;
    let x = 0;
    let y = 0;
    let gridColumn = 0;
    let spriteColumn = 0;
    let cellCount = 0;
    let spriteGridFillColor;
    let spriteGridFillBool;

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
        if (levelCellOn == k) {
            spriteGridFillColor = SPRITE_GRID_HOVER_FILL_COLOR;
            spriteGridFillBool = true;
        } else if (levelSpriteChosen == k) {
            spriteGridFillColor = SPRITE_GRID_HOVER_FILL_COLOR;
            spriteGridFillBool = true;
        } else {
            spriteGridFillColor = SPRITE_GRID_FILL_COLOR;
            spriteGridFillBool = false;
            drawSquare(x, y, levelGridCellSize, levelGridCellSize, true, bgColorChoose, 5, "black", true);
        }
        drawSquare(x, y, levelGridCellSize, levelGridCellSize, true, spriteGridFillColor, 5, "black", spriteGridFillBool);

        // This function exists so the LMB can be held to draw the sprites in multiple cells under 1 LMB press, instead
        // of one at a time like in the Sprite Sheet.
        drawLevelSprite(k ,x, y);

        cellCount++;
        if (cellCount >= squaresForLevelGridWidth) {
            cellCount = 0;
            y += levelGridCellSize;
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
        for (i = 0; i < spriteGrid[levelMouseSprite].size * spriteGrid[levelMouseSprite].size; i++) {
            if (spriteGrid[levelMouseSprite].grid[i] != "0")
                drawSquare(mouseXLevelCanvas + x, mouseYLevelCanvas + y, mouseSpriteCellSize, mouseSpriteCellSize, false, spriteGrid[levelMouseSprite].grid[i], 5, GRID_BORDER_COLOR, true);
                //drawText("Hello World!", mouseXLevelCanvas, mouseYLevelCanvas, 32, "white", 5);
            gridColumn++;
            if (gridColumn >= spriteGrid[levelMouseSprite].size) {
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

function debugAction() {
    //gridSizeRangeText.value = divForSpriteGrid.scrollTop;
    //let startingNum = (Math.floor(divForSpriteGrid.scrollTop / spriteCellSize) * numberOfSpritesPerRow );
    //gridSizeRangeText.value = startingNum + " - " + (spriteGridViewableHeight * numberOfSpritesPerRow + startingNum - 1);

    // spriteCellSize = 64;
    // numberOfSpritesPerRow = 10
    // scrollTop will show me, basically, the Y value of what is visible...
    // So, at 133.03572082519, 20-79 is visible  (Floor(scrollTop / spriteCellSize)) * numberOfSpritesRow = starting #
    // then starting# + (numberOfSpritesRow - 1) will be the last # of the first row.
    // spriteGridViewableHeight * numberOfSpritesPerRow + starting# - 1 = ending #
}