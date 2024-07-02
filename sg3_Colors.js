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
        if (mouseXGrid >= square.x1 && mouseXGrid <= square.x2 && mouseYGrid >= square.y1 && mouseYGrid <= square.y2) {
            colorStoresClicked = index;
        }
    })
}

