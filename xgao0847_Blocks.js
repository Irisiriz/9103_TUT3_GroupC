let grid = 20;
let wide = 34 * grid;
let height = wide;

let colour = {
    W: '#ffffff',
    G: '#d8d8d8',
    R: '#b33025',
    B: '#2d59b5',
    Y: '#f6e64b'
};

let blocks = [
    {col: 1, row:  4, w: 1, h: 1, colour: colour.G},
    {col: 1, row: 10, w: 3, h: 3, colour: colour.R},
    {col: 1, row: 26, w: 3, h: 3, colour: colour.R},
    {col: 5, row: 22, w: 1, h: 1, colour: colour.G},

    {col: 9, row:  1, w: 1, h: 1, colour: colour.G},
    {col: 10, row:  4, w: 1, h: 1, colour: colour.R},
    {col: 11, row:  7, w: 3, h: 6, colour: colour.B},
    {col: 11, row:  9, w: 1, h: 2, colour: colour.R},
    {col: 11, row: 15, w: 1, h: 1, colour: colour.G},

    {col: 11, row: 22, w: 3, h: 3, colour: colour.R},
    {col: 11, row: 28, w: 1, h: 1, colour: colour.G},
    {col: 15, row: 28, w: 1, h: 1, colour: colour.B}
];

function drawBlocks() {
    blocks.forEach(b => {
    fill(b.colour);
    rect(b.col * grid, b.row * grid, b.w * grid, b.h * grid);
    });
}
