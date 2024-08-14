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