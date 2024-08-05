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

function fillSpriteArrayWithZeroes() {
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

function RMB(e) {
    e.preventDefault();

    if (Math.floor(mouseXGrid / cellSize) <= gridSize - 1) {
        grid[mouseToGrid] = "0";
        refreshGridOutput();
    }
}

function LMBRelease() {
    lmbDown = false;
}

function spriteCellLocation() {
    let x = Math.floor(mouseXSpriteGrid);
    let y = Math.floor(mouseYSpriteGrid);
    //576
    spriteRowOn = Math.floor(y/64);
    spriteColOn = Math.floor(x/64);

    spriteCellOn = (spriteRowOn * 9) + spriteColOn;

    let rowEndingColumnPixel = numberOfSpritesPerRow * spriteCellSize;
}

function addToSpritePrintArray() {
    if (spriteHeld && spriteCellOn >= 0) {
        spriteGrid[spriteCellOn] = null;
        spriteGrid[spriteCellOn] = new spriteSquareIcon(Math.floor(Math.sqrt(spritePrint.length)), spritePrint);
        spriteHeld = false;
    }

}