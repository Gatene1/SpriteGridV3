function activateColor() {
    findWhereClicked();
    savedColorSquareArray[colorStoresSelected].borderColor = "#000000";
    colorStoresSelected = colorStoresClicked;
    savedColorSquareArray[colorStoresClicked].borderColor = GRID_BORDER_COLOR;
    currColor = savedColorSquareArray[colorStoresClicked].colorHeld;
    //alert (currColor);
    drawPreviewSquare();
    colorPicker.color.rgbaString = currColor;
}

function findWhereClicked() {
    savedColorSquareArray.forEach((square, index) => {
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

function rgbToUint({r, g, b, a = 1}) {
    const alphaByte = Math.round(a * 255);
    return (alphaByte << 24) | (b << 16) | (g << 8) | r;
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

function uIntToRgba(uInt) {
    return {
        g: (uInt >> 8) & 0xFF,
        b: (uInt >> 16) & 0xFF,
        a: (uInt >> 24) & 0xFF,
        r: uInt & 0xFF
    };
}

function hexToRGB(hexString) {
    return  {
        r: parseInt(hexString[1] + hexString[2], 16),
        g: parseInt(hexString[3] + hexString[4], 16),
        b: parseInt(hexString[5] + hexString[6], 16),
        a: 1
    }
}

function uIntToRgbString(uInt) {
    const stringVersion = uIntToRgb(uInt);
    return "rgb(" + stringVersion.r + ", " + stringVersion.g + ", " + stringVersion.b + ")";
}

function uIntToRgbaString(uInt) {
    const stringVersion = uIntToRgba(uInt);
    return "rgba(" + stringVersion.r + ", " + stringVersion.g + ", " + stringVersion.b + ", " + stringVersion.a + ")";
}

function hex8ToUint32(hex) {
    if (hex.startsWith("#")) hex = hex.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = parseInt(hex.slice(6, 8), 16);
    return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
}

function uint32ToHex8(uint) {
    const r = uint & 0xFF;
    const g = (uint >> 8) & 0xFF;
    const b = (uint >> 16) & 0xFF;
    const a = (uint >> 24) & 0xFF;

    return (
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0") +
        a.toString(16).padStart(2, "0")
    );
}

