function activateColor() {
    findWhereClicked();
    savedColorSquares[colorStoresSelected].borderColor = "#000000";
    colorStoresSelected = colorStoresClicked;
    savedColorSquares[colorStoresClicked].borderColor = GRID_BORDER_COLOR;
    currColor = savedColorSquares[colorStoresClicked].colorHeld;
    colorPicker.color.hex8String = currColor;
}

function findWhereClicked() {
    savedColorSquares.forEach((square, index) => {
        if (mouseXSpriteGrid >= square.x1 && mouseXSpriteGrid <= square.x2 && mouseYSpriteGrid >= square.y1 && mouseYSpriteGrid <= square.y2) {
            colorStoresClicked = index;
        }
    })
}

function copyColorToClipboard() {
    const text = document.getElementById('colorTextElement').value;
    navigator.clipboard.writeText(text)
        .catch( err => {
            alert('Failure to Copy');
        });
}

function rgbToUint(rgbObject) {
    return (rgbObject.r << 16) | (rgbObject.g << 8) | rgbObject.b;
    // alert (rgbObject.r + " " + rgbObject.g + " " + rgbObject.b);
    // alert (uIntNumber);
    // alert (uIntToRGB.r + " " + uIntToRGB.g + " " + uIntToRGB.b);
}

function uIntToRgb(uInt) {
    return {
        r: (uInt >> 16) & 0xFF,
        g: (uInt >> 8) & 0xFF,
        b: uInt & 0xFF
    };
}

function uIntToRgbString(uInt) {
    const stringVersion = uIntToRgb(uInt);
    return "rgb(" + stringVersion.r + ", " + stringVersion.g + ", " + stringVersion.b + ")";
}

