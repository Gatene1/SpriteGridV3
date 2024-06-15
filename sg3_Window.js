function windowZRearrange(elementToLookAt) {
    switch (windowZ[elementToLookAt]) {
        case 0 :
            windowZ[windowZ.indexOf(1)]--;
            windowZ[windowZ.indexOf(2)]--;
            windowZ[windowZ.indexOf(3)]--;
            windowZ[windowZ.indexOf(4)]--;
        break;

        case 1 :
            windowZ[windowZ.indexOf(2)]--;
            windowZ[windowZ.indexOf(3)]--;
            windowZ[windowZ.indexOf(4)]--;
        break;

        case 2 :
            windowZ[windowZ.indexOf(3)]--;
            windowZ[windowZ.indexOf(4)]--;
        break;

        case 3 :
            windowZ[windowZ.indexOf(4)]--;
        break;
    }

    windowZ[elementToLookAt] = 4;
}

function windowZRefresh() {
    littleWindow.style.zIndex = windowZ[0].toString();
    prevLittleWindow.style.zIndex = windowZ[1].toString();
    colorLittleWindow.style.zIndex = windowZ[2].toString();
    outLittleWindow.style.zIndex = windowZ[3].toString();
    fileLittleWindow.style.zIndex = windowZ[4].toString();
}

function closeWindow(whichWindow) {
    switch (whichWindow) {
        case 0 :
            littleWindow.style.visibility = "collapse";
            divSide1.style.visibility = "visible";
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
    }
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
    }
}