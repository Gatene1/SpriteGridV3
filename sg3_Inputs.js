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

function grabFromMainGrid() {
    spriteHeld = true;
    spritePrint = grid;
}