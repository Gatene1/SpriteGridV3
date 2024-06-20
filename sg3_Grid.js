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

function changeCellColor() {
    if (Math.floor(mouseXGrid / cellSize) <= gridSize - 1) {
        grid[mouseToGrid] = currColor;
        refreshGridOutput();
    }
}

function refreshWorkingGrid() {

}