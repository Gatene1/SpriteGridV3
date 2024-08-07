const fileOptions = {
    types: [
        {
            description: "GAT Files",
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

function parsePalletteFile() {
    let openFilePointer;
    let colorStoresLoc = 0;
    for (openFilePointer = 0; openFilePointer < openPalletteContents.length; openFilePointer += 7) {
        savedColorSquares[colorStoresLoc].colorHeld = openPalletteContents.substring(openFilePointer, openFilePointer + 7);
        colorStores[colorStoresLoc] = openPalletteContents.substring(openFilePointer, openFilePointer + 7);
        colorStoresLoc++;
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

async function saveSingleDrawing() {
    const saveFileHandle = await window.showSaveFilePicker(fileOptions);
    const saveFileWritableStream = await saveFileHandle.createWritable();
    const saveFileBlob = new Blob(grid, { type: "text/plain" });
    await saveFileWritableStream.write(saveFileBlob);
    titleBar.innerHTML = "Working Grid - " + saveFileHandle.name + " &#x1F4C2;";
    await saveFileWritableStream.close();
}

async function loadPalletteFile() {
    const [fileHandle] = await window.showOpenFilePicker(palletteOptions);
    const file = await fileHandle.getFile();
    openPalletteContents = await file.text();
    parsePalletteFile();
    openPalletteContents = "";
    colorTitleBar.innerHTML = "Color Selection - " + file.name + " &#x1F4C2;";
}

async function savePalletteFile() {
    const saveFileHandle = await window.showSaveFilePicker(palletteOptions);
    const saveFileWritableStream = await saveFileHandle.createWritable();
    const saveFileBlob = new Blob(colorStores, { type: "text/plain" });
    await saveFileWritableStream.write(saveFileBlob);
    colorTitleBar.innerHTML = "Color Selection - " + saveFileHandle.name + " &#x1F4C2;";
    await saveFileWritableStream.close();
}