function windowZRearrange(elementToLookAt) {
    switch (windowZ[elementToLookAt]) {
        case 0 :
            windowZ[windowZ.indexOf(1)]--;
            windowZ[windowZ.indexOf(2)]--;
            windowZ[windowZ.indexOf(3)]--;
            windowZ[windowZ.indexOf(4)]--;
            windowZ[windowZ.indexOf(5)]--;
            windowZ[windowZ.indexOf(6)]--;
            break;

        case 1 :
            windowZ[windowZ.indexOf(2)]--;
            windowZ[windowZ.indexOf(3)]--;
            windowZ[windowZ.indexOf(4)]--;
            windowZ[windowZ.indexOf(5)]--;
            windowZ[windowZ.indexOf(6)]--;
            break;

        case 2 :
            windowZ[windowZ.indexOf(3)]--;
            windowZ[windowZ.indexOf(4)]--;
            windowZ[windowZ.indexOf(5)]--;
            windowZ[windowZ.indexOf(6)]--;
            break;

        case 3 :
            windowZ[windowZ.indexOf(4)]--;
            windowZ[windowZ.indexOf(5)]--;
            windowZ[windowZ.indexOf(6)]--;
            break;

        case 4 :
            windowZ[windowZ.indexOf(5)]--;
            windowZ[windowZ.indexOf(6)]--;
            break;

        case 5:
            windowZ[windowZ.indexOf(6)]--;
            break;
    }

    windowZ[elementToLookAt] = 6;
}

function windowZRefresh() {
    // The if-statements below each zIndex assignation is to change text of the titleBar depending on if it's the one
    // selected or not.
    littleWindow.style.zIndex = windowZ[0].toString();
        if (windowZ[0] == 6) {
            titleBar.style.fontWeight = "bold";
            titleBar.style.fontStyle = "normal";
        } else {
            titleBar.style.fontWeight = "normal";
            titleBar.style.fontStyle = "italic";
        }
    prevLittleWindow.style.zIndex = windowZ[1].toString();
        if (windowZ[1] == 6) {
            prevTitleBar.style.fontWeight = "bold";
            prevTitleBar.style.fontStyle = "normal";
        } else {
            prevTitleBar.style.fontWeight = "normal";
            prevTitleBar.style.fontStyle = "italic";
        }
    colorLittleWindow.style.zIndex = windowZ[2].toString();
        if (windowZ[2] == 6) {
            colorTitleBar.style.fontWeight = "bold";
            colorTitleBar.style.fontStyle = "normal";
        } else {
            colorTitleBar.style.fontWeight = "normal";
            colorTitleBar.style.fontStyle = "italic";
        }
    outLittleWindow.style.zIndex = windowZ[3].toString();
        if (windowZ[3] == 6) {
            outTitleBar.style.fontWeight = "bold";
            outTitleBar.style.fontStyle = "normal";
        } else {
            outTitleBar.style.fontWeight = "normal";
            outTitleBar.style.fontStyle = "italic";
        }
    fileLittleWindow.style.zIndex = windowZ[4].toString();
        if (windowZ[4] == 6) {
            fileTitleBar.style.fontWeight = "bold";
            fileTitleBar.style.fontStyle = "normal";
        } else {
            fileTitleBar.style.fontWeight = "normal";
            fileTitleBar.style.fontStyle = "italic";
        }
    spriteLittleWindow.style.zIndex = windowZ[5].toString();
        if (windowZ[5] == 6) {
            spriteTitleBar.style.fontWeight = "bold";
            spriteTitleBar.style.fontStyle = "normal";
        } else {
            spriteTitleBar.style.fontWeight = "normal";
            spriteTitleBar.style.fontStyle = "italic";
        }
    levelLittleWindow.style.zIndex = windowZ[6].toString();
        if (windowZ[6] == 6) {
            levelTitleBar.style.fontWeight = "bold";
            levelTitleBar.style.fontStyle = "normal";
        } else {
            levelTitleBar.style.fontWeight = "normal";
            levelTitleBar.style.fontStyle = "italic";
        }
}

function hasVisibility(whichWindow) {
    switch (whichWindow) {
        case 0 :
            if (littleWindow.style.visibility != "collapse") return true; else return false;
            break;
        case 1 :
            if (prevLittleWindow.style.visibility != "collapse") return true; else return false;
            break;
        case 2 :
            if (colorLittleWindow.style.visibility != "collapse") return true; else return false;
            break;
        case 3 :
            if (outLittleWindow.style.visibility != "collapse") return true; else return false;
            break;
        case 4 :
            if (fileLittleWindow.style.visibility != "collapse") return true; else return false;
            break;
        case 5 :
            if (spriteLittleWindow.style.visibility != "collapse") return true; else return false;
            break;
        case 6 :
            if (levelLittleWindow.style.visibility != "collapse") return true; else return false;
            break;
    }
}

function closeWindow(whichWindow) {
    let foundFocus = false;
    let currCheckBlurForVisible = 5;
    let nextWindowToHaveFocus;

    windowZRearrange(whichWindow);
    windowZRefresh();

    switch (whichWindow) {
        case 0 :
            littleWindow.style.visibility = "collapse";
            divSide1.style.visibility = "visible"
            break;
        case 1 :
            prevLittleWindow.style.visibility = "collapse";
            divSide2.style.visibility = "visible";
            break;
        case 2 :
            colorLittleWindow.style.visibility = "collapse";
            divSide3.style.visibility = "visible";
            break;
        case 3 :
            outLittleWindow.style.visibility = "collapse";
            divSide4.style.visibility = "visible";
            break;
        case 4 :
            fileLittleWindow.style.visibility = "collapse";
            divSide5.style.visibility = "visible";
            break;
        case 5 :
            spriteLittleWindow.style.visibility = "collapse";
            divSide6.style.visibility = "visible";
            break;
        case 6 :
            levelLittleWindow.style.visibility = "collapse";
            divSide7.style.visibility = "visible";
            break;
    }

        // If this Window is the Window that has focus, then the next blurred AND visible Window needs focus.
    while (!foundFocus) {
        nextWindowToHaveFocus = windowZ.indexOf(currCheckBlurForVisible);
        if (hasVisibility(nextWindowToHaveFocus)) {
            alert ("0 = " + windowZ[0] + "\n1 = " + windowZ[1] + "\n2 = " + windowZ[2] + "\n3 = " + windowZ[3] + "\n4 = " + windowZ[4] + "\n5 = " + windowZ[5] + "\n6 = " + windowZ[6]);
            alert ("New Window to have focus = " + nextWindowToHaveFocus);
            windowZRearrange(nextWindowToHaveFocus);
            windowZRefresh();
            foundFocus = true;
        } else {
            currCheckBlurForVisible--;
        }
        if (currCheckBlurForVisible == -1) foundFocus = true;
    }
    alert ("0 = " + windowZ[0] + "\n1 = " + windowZ[1] + "\n2 = " + windowZ[2] + "\n3 = " + windowZ[3] + "\n4 = " + windowZ[4] + "\n5 = " + windowZ[5] + "\n6 = " + windowZ[6]);
}
function openWindow(whichWindow) {
    switch (whichWindow) {
        case 0 :
            littleWindow.style.visibility = "visible";
            divSide1.style.visibility = "hidden";
            break;
        case 1 :
            prevLittleWindow.style.visibility = "visible";
            divSide2.style.visibility = "hidden";
            break;
        case 2 :
            colorLittleWindow.style.visibility = "visible";
            divSide3.style.visibility = "hidden";
            break;
        case 3 :
            outLittleWindow.style.visibility = "visible";
            divSide4.style.visibility = "hidden";
            break;
        case 4 :
            fileLittleWindow.style.visibility = "visible";
            divSide5.style.visibility = "hidden";
            break;
        case 5 :
            spriteLittleWindow.style.visibility = "visible";
            divSide6.style.visibility = "hidden";
            break;
        case 6 :
            levelLittleWindow.style.visibility = "visible";
            divSide7.style.visibility = "hidden";
            break;
    }
}