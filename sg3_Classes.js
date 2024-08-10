class savedColorSquare {
    static count = -1;
    constructor(x1, x2, y1, y2, borderColor, colorHeld) {
        this.num = ++savedColorSquare.count;
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.borderColor = borderColor;
        this.colorHeld = colorHeld;
    }
}

class spriteSquareIcon {
    constructor(size, grid) {
        this.size = size;
        this.grid = grid;
    }
}