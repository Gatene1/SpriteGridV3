// Vars for Web App
        const FRAMES_PER_SECOND = 30;
        const CANVAS_GRID_WIDTH = 775;
        const CANVAS_GRID_HEIGHT = 775;
        const GRID_BORDER_COLOR = "#a0a0a0";
        const GRID_FILL_COLOR = "whitesmoke";

        var canvasGrid, canvasGridCTX;
        var pixelsPerUnit = 2;
        var gridSize = 16;
        var cellSize = 24;
        var gridSizeRange = document.getElementById("gridSizeRange");
        var gridSizeRangeText = document.getElementById("gridSizeRangeText");
        var cellSizeRange = document.getElementById("cellSizeRange");
        var cSizeRangeText = document.getElementById("cellSizeRangeText");

// Vars for every window
        var windowZ = [0, 1, 2, 3, 4];

// Vars for First Window (Grid)
        var lmbDown = false;
        var mousePosition;
        var mousePositionOffset = [0, 0];
        var titleBar = document.getElementById("titleBarHW");
        var littleWindow = document.getElementById("littleWindowHW");
        var gearHW = document.getElementById("gearHW");
        var closeHW = document.getElementById("closeHW");
        var window1Color = "Green";
        var divSide1 = document.getElementById("divSide1");

// Vars for Second Window (Preview)
        var prevLmbDown = false;
        var prevMousePosition;
        var prevMousePositionOffset = [0, 0];
        var prevTitleBar = document.getElementById("prevTitleBarHW");
        var prevLittleWindow = document.getElementById("prevLittleWindowHW");
        var prevGearHW = document.getElementById("prevGearHW");
        var prevCloseHW = document.getElementById("prevCloseHW");
        var window2Color = "Green";
        var divSide2 = document.getElementById("divSide2");

        // Vars for Third Window (Color Iro.js)
        var colorLmbDown = false;
        var colorMousePosition;
        var colorMousePositionOffset = [0, 0];
        var colorTitleBar = document.getElementById("colorTitleBarHW");
        var colorLittleWindow = document.getElementById("colorLittleWindowHW");
        var colorGearHW = document.getElementById("colorGearHW");
        var colorCloseHW = document.getElementById("colorCloseHW");
        var window3Color = "Green";
        var divSide3 = document.getElementById("divSide3");

        // Vars for Fourth Window (Grid Output)
        var outLmbDown = false;
        var outMousePosition;
        var outMousePositionOffset = [0, 0];
        var outTitleBar = document.getElementById("outTitleBarHW");
        var outLittleWindow = document.getElementById("outLittleWindowHW");
        var outGearHW = document.getElementById("outGearHW");
        var outCloseHW = document.getElementById("outCloseHW");
        var window4Color = "Green";
        var divSide4 = document.getElementById("divSide4");

        // Vars for Fifth Window (File Saving)
        var fileLmbDown = false;
        var fileMousePosition;
        var fileMousePositionOffset = [0, 0];
        var fileTitleBar = document.getElementById("fileTitleBarHW");
        var fileLittleWindow = document.getElementById("fileLittleWindowHW");
        var fileGearHW = document.getElementById("fileGearHW");
        var fileCloseHW = document.getElementById("fileCloseHW");
        var window5Color = "Green";
        var divSide5 = document.getElementById("divSide5");

window.onload = function() {
    // Web App Code
    gridSizeRange.value = gridSize;
    gridSizeRangeText.value = gridSize + " X " + gridSize;
    cellSizeRange.value = cellSize;
    cSizeRangeText.value = cellSize + " Pixels";

    canvasGrid = document.getElementById("canvasGrid");
    canvasGridCTX = canvasGrid.getContext('2d');

    setInterval(drawAll, 1000/FRAMES_PER_SECOND);

    // Listeners for whole app.
    divSide1.addEventListener('mousedown', function()
    { openWindow(0); windowZRearrange(0); windowZRefresh(); }, true);
    divSide2.addEventListener('mousedown', function()
    { openWindow(1); windowZRearrange(1); windowZRefresh(); }, true);
    divSide3.addEventListener('mousedown', function()
    { openWindow(2); windowZRearrange(2); windowZRefresh(); }, true);
    divSide4.addEventListener('mousedown', function()
    { openWindow(3); windowZRearrange(3); windowZRefresh(); }, true);
    divSide5.addEventListener('mousedown', function()
    { openWindow(4); windowZRearrange(4); windowZRefresh(); }, true);
    cellSizeRange.addEventListener('change', changeCellSize, false);
    gridSizeRange.addEventListener('change', changeGridSize, false);

    // Listeners for First Window (Grid)
    document.addEventListener('mousemove', updateMousePos, true);
    littleWindow.addEventListener('mousedown', littleWindowClick, false);
    titleBar.addEventListener('mousedown', divTitleClick, false);
    titleBar.addEventListener('mouseup', divTitleUnClick, true);
    gearHW.addEventListener('mousedown', gearClick, true);
    closeHW.addEventListener('mousedown', function() { closeWindow(0); }, true);

    // Listeners for Second Window (Preview)
    document.addEventListener('mousemove', prevUpdateMousePos, true);
    prevLittleWindow.addEventListener('mousedown', prevLittleWindowClick, false);
    prevTitleBar.addEventListener('mousedown', prevDivTitleClick, false);
    prevTitleBar.addEventListener('mouseup', prevDivTitleUnClick, true);
    prevGearHW.addEventListener('mousedown', prevGearClick, true);
    prevCloseHW.addEventListener('mousedown', function() { closeWindow(1); }, true);

    // Listeners for Third Window (Preview)
    document.addEventListener('mousemove', colorUpdateMousePos, true);
    colorLittleWindow.addEventListener('mousedown', colorLittleWindowClick, false);
    colorTitleBar.addEventListener('mousedown', colorDivTitleClick, false);
    colorTitleBar.addEventListener('mouseup', colorDivTitleUnClick, true);
    colorGearHW.addEventListener('mousedown', colorGearClick, true);
    colorCloseHW.addEventListener('mousedown', function() { closeWindow(2); }, true);

    // Listeners for Fourth Window (Preview)
    document.addEventListener('mousemove', outUpdateMousePos, true);
    outLittleWindow.addEventListener('mousedown', outLittleWindowClick, false);
    outTitleBar.addEventListener('mousedown', outDivTitleClick, false);
    outTitleBar.addEventListener('mouseup', outDivTitleUnClick, true);
    outGearHW.addEventListener('mousedown', outGearClick, true);
    outCloseHW.addEventListener('mousedown', function() { closeWindow(3); }, true);

    // Listeners for Fifth Window (Preview)
    document.addEventListener('mousemove', fileUpdateMousePos, true);
    fileLittleWindow.addEventListener('mousedown', fileLittleWindowClick, false);
    fileTitleBar.addEventListener('mousedown', fileDivTitleClick, false);
    fileTitleBar.addEventListener('mouseup', fileDivTitleUnClick, true);
    fileGearHW.addEventListener('mousedown', fileGearClick, true);
    fileCloseHW.addEventListener('mousedown', function() { closeWindow(4); }, true);

}