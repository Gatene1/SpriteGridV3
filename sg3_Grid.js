function changeCellSize() {
    cSizeRangeText.value = cellSizeRange.value + " Pixels";
    cellSize = cellSizeRange.value;
}

function changeGridSize() {
    gridSizeRangeText.value = gridSizeRange.value + " X " + gridSizeRange.value;
    gridSize = gridSizeRange.value;
    fillArrayWithZeroes();
    refreshGridOutput();
}

function fillArrayWithZeroes() {
    let i;
    grid = [];
    for (i = 0; i < gridSize * gridSize; i++) {
        grid.push("0");
    }
    titleBar.innerHTML = "Working Grid - Unknown.gat &#x1F4C2;";
}

function fillSpriteGridArrayWithNulls() {
    let i;
    spriteGrid = [];
    for (i = 0; i < spriteGridSize; i++) {
        spriteGrid.push(null);
    }
}

function refreshGridOutput() {
    let i;
    gridOutput.value = "grid = [  ";

    // This begins with 0, and ends in - 1, because I want the last element of the grid[] array to not have a ","
    // after it.
    for (i = 0; i < gridSize * gridSize - 1; i++) {
        gridOutput.value = gridOutput.value + "\"" + grid[i] + "\", ";
    }
    // This will show the last value of the grid[] array, and end the output with a "];".
    gridOutput.value = gridOutput.value + "\"" + grid[gridSize * gridSize - 1] + "\"  ];";
}

function zeroOutRefresh() {
    fillArrayWithZeroes();
    refreshGridOutput();
}

function changeCellColor(e) {
    lmbDown = true;
    if (Math.floor(mouseXGrid / cellSize) <= gridSize - 1 && !rmbDown) {
        grid[mouseToGrid] = currColor == "#f5f5f5" ? "0" : currColor;
        refreshGridOutput();
    }
}

function RMB() {
    rmbDown = true;
    if (Math.floor(mouseXGrid / cellSize) <= gridSize - 1) {
        grid[mouseToGrid] = "0";
        refreshGridOutput();
    }
}

function LMBRelease() {
    lmbDown = false;
}

function RMBRelease() {
    rmbDown = false;
}

function siphonColor() {
    currColor = grid[mouseToGrid] == "0" ? "#f5f5f5" : grid[mouseToGrid];
    colorPicker.color.hexString = currColor;
    drawPreviewSquare(100);
}


function addToSpriteGrid(whichTool) {
    switch (whichTool) {
        case 1:
            spriteGrid[spriteCellOn] = mouseSprite;
            mouseSpriteSheetLeave();
            break;
        case 2:
            spriteGrid[spriteCellOn] = null;
            spriteChosen = -1;
            break;
    }
}

function addToLevelGrid(whichTool) {
    switch (whichTool) {
        case 1:
            if (pasteLevelSprite) {
                //levelGrid[levelCellOn] = levelMouseSprite;
                levelGrid[levelCellOn] = spriteChosen;
                //alert(spriteChosen);
            }
            break;
    }
}

function clickFunction() {
    if (eraseTool)
        addToSpriteGrid(2);
    else if (pasteSprite)
        addToSpriteGrid(1);
    else
        if (spriteChosen == spriteCellOn)
            spriteChosen = -1;
        else
            if (isNotEmpty(4)) spriteChosen = spriteCellOn;
}

function isNotEmpty(whichArray) {
    let i;
    let returnValue = false;
    switch (whichArray) {
        case 1:
            for (i = 0; i < grid.length; i++) {
                if (grid[i] != "0" && grid[i] != null) returnValue = true;
            }
            break;
        case 4:
            for (i = 0; i < spriteGrid[spriteCellOn].grid.length; i++) {
                if (spriteGrid[spriteCellOn].grid[i] != "0" && spriteGrid[spriteCellOn].grid[i] != null) returnValue = true;
            }
            break;
        case 5:
            for (i = 0; i < levelGrid[spriteCellOn].grid.length; i++) {
                if (levelGrid[spriteCellOn].grid[i] != "0" && spriteGrid[spriteCellOn].grid[i] != null) returnValue = true;
            }
            break;
    }
    return returnValue;
}

function levelClickFunction() {
    if (pasteLevelSprite)
        addToLevelGrid(1);
    else
        if (isNotEmpty(5)) levelSpriteChosen = levelCellOn;
}

