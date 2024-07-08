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
async function openSingleDrawing() {
    const [fileHandle] = await window.showOpenFilePicker(fileOptions);
    const file = await fileHandle.getFile();
    openFileContents = await file.text();
    parseOpenFile();
    refreshGridOutput();
}

async function saveSingleDrawing() {
    const saveFileHandle = await window.showSaveFilePicker();
    const saveFileWritableStream = await saveFileHandle.createWritable();
    const saveFileBlob = new Blob(grid, { type: "text/plain" });
    await saveFileWritableStream.write(saveFileBlob);
    await saveFileWritableStream.close();
}

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