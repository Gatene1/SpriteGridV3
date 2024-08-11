const fileOptions = {
    types: [
        {
            description: "GAT Working Grid Files",
            accept: {
                "text/parameters": [".gat"],
            },
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
};

const palletteOptions = {
    types: [
        {
            description: "GAT Palette Files",
            accept: {
                "text/parameters": [".gpt"],
            },
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
};

const spriteSheetOptions = {
    types: [
        {
            description: "GSS Sprite Sheet Files",
            accept: {
                "text/parameters": [".gss"],
            },
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
};

function parseOpenFile() {
    let openFilePointer;
    let charAtGrid = 0;
    for (openFilePointer = 0; openFilePointer < openFileContents.length; openFilePointer++) {
        if (openFileContents.charAt(openFilePointer) == '#') {
            grid[charAtGrid] = openFileContents.substring(openFilePointer, openFilePointer + 7);
            openFilePointer += 6;
        } else {
            grid[charAtGrid] = "0";
        }
        charAtGrid++;

    }
}

function parsePaletteFile() {
    let openFilePointer;
    let colorStoresLoc = 0;
    for (openFilePointer = 0; openFilePointer < openPaletteContents.length; openFilePointer += 7) {
        savedColorSquares[colorStoresLoc].colorHeld = openPaletteContents.substring(openFilePointer, openFilePointer + 7);
        colorStores[colorStoresLoc] = openPaletteContents.substring(openFilePointer, openFilePointer + 7);
        colorStoresLoc++;
    }
}

function parseSpriteGrid() {
    let i;
    for (i = 0; i < spriteGridSize; i++){
        if (spriteGrid[i] == null) {
            spriteGridBlob[i] = null;
        } else {
                spriteGridBlob[i] = spriteGrid[i].size + "," + spriteGrid[i].grid;
        }
    }
}

function parseSSheetFile() {
    let i, j;
    spriteGrid = [];
    // 1 = Size of the grid saved, 2 = The grid itself
    let expectClassPart = 1;
    let fileGridSize = 0;
    let fileGridGrid = [];
    let tempGridGridPointer = 0;
    let gridGridPointerCharCount = 0;
    for (i = 0; i < openSSheetContents.length; i++) {
        if (openSSheetContents.substring(i, i + 4) == "null") {
            spriteGrid.push(null);
            i += 3;
        } else {
            switch (expectClassPart) {
                case 1:
                    switch (openSSheetContents.substring(i, i + 2)) {
                        case "4,":
                            fileGridSize = 4;
                            i += 1;
                            break;
                        case "8,":
                            fileGridSize = 8;
                            i += 1;
                            break;
                        case "12":
                            fileGridSize = 12;
                            i += 2;
                            break;
                        case "16":
                            fileGridSize = 16;
                            i += 2;
                            break;
                        case "20":
                            fileGridSize = 20;
                            i += 2;
                            break;
                        case "24":
                            fileGridSize = 24;
                            i += 2;
                            break;
                        case "28":
                            fileGridSize = 28;
                            i += 2;
                            break;
                        case "32":
                            fileGridSize = 32;
                            i += 2;
                            break;
                    }
                    expectClassPart = 2;
                    break;
                case 2:
                    tempGridGridPointer = i;

                    if (openSSheetContents.substring(tempGridGridPointer, tempGridGridPointer + 1) == "0") {
                        fileGridGrid.push("0");
                        if (fileGridGrid.length < fileGridSize * fileGridSize) i += 1;
                    } else {
                        fileGridGrid.push(openSSheetContents.substring(tempGridGridPointer, tempGridGridPointer + 7))
                        if (fileGridGrid.length < fileGridSize * fileGridSize) i += 7; else i+= 6;
                    }

                    if (fileGridGrid.length == fileGridSize * fileGridSize) {
                        spriteGrid.push(new spriteSquareIcon(fileGridSize, fileGridGrid));
                        fileGridGrid = [];
                        //alert (spriteGrid[spriteGrid.length - 1].grid);
                        expectClassPart = 1;
                    }
                   break;
            }
        }
    }
}

async function openSingleDrawing() {
    const [fileHandle] = await window.showOpenFilePicker(fileOptions);
    const file = await fileHandle.getFile();
    openFileContents = await file.text();
    parseOpenFile();
    refreshGridOutput();
    openFileContents = "";
    titleBar.innerHTML = "Working Grid - " + file.name + " &#x1F4C2;";
}

async function loadPalletteFile() {
    const [fileHandle] = await window.showOpenFilePicker(palletteOptions);
    const file = await fileHandle.getFile();
    openPaletteContents = await file.text();
    parsePaletteFile();
    openPaletteContents = "";
    colorTitleBar.innerHTML = "Color Selection - " + file.name + " &#x1F4C2;";
}

async function openSpriteSheet() {
    const [openSSheetFileHandle] = await window.showOpenFilePicker(spriteSheetOptions);
    const openSSheetFile = await openSSheetFileHandle.getFile();
    openSSheetContents = await openSSheetFile.text();
    parseSSheetFile();
    openSSheetContents = "";
    spriteTitleBar.innerHTML = "Sprite Sheet - " + openSSheetFile.name + " &#x1F4C2;";
}

async function savePalletteFile() {
    const saveFileHandle = await window.showSaveFilePicker(palletteOptions);
    const saveFileWritableStream = await saveFileHandle.createWritable();
    const saveFileBlob = new Blob(colorStores, { type: "text/plain" });
    await saveFileWritableStream.write(saveFileBlob);
    colorTitleBar.innerHTML = "Color Selection - " + saveFileHandle.name + " &#x1F4C2;";
    await saveFileWritableStream.close();
}

async function saveSingleDrawing() {
    const saveFileHandle = await window.showSaveFilePicker(fileOptions);
    const saveFileWritableStream = await saveFileHandle.createWritable();
    const saveFileBlob = new Blob(grid, { type: "text/plain" });
    await saveFileWritableStream.write(saveFileBlob);
    titleBar.innerHTML = "Working Grid - " + saveFileHandle.name + " &#x1F4C2;";
    await saveFileWritableStream.close();
}

async function spriteSheetSave() {
    const sSheetFileHandle = await window.showSaveFilePicker(spriteSheetOptions);
    const sSheetFileWritableStream = await sSheetFileHandle.createWritable();
    parseSpriteGrid();
    const sSheetFileBlob = new Blob(spriteGridBlob, { type: "text/plain" });
    await sSheetFileWritableStream.write(sSheetFileBlob);
    spriteTitleBar.innerHTML = "Sprite Sheet - " + sSheetFileHandle.name + " &#x1F4C2;";
    await sSheetFileWritableStream.close();
    spriteGridBlob = [];
}