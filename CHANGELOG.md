# Initial Commit 6/15/24
- Moved each window around by its title.
- Changed the titlebar color of each window by clicking its gear icon.
- Minimized each window by clicking its close X icon.
- Able to bring back each window by clicking the icon bearing its name on
  the far left of the screen.
- Coordinated Z-Index property of each window, so when one is clicked, it
  has the highest z-index of them all, and reorders the other windows
  appropriately.

# 6/16/24
- Finished setting the functionality for the Grid Size and Cell Size range sliders. The sliders themselves are still unable to be dragged, but can still click within the boundaries of the range element to make changes to the grid or cell size ranges.
- Made the Working Grid window wider, and thinned the Color Selection and Preview windows, so the two ranges can be seen from the beginning of working with the Web App, in case they couldn't see them on smaller screens and didn't know they just need to scroll over to get them.

# 6/17/24 
- Spent free time trying to figure out why I couldn't drag the slider handles to change the slider's value.

# 6/18/24

- These two days, I spent trying to figure out my issue with the range form elements not dragging by the handle to change its value. Come to find out, through process of elimination, it was that I had an active _addEventListener()_ attached to the document, and for each window (so they would each be movable). I then took out the event listeners, and put them inside the functions that governed a mouse click on each window's titlebar. Then on each window's titlebar, when the mouse was unclicked, I _removeEventListner()_'d.
- Started on and finished the math for figuring out which element of grid[] the mouse hovered over on the "Working Grid".
- Added the clicking functionality on the Working grid, making the squares filled with the default color, and updated the grid output field when doing so.

# 6/19/24
- Changed event listener type from 'mousedown' to 'click', so the cell isn't colored when only the mouse is pressed down. _This may have an effect on coloring multiple cells with one click, but I'll figure that out when the time comes._
- Added boundaries to the click event over the Working Grid canvas, so you can't click past the size of the grid to color a cell.
- Added the color wheel with Iro.js API.
- Added the color preview square under the color wheel, and got the functionality working where you change the color in the wheel, it updates.
- Added the color text box to show the hex value of the color chosen, and added its functionality when changing colors in the color wheel.
- Changed the font in the Grid Output to Courier New.

# 6/20/24
- Added the "saved colors" section to the Color Selection window.

# 6/22/24
- Added functionality for clicking the savedColor squares to change the currColor.
- In doing so, the border of the savedColor square would change, the Iro.js widget would update, the preview square would update, and the textbox below would update as well.
- Completed the Save Color button functionality for the project.
- Added 5 more save color squares.

# 7/1/24
- Completed the scale window with the SELECT element to change the magnification of the preview.
- Completed drag n paint for LMB
- Completed RMB remove color for a cell on the grid
- Each click of the mouse, whether RMB or LMB is registered as a mouse click, and not differentiated with regular scripting. I haven't figured it out yet.
- Added functionality to the text box in the Color Selection Window, so when it is changed, the color wheel and color preview square change to the value entered.

# 7/4/24
- Changed the starting preview scale size to 2, and change the SELECTED value of the dropdown to 2X, so the Webpage starts with 2X selected.

# 7/7/24
- Finished the Open Single Drawing button functionality.

# 7/8/24
- Added the Load and Save Pallete buttons.
- Fixed the padding attribute of the save color button, so it fits on the line, and doesn't wrap.
- Started making the functionality of the Load and Save Pallete Buttons.

# 7/9/24
- Finished functionality for the Load and Save Pallete buttons.

# 7/10/24
- Added the rest of the buttons I wanted to make functionality for eventually.

# 7/22/24
- Added the Sprite Sheet DIV to the page.
- Added placeholder file names to the titlebars of various windows
- Added folder icons to titlebars that show file names
- Made gear Icon work for Spritesheet Window.

# 7/23/24
- Fixed Z-index issue with the SpriteSheet window.
- Made the SpriteSheet Window movable like the others.
- Made the SpriteSheet Window start collapsed, and the side tab visible.

# 8/3/24
- Implemented functionality of the "Use Working Grid" button.
- After clicking the "Use Working Grid" button, the mouse cursor would have the contents of the "Working Grid" at its tail.
- Made the spritePrint array & the "Working Grid" representation next to the mouse empty.

# 8/4/24
- Tried many things to solve the problem where opening another SingleCharacter file overwrites what's in the spriteGrid array with the contents of the file, but to no avail.

# 8/9/24
- Decided to delete everything having to do with the sprite grid, except the window and buttons themselves, but deleted their functionality, in an attempt to fix the problem where the entire sprite grid array was overwritten when a new sprite .gat was opened.
- Re-added the drawing of the sprite canvas' grid, its numbering system too.
- Re-added the highlighting of the cell the user is hovering over with the mouse, and by extension, knowing the cell number the user is hovering over.

# 8/10/24
- Finally figured out a workaround for what unknown reason was causing the spriteGrid array to be overwritten when a new .gat file is loaded. I created a separate array for the grid, and added each element one at a time to the array copy, and had the mouseSprite hold the copy.
- Made the sprites show in the individual cells if they existed in the array.
- Centered the sprites in the individual cells of the sprite grid.
- Cleared the spriteGrid canvas, to stop the redraw of the held sprites outside the grid itself.
- Fixed the bug that didn't let me choose a different color from the palette.
- Added the ability to click on the Sprite Sheet canvas, and it will show the sprite of what is in the Sprite Sheet away after clicking.
- Added functionality to the "Open Sprite sheet" button.
- Added functionality to the "Save" button in the Sprite Sheet window. 
- Created and added functionality to the "Erase" button in the Sprite Sheet Window.
- Removed the Undo button from the Sprite Sheet Window.
- Removed "Use Single Sprite" button from the Sprite Sheet Window.

# 8/11/24
- Added functionality to the "New Sprite Sheet" button in the File Saving Window.
- Made the MMB act as a color grabber for any cell in the Working Grid Window.
- Fixed the bug that wasn't allowing me to hold RMB to erase individual cells in the Working Grid Window.
- Made individual cells in the Sprite Sheet clickable to choose a single cell.
- Made the Level Editor Window and Movable like the others.
- Made the "Change BG Color" button.
- Added the functionality for the "Change BG Color" button.
- Ran into a problem where the Z-indexes aren't changing like they are supposed to when I made the new Level Editor Window.
- Fixed the bug where the Z-index for the Level Editor Window is working as it should; letting other windows in front of it.
- Added a "Show Grid?" Checkbox, and its functionality.
- Added a "Save As PNG" button, and its functionality.
- Made the form elements in the "Working Grid" Window all green and outlined like the others in other windows.

# 8/13/24
- Added the Grid layout to the level editor to be 17 x 15.

# 8/14/24
- Finished adding functionality to the "Use Chosen Sprite" button in the Level Editor, so that the mouse pointer looks like it is holding the sprite chosen in the Sprite Sheet.
- I have run into a snag where the cell I'm hovering over in the Level editor should be lit, but since the grid is drawn backwards, it doesn't work as expected. Draw the grid the right way? I'll find out.

# 8/15/24
- Figured out my mistake with the level Grid not highlighted the current cell hovered over. I didn't take into account of the background color being added each frame.
- Tried making it where you click on an occupied cell on the level grid, and it "selects" the cell, but for some reason, it just looks like it erases the cell, even after "selecting" another cell, it doesn't revert.
- I implemented clicking on the cell in the level grid to "paste" what's "held" by the mouse.
- Am working on when the user holds LMB and drags across the Level Editor Grid with a sprite "held" by the mouse, it constantly "pastes" the sprite onto each column.

# 8/16/24
- Figured out how to continuously "paste" a sprite onto the Level Editor Grid while holding LMB.

# 8/20/24
- Added the "Send To Working Grid" button to the Sprite Sheet Window.
- Lengthened the width of the button area of the Sprite Sheet Window to accommodate the new button's width.
- Added the functionality to the "Send To Working Grid" button.

# 9/3/24
- Made each Window that have canvases only refresh if its Window has focus.
- Made a noticeable difference between the Window that has focus and the ones that are blurred.
- I am currently working on when closing a Window, the next in the hierarchy is the Window that has focus.

# 9/4/24
- Kept working on getting the titleBar for the Window that has focus after closing another is closed to be bold and not italicized, but to no avail. Maybe not check if the Window in question has visibility, since the Z-order is updated before the actual closing?

# 9/6/24
- Kept working on getting the titleBar for the Window that has focus after closing another is closed to be bold and not italicized, but still having issues...
- Added a boolean closingWindow to tell the script that a Window is being closed, so not to rearrange the Window Z Order. Still no help, but I've gotten farther...It works once! Progress!

# 9/21/24
- When Opening a Single Character, after loading the file, the Working Grid gets focus back, so it displays the newly opened character.
- When Opening a Sprite Sheet, after loading the file, the Sprite Sheet Window gets focus back, so it displays the newly opened sprite sheet.
- Also, when opening a sprite sheet, if the Sprite Sheet Window isn't open, it opens the Sprite Sheet Window and makes it have focus.

# 9/22/24
- Made the levelGrid array only points to the associated Sprite Sheet's element in the spriteGrid array.

# 9/23/24
- Whenever scrolling in the Sprite Sheet Window, only the cells of the grid which are viewable are drawn every frame.

# 6/5/2025
- Rebuilt `closeWindow(windowIndex)`:
  - Prevents hidden windows from stealing focus
  - Shifts Z-order correctly on close
- Updated `windowZ[]` logic:
  - Now uses `-1` to represent collapsed/hidden windows
- Simplified `drawAll()`:
  - Added `isWindowActive(index, checkForFirstDraw)` helper function
  - Eliminated redundant visibility checks
- Refactored `WindowZRefresh()`:
  - Uses arrays and a loop to update z-index and title bar styling
  - Skips hidden (`-1`) windows
- Added `openWindow(whichWindow)`:
  - Restores hidden window
  - Promotes it to Z=6
  - Collapses corresponding tab
- Added `windowZRearrange(elementToLookAt)`:
  - Brings selected window to front
  - Decrements Z of other visible windows without dropping below 0

# 6/6/2025
✅ General Fixes and Refactors
Fixed Z-index handling with collapsed windows by updating windowZ to use -1 for hidden windows.

Updated closeWindow(), windowZRearrange(), and openWindow() functions for clean Z-order management without giving unwanted focus.

Created isWindowActive(index, checkForFirstDraw) helper to streamline visibility logic and reduce CPU usage.

Simplified drawAll() using isWindowActive() for conditional rendering of visible windows only.

Optimized WindowZRefresh() (formerly brute-force) using a loop and object mappings to update z-indexes and title bar styling cleanly.

🎯 Preview Window Enhancement
Added firstDraw = true to previewScale() in SG3Inputs.js, so preview window redraws automatically when magnification changes.

🧠 Performance Enhancements
Confirmed that startingNumViewable and endingNumViewable in DrawSpriteCanvasUpdate() provide effective redraw limits—no need for dirty flag system.

Discussed and decided not to migrate to Uint32Array for color storage, opting to keep hex strings for readability and workflow consistency.

Reinforced first-draw + focus-only rendering approach for sprite sheet and level editor windows to reduce redraws from 500-slot sprite data.

🧪 Typed Array Exploration
Created new project for Typed Array experimentation, including a well-commented JS file demonstrating:

Uint32Array usage

rgbToInt() and intToRGB() functions

Bit masking, shifting, and padded hex strings for compact RGB encoding

🖼️ PNG Export Fix
Rewrote saveGridAsPNG() to export only the visible grid (based on gridSize * cellSize) by copying the relevant section of canvasGrid to a temporary canvas before saving.

# 6/13/2025
🌈 Revamped the internal color system across the project, shifting toward a typed-array-friendly structure for storing and manipulating color data.

🔄 Updated functions related to color conversion, including RGB-to-Uint32 encoding for compact storage.

🧠 Reorganized color input logic to more cleanly handle palette management and swatch interaction.

💾 Integrated clipboard support for copying color values directly from the color input panel.

🖼️ Enhanced UX by refining how color palette slots are assigned and saved when interacting with the “Save to Palette” button.

🗂️ Committed incremental refactors across several files to prepare for tighter integration of typed arrays later, even if not fully deployed yet.

# 6/16/2025
🎨 Color Pipeline Refactored:

Upgraded to use hex8 strings (#RRGGBBAA) for UI representation.

Maintained rgba and Uint32 formats under the hood for logic and data.

Ensured all current color values in memory now consistently use hex8String.

🌈 Color Picker Integration Improved:

iro.js color picker confirmed to support RGBA natively.

Enabled alpha slider and verified color changes reflect in CurColor and ColorTextElement.

🔍 Canvas Update Mechanism Traced:

Discovered that drawPreviewSquare() is the actual function updating colorPrev.

Realized that stroke style remains opaque, creating a visual imbalance at low alphas.

# 6/17/2025
🧱 Core Fixes
✅ Resolved Uint32 byte order issues by converting to proper little-endian format:
Uint32 = (a << 24) | (b << 16) | (g << 8) | r

✅ Corrected uint32ToHex8() function to properly unpack RGBA from Uint32

✅ Updated rgbToUint() to support alpha channel and fall back to 255 if not provided

✅ Ensured consistent use of currColor as Uint32, not a hex string, across all systems

🎨 UI + Preview
✅ Fixed bug where preview square only updated on second click by explicitly calling drawPreviewSquare() before syncing colorPicker

✅ Cleaned up swatch click logic to align currColor, colorPicker, and visual feedback

🔢 Alpha Channel Work
⚠️ Discovered alpha slider issue:

Alpha appears as 0x01 instead of 0xFF in some cases

Potential cause: Iro.js passing alpha as integer, not float, or dropping alpha entirely

🧪 Created normalization strategy for a:

a > 1 ? a : Math.round(a * 255)

📄 Palette File Loading
✅ Finalized .gpt file reading using only the new Uint32 format

✅ Removed legacy HexString parsing logic

✅ File parser checks openPaletteContents[3] for | as system indicator

✅ Adjusted string reading logic to accommodate proper byte alignment

# 6/18/2025 [v3.3.0]
🧠 Core System Updates
Migrated fully to Uint32 color system (RGBA-aware).

Removed support for HexString colors in internal logic, but still supports legacy file formats temporarily.

Added proper little-endian conversion to fix RGBA interpretation in all displays and saving functions.

🧪 Bug Fixes
Fixed issue where swatches needed two clicks to update preview — drawPreviewSquare() now called at correct timing.

Resolved Hex string showing incorrect alpha byte (e.g., fe01 instead of ff) by correcting rgbToUint() logic.

Corrected Uint-to-RGBA conversion bug where (a * 255) & 0xFF was causing alpha values to truncate improperly. Fixed with proper normalization.

uIntToRgbaString() now reliably parses correct decimal alpha values.

Corrected color parsing issues where negative Uint32 values appeared in saved files but still loaded correctly due to JS two’s complement behavior.

🧰 File Handling
Updated parsePaletteFile() to:

Detect both legacy (#) and new (|) formats.

Handle files starting with "PAL" and route to proper parser.

Updated savePaletteFile() to:

Write only new Uint32-based format.

Skip extra pipe delimiters to prevent malformed save files.

🎨 Canvas and Rendering
Implemented checkerboard alpha pattern (aka "Transparency Board"):

Pattern visible in color swatches and grid canvas squares.

Toggleable via "Alpha" checkbox.

Optimized contrast using #eee and #ccc for improved visibility without visual noise.

Resolved issue where disabling Grid + Alpha background would flood canvas with current paint color.

Fixed by adjusting drawSquare() behavior and layering logic.

🧾 UI + Logic Enhancements
"Alpha" checkbox added for transparency overlay toggle.

"Show Grid" checkbox properly linked with dynamic canvas redraws.

Preview square now correctly initializes with loaded color (thanks to corrected script order and initialization logic).

🛠 Internal Consistency / Quality
Removed redundant isHex flag.

Continued emphasis on not hardcoding progressors or magic values — values like filePointerProgressor = 7 remain for clarity.

📌 Planned for SpriteGrid4.0
🚫 Drop legacy HexString file format support.

♿ Add Accessibility Mode (toggle high contrast, alt patterns, etc.).

🧰 Add deprecation note to README and gpt-spec.txt for old format.

✅ Checkerboard transparency support already planned to be improved/expanded.

# 6/19/2025
✅ Sprite Pasting now fully functional — individual sprite cells can receive sprites from the drawing grid via click, with cursor thumbnails and perfect centering.

✅ Erasing Individual Sprite Cells implemented — spriteGrid cells now support null-erasure with proper UI feedback.

✅ Created a New Retro Eraser Icon in 16×16 Uint32 format — vibrant 80s-style color scheme featuring hot pink, cyan, and purple.

✅ New sprite icons now follow the cursor correctly when “picked up,” and display perfectly inside Sprite Sheet cells and near the pointer.

✅ Mouse Sprite Icon System Updated — built using the spriteSquareIcon class; carries over Uint32 colors and grid size to render thumbnails.

✅ Improved drawSpriteCanvasUpdate() — draws viewable sprite sheet window with correct hover, click, and selected visual feedback.

✅ Dynamic view range system added to scrolling in sprite sheet view (calculates only what’s visible on screen for better performance).

🔧 System Improvements & Logic

✅ Refactored the addToSpriteGrid() and mouseSpriteSheetLeave() logic to manage tool states clearly (paste/erase/off).

✅ Finalized all logic for pasting, erasing, and drawing sprite thumbnails in grid cells, centered with spriteInCellSize.

✅ Confirmed all sprite cell indexing, math, and conditional rendering is working without bugs or misalignments.

📦 File Structure Planning for .gss

✅ Clarified final format:

Header starts with "SSHEET,0," (our first inside joke 😎)

Each sprite cell begins with two digits for gridSize, followed by the Uint32 pixel data

Sprite cells are delimited by pipes |, no explicit | needed after header

✅ Legacy format support considered deprecated in SpriteGrid4.0 (but remains in SpriteGrid3.3)

# 6/20/2025
Modern Sprite Sheet Format Implemented
New .gss files now use Uint32 RGBA values for full alpha support, cleaner parsing, and future-proofing.
→ Start your grids right, save your sprites tight.

Legacy Support Restored
.gss files saved in the legacy hex format are now fully supported, including auto-conversion to Uint32 on load.
→ Long live the old grid gods.

Automatic Format Detection
parseSSheetFile() cleanly detects SSHEET0 header to route files to the appropriate parser.
→ No more guessing or broken loads.

Middle Mouse Eyedropper Fixed
Siphon tool now works on all RGBA-based grids and correctly updates the current color preview.
→ Middle click with confidence.

Swatch + Color Wheel Syncing
Clicking a swatch now updates:

Hex input

RGBA sliders

Preview square
→ Stay visually in sync.

Grid Loading and Saving (GAT + GSS)
Both sprite grid (.gat) and sprite sheet (.gss) file formats can now be:

Created

Opened

Saved
With transparent values and size detection.
→ The trifecta is complete.

🧼 UI Tweaks & Final Touches
Level Editor Panel Hidden
It’s taking a nap until v4.0. Not removed, just tucked away for now.

“File Saving” Dialog Repurposed
Couldn’t be exorcised. Got rebranded as “Color Converters” to earn its keep.
→ Sometimes the ghost becomes the feature.

