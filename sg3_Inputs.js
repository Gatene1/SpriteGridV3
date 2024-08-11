function saveToStore() {
    savedColorSquares.at(colorStoresSelected).colorHeld = currColor;
    colorStores[colorStoresSelected] = currColor;

}

function previewScale() {
    prevCellSize = previewSelect.value;
}

function colorText() {
    currColor = colorTextElement.value;
    colorPicker.color.hexString = currColor;
}

function workingGridToMouseSprite() {
    let spriteDimension = Math.floor(Math.sqrt(grid.length));
    let i;
    if (isNotEmpty(1)) {
        gridCopy = [];
        for (i = 0; i < gridSize * gridSize; i++) {
            gridCopy.push(grid[i]);
        }
        mouseSprite = new spriteSquareIcon(spriteDimension, gridCopy);
        spriteHeld = true;
        pasteSprite = true;
        eraseTool = false;
    }
}

function eraseInSpriteSheet() {
    let spriteDimension = Math.floor(Math.sqrt(eraserGrid.length));
    let i;
    gridCopy = [];
    for (i = 0; i < eraserGrid.length; i++) {
        gridCopy.push(eraserGrid[i]);
    }
    mouseSprite = new spriteSquareIcon(spriteDimension, gridCopy);
    spriteHeld = true;
    pasteSprite = false;
    eraseTool = true;
}

function createNewSpriteSheet() {
    spriteGrid = [];
    fillSpriteGridArrayWithNulls();
}