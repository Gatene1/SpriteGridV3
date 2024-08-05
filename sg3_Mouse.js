// functions for First Window (Grid)
// =================================
        function littleWindowClick() {
         windowZRearrange(0);
         windowZRefresh();
        }
        function divTitleClick(e) {
            e.stopPropagation();
            document.addEventListener('mousemove', updateMousePos, true);
            lmbDown = true;
            titleBar.style.cursor = "grabbing";
            mousePositionOffset = [
                littleWindow.offsetLeft - e.clientX,
                littleWindow.offsetTop - e.clientY
            ];
            littleWindowClick();
        }
        function divTitleUnClick() {
            lmbDown = false;
            titleBar.style.cursor = "grab";
            document.removeEventListener('mousemove', updateMousePos, true);
        }
        function updateMousePos(e) {
            e.preventDefault();
            if (lmbDown) {
                mousePosition = {
                    x : e.clientX,
                    y : e.clientY
                };
                littleWindow.style.left = (mousePosition.x + mousePositionOffset[0]) + 'px';
                littleWindow.style.top = (mousePosition.y + mousePositionOffset[1]) + 'px';
            }
        }
        function gearClick() {
            switch (window1Color) {
                case "Green" :
                    window1Color = "Red";
                    littleWindow.style.backgroundColor = "darkred";
                    divSide1.style.backgroundColor = "darkred";
                    break;

                case "Red" :
                    window1Color = "Blue";
                    littleWindow.style.backgroundColor = "midnightblue";
                    divSide1.style.backgroundColor = "midnightblue";
                    break;

                case "Blue" :
                    window1Color = "Black";
                    littleWindow.style.backgroundColor = "#000000";
                    divSide1.style.backgroundColor = "#000000";
                    break;

                case "Black" :
                    window1Color = "White";
                    littleWindow.style.backgroundColor = "#ffffff";
                    littleWindow.style.color = "#000000";
                    divSide1.style.backgroundColor = "#ffffff";
                    divSide1.style.color = "#000000";
                    break;

                case "White" :
                    window1Color = "Yellow";
                    littleWindow.style.backgroundColor = "khaki";
                    divSide1.style.backgroundColor = "khaki";
                    break;

                case "Yellow" :
                    window1Color = "Green";
                    littleWindow.style.backgroundColor = "darkgreen";
                    littleWindow.style.color = "#ffffff";
                    divSide1.style.backgroundColor = "darkgreen";
                    divSide1.style.color = "#ffffff";
                    break;
            }
        }

// functions for Second Window (Preview)
// =====================================
        function prevLittleWindowClick() {
            windowZRearrange(1);
            windowZRefresh();
        }
        function prevDivTitleClick(e) {
            e.stopPropagation();
            document.addEventListener('mousemove', prevUpdateMousePos, true);
            prevLmbDown = true;
            prevTitleBar.style.cursor = "grabbing";
            prevMousePositionOffset = [
                prevLittleWindow.offsetLeft - e.clientX,
                prevLittleWindow.offsetTop - e.clientY
            ];
            prevLittleWindowClick();
        }
        function prevDivTitleUnClick() {
            prevLmbDown = false;
            prevTitleBar.style.cursor = "grab";
            document.removeEventListener('mousemove', prevUpdateMousePos, true);
        }
        function prevUpdateMousePos(e) {
            e.preventDefault();
            if (prevLmbDown) {
                prevMousePosition = {
                    x : e.clientX,
                    y : e.clientY
                };
                prevLittleWindow.style.left = (prevMousePosition.x + prevMousePositionOffset[0]) + 'px';
                prevLittleWindow.style.top = (prevMousePosition.y + prevMousePositionOffset[1]) + 'px';
            }
        }
        function prevGearClick() {
            switch (window2Color) {
                case "Green" :
                    window2Color = "Red";
                    prevLittleWindow.style.backgroundColor = "darkred";
                    divSide2.style.backgroundColor = "darkred";
                    break;

                case "Red" :
                    window2Color = "Blue";
                    prevLittleWindow.style.backgroundColor = "midnightblue";
                    divSide2.style.backgroundColor = "midnightblue";
                    break;

                case "Blue" :
                    window2Color = "Black";
                    prevLittleWindow.style.backgroundColor = "#000000";
                    divSide2.style.backgroundColor = "#000000";
                    break;

                case "Black" :
                    window2Color = "White";
                    prevLittleWindow.style.backgroundColor = "#ffffff";
                    prevLittleWindow.style.color = "#000000";
                    divSide2.style.backgroundColor = "#ffffff";
                    divSide2.style.color = "#000000";
                    break;

                case "White" :
                    window2Color = "Yellow";
                    prevLittleWindow.style.backgroundColor = "khaki";
                    divSide2.style.backgroundColor = "khaki";
                    break;

                case "Yellow" :
                    window2Color = "Green";
                    prevLittleWindow.style.backgroundColor = "darkgreen";
                    prevLittleWindow.style.color = "#ffffff";
                    divSide2.style.backgroundColor = "darkgreen";
                    divSide2.style.color = "#ffffff";
                    break;
            }
        }
// functions for Third Window (Color Iro.js)
// =====================================
function colorLittleWindowClick() {
    windowZRearrange(2);
    windowZRefresh();
}
function colorDivTitleClick(e) {
    e.stopPropagation();
    document.addEventListener('mousemove', colorUpdateMousePos, true);
    colorLmbDown = true;
    colorTitleBar.style.cursor = "grabbing";
    colorMousePositionOffset = [
        colorLittleWindow.offsetLeft - e.clientX,
        colorLittleWindow.offsetTop - e.clientY
    ];
    colorLittleWindowClick();
}
function colorDivTitleUnClick() {
    colorLmbDown = false;
    colorTitleBar.style.cursor = "grab";

    document.removeEventListener('mousemove', colorUpdateMousePos, true);
}
function colorUpdateMousePos(e) {
    e.preventDefault();
    if (colorLmbDown) {
        colorMousePosition = {
            x : e.clientX,
            y : e.clientY
        };
        colorLittleWindow.style.left = (colorMousePosition.x + colorMousePositionOffset[0]) + 'px';
        colorLittleWindow.style.top = (colorMousePosition.y + colorMousePositionOffset[1]) + 'px';
    }
}
function colorGearClick() {
    switch (window3Color) {
        case "Green" :
            window3Color = "Red";
            colorLittleWindow.style.backgroundColor = "darkred";
            divSide3.style.backgroundColor = "darkred";
            break;

        case "Red" :
            window3Color = "Blue";
            colorLittleWindow.style.backgroundColor = "midnightblue";
            divSide3.style.backgroundColor = "midnightblue";
            break;

        case "Blue" :
            window3Color = "Black";
            colorLittleWindow.style.backgroundColor = "#000000";
            divSide3.style.backgroundColor = "#000000";
            break;

        case "Black" :
            window3Color = "White";
            colorLittleWindow.style.backgroundColor = "#ffffff";
            colorLittleWindow.style.color = "#000000";
            divSide3.style.backgroundColor = "#ffffff";
            divSide3.style.color = "#000000";
            break;

        case "White" :
            window3Color = "Yellow";
            colorLittleWindow.style.backgroundColor = "khaki";
            divSide3.style.backgroundColor = "khaki";
            break;

        case "Yellow" :
            window3Color = "Green";
            colorLittleWindow.style.backgroundColor = "darkgreen";
            colorLittleWindow.style.color = "#ffffff";
            divSide3.style.backgroundColor = "darkgreen";
            divSide3.style.color = "#ffffff";
            break;
    }
}

// functions for Fourth Window (Grid Output)
// =====================================
function outLittleWindowClick() {
    windowZRearrange(3);
    windowZRefresh();
}
function outDivTitleClick(e) {
    e.stopPropagation();
    document.addEventListener('mousemove', outUpdateMousePos, true);
    outLmbDown = true;
    outTitleBar.style.cursor = "grabbing";
    outMousePositionOffset = [
        outLittleWindow.offsetLeft - e.clientX,
        outLittleWindow.offsetTop - e.clientY
    ];
    outLittleWindowClick();
}
function outDivTitleUnClick() {
    outLmbDown = false;
    outTitleBar.style.cursor = "grab";
    document.removeEventListener('mousemove', outUpdateMousePos, true);
}
function outUpdateMousePos(e) {
    e.preventDefault();
    if (outLmbDown) {
        outMousePosition = {
            x : e.clientX,
            y : e.clientY
        };
        outLittleWindow.style.left = (outMousePosition.x + outMousePositionOffset[0]) + 'px';
        outLittleWindow.style.top = (outMousePosition.y + outMousePositionOffset[1]) + 'px';
    }
}
function outGearClick() {
    switch (window4Color) {
        case "Green" :
            window4Color = "Red";
            outLittleWindow.style.backgroundColor = "darkred";
            divSide4.style.backgroundColor = "darkred";
            break;

        case "Red" :
            window4Color = "Blue";
            outLittleWindow.style.backgroundColor = "midnightblue";
            divSide4.style.backgroundColor = "midnightblue";
            break;

        case "Blue" :
            window4Color = "Black";
            outLittleWindow.style.backgroundColor = "#000000";
            divSide4.style.backgroundColor = "#000000";
            break;

        case "Black" :
            window4Color = "White";
            outLittleWindow.style.backgroundColor = "#ffffff";
            outLittleWindow.style.color = "#000000";
            divSide4.style.backgroundColor = "#ffffff";
            divSide4.style.color = "#000000";
            break;

        case "White" :
            window4Color = "Yellow";
            outLittleWindow.style.backgroundColor = "khaki";
            divSide4.style.backgroundColor = "khaki";
            break;

        case "Yellow" :
            window4Color = "Green";
            outLittleWindow.style.backgroundColor = "darkgreen";
            outLittleWindow.style.color = "#ffffff";
            divSide4.style.backgroundColor = "darkgreen";
            divSide4.style.color = "#ffffff";
            break;
    }
}

// functions for Fifth Window (File Saving)
// =====================================
function fileLittleWindowClick() {
    windowZRearrange(4);
    windowZRefresh();
}
function fileDivTitleClick(e) {
    e.stopPropagation();
    document.addEventListener('mousemove', fileUpdateMousePos, true);
    fileLmbDown = true;
    fileTitleBar.style.cursor = "grabbing";
    fileMousePositionOffset = [
        fileLittleWindow.offsetLeft - e.clientX,
        fileLittleWindow.offsetTop - e.clientY
    ];
    fileLittleWindowClick();
}
function fileDivTitleUnClick() {
    fileLmbDown = false;
    fileTitleBar.style.cursor = "grab";
    document.removeEventListener('mousemove', fileUpdateMousePos, true);
}
function fileUpdateMousePos(e) {
    e.preventDefault();
    if (fileLmbDown) {
        fileMousePosition = {
            x : e.clientX,
            y : e.clientY
        };
        fileLittleWindow.style.left = (fileMousePosition.x + fileMousePositionOffset[0]) + 'px';
        fileLittleWindow.style.top = (fileMousePosition.y + fileMousePositionOffset[1]) + 'px';
    }
}
function fileGearClick() {
    switch (window5Color) {
        case "Green" :
            window5Color = "Red";
            fileLittleWindow.style.backgroundColor = "darkred";
            divSide5.style.backgroundColor = "darkred";
            break;

        case "Red" :
            window5Color = "Blue";
            fileLittleWindow.style.backgroundColor = "midnightblue";
            divSide5.style.backgroundColor = "midnightblue";
            break;

        case "Blue" :
            window5Color = "Black";
            fileLittleWindow.style.backgroundColor = "#000000";
            divSide5.style.backgroundColor = "#000000";
            break;

        case "Black" :
            window5Color = "White";
            fileLittleWindow.style.backgroundColor = "#ffffff";
            fileLittleWindow.style.color = "#000000";
            divSide5.style.backgroundColor = "#ffffff";
            divSide5.style.color = "#000000";
            break;

        case "White" :
            window5Color = "Yellow";
            fileLittleWindow.style.backgroundColor = "khaki";
            divSide5.style.backgroundColor = "khaki";
            break;

        case "Yellow" :
            window5Color = "Green";
            fileLittleWindow.style.backgroundColor = "darkgreen";
            fileLittleWindow.style.color = "#ffffff";
            divSide5.style.backgroundColor = "darkgreen";
            divSide5.style.color = "#ffffff";
            break;
    }
}


// functions for Fifth Window (File Saving)
// =====================================
function spriteLittleWindowClick() {
    windowZRearrange(5);
    windowZRefresh();
}
function spriteDivTitleClick(e) {
    e.stopPropagation();
    document.addEventListener('mousemove', spriteUpdateMousePos, true);
    spriteLmbDown = true;
    spriteTitleBar.style.cursor = "grabbing";
    spriteMousePositionOffset = [
        spriteLittleWindow.offsetLeft - e.clientX,
        spriteLittleWindow.offsetTop - e.clientY
    ];
    spriteLittleWindowClick();
}
function spriteDivTitleUnClick() {
    spriteLmbDown = false;
    spriteTitleBar.style.cursor = "grab";
    document.removeEventListener('mousemove', spriteUpdateMousePos, true);
}
function spriteUpdateMousePos(e) {
    e.preventDefault();
    if (spriteLmbDown) {
        spriteMousePosition = {
            x : e.clientX,
            y : e.clientY
        };
        spriteLittleWindow.style.left = (spriteMousePosition.x + spriteMousePositionOffset[0]) + 'px';
        spriteLittleWindow.style.top = (spriteMousePosition.y + spriteMousePositionOffset[1]) + 'px';
    }
}
function spriteGearClick() {
    switch (window6Color) {
        case "Green" :
            window6Color = "Red";
            spriteLittleWindow.style.backgroundColor = "darkred";
            divSide6.style.backgroundColor = "darkred";
            break;

        case "Red" :
            window6Color = "Blue";
            spriteLittleWindow.style.backgroundColor = "midnightblue";
            divSide6.style.backgroundColor = "midnightblue";
            break;

        case "Blue" :
            window6Color = "Black";
            spriteLittleWindow.style.backgroundColor = "#000000";
            divSide6.style.backgroundColor = "#000000";
            break;

        case "Black" :
            window6Color = "White";
            spriteLittleWindow.style.backgroundColor = "#ffffff";
            spriteLittleWindow.style.color = "#000000";
            divSide6.style.backgroundColor = "#ffffff";
            divSide6.style.color = "#000000";
            break;

        case "White" :
            window6Color = "Yellow";
            spriteLittleWindow.style.backgroundColor = "khaki";
            divSide6.style.backgroundColor = "khaki";
            break;

        case "Yellow" :
            window6Color = "Green";
            spriteLittleWindow.style.backgroundColor = "darkgreen";
            spriteLittleWindow.style.color = "#ffffff";
            divSide6.style.backgroundColor = "darkgreen";
            divSide6.style.color = "#ffffff";
            break;
    }
}


function gridUpdateMousePos(e) {
// Position of mouse on page.
    let rect = canvasGrid.getBoundingClientRect();
    let root = document.documentElement;

    mouseXGrid = e.clientX - rect.left - root.scrollLeft;
    mouseYGrid = e.clientY - rect.top - root.scrollTop;

    mouseToGrid = (Math.floor(mouseYGrid / cellSize) * gridSize) + Math.floor(mouseXGrid / cellSize);



    // If the LMB is pressed down for drag painting.
     if (lmbDown) {
         changeCellColor();
     }

     if (rmbDown) {
         RMB();
     }
}

function gridUpdateMousePosColorChoose(e) {
// Position of mouse on page.
    let rect = colorChooseRow1.getBoundingClientRect();
    let root = document.documentElement;

    mouseXSpriteGrid = e.clientX - rect.left - root.scrollLeft;
    mouseYSpriteGrid = e.clientY - rect.top - root.scrollTop;

    mouseToGrid = (Math.floor(mouseYSpriteGrid / cellSize) * gridSize) + Math.floor(mouseXSpriteGrid / cellSize);

    gridSizeRangeText.value = gridSizeRange.value + " X " + gridSizeRange.value;
    cSizeRangeText.value = cellSizeRange.value + " Pixels";

    // If the LMB is pressed down for drag painting.
    // if (LMBDown) {
    //     colorChange();
    // }
}

function gridUpdateMousePosSpriteSheet(e) {
    if (spriteHeld) {
        let rect = spriteCanvas.getBoundingClientRect();
        let root = document.documentElement;
        mouseXSpriteGrid = e.clientX - rect.left - root.scrollLeft;
        mouseYSpriteGrid = e.clientY - rect.top - root.scrollTop;
        drawMouseSpriteUpdate();
    }
}