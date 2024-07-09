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
            grid[openFilePointer] = "0";
        }
        charAtGrid++;

    }
}

function parsePalletteFile() {
    let openFilePointer;
    let colorStoresLoc = 0;
    for (openFilePointer = 0; openFilePointer < openPalletteContents.length; openFilePointer += 7) {
        savedColorSquares[colorStoresLoc] = openPalletteContents.substring(openFilePointer, openFilePointer + 7);
        colorStores[colorStoresLoc] = openPalletteContents.substring(openFilePointer, openFilePointer + 7);
        colorStoresLoc++;
    }
    alert(savedColorSquares + colorStores);
}

async function openSingleDrawing() {
    const [fileHandle] = await window.showOpenFilePicker(fileOptions);
    const file = await fileHandle.getFile();
    openFileContents = await file.text();
    parseOpenFile();
    refreshGridOutput();
    openFileContents = "";
}

async function saveSingleDrawing() {
    const saveFileHandle = await window.showSaveFilePicker(fileOptions);
    const saveFileWritableStream = await saveFileHandle.createWritable();
    const saveFileBlob = new Blob(grid, { type: "text/plain" });
    await saveFileWritableStream.write(saveFileBlob);
    await saveFileWritableStream.close();
}

async function loadPalletteFile() {
    const [fileHandle] = await window.showOpenFilePicker(palletteOptions);
    const file = await fileHandle.getFile();
    openPalletteContents = await file.text();
    parsePalletteFile();
    openPalletteContents = "";
}

async function savePalletteFile() {
    const saveFileHandle = await window.showSaveFilePicker(palletteOptions);
    const saveFileWritableStream = await saveFileHandle.createWritable();
    const saveFileBlob = new Blob(colorStores, { type: "text/plain" });
    await saveFileWritableStream.write(saveFileBlob);
    await saveFileWritableStream.close();
}