function activateColor() {
    findWhereClicked();
    savedColorSquares[colorStoresSelected].borderColor = "#000000";
    colorStoresSelected = colorStoresClicked;
    savedColorSquares[colorStoresClicked].borderColor = GRID_BORDER_COLOR;
    currColor = savedColorSquares[colorStoresClicked].colorHeld;
    colorPicker.color.hexString = currColor;
}

function findWhereClicked() {
    savedColorSquares.forEach((square, index) => {
        if (mouseXSpriteGrid >= square.x1 && mouseXSpriteGrid <= square.x2 && mouseYSpriteGrid >= square.y1 && mouseYSpriteGrid <= square.y2) {
            colorStoresClicked = index;
        }
    })
}



